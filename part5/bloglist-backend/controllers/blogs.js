const blogRouter = require('express').Router();

const Blog = require('../models/blog');
const Comment = require('../models/comment');
const middlewares = require('../utils/middlewares');

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
        .populate('user', {
            username: 1,
            name: 1,
            id: 1,
        })
        .populate('comments', {
            content: 1,
            id: 1,
        });
    response.status(200).json(blogs);
});

blogRouter.post('/', middlewares.userExtractor, async (request, response) => {
    const { author, url, likes, title } = request.body;

    if (!author || !url || !title) {
        return response.status(400).json({
            error: 'make sure all required fields are sent (title, author, url)',
        });
    }

    const user = request.user; // added by middleware
    const blog = new Blog({
        url,
        author,
        title,
        likes: likes === undefined ? 0 : likes,
        user: user._id,
    });

    const savedBlog = await blog.save();
    user.blogs = [...user.blogs, savedBlog];
    await user.save();
    response.status(201).json(
        await savedBlog.populate('user', {
            username: 1,
            name: 1,
            id: 1,
        })
    );
});

blogRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id).populate('user', {
        username: 1,
        name: 1,
        id: 1,
    });
    if (blog) {
        response.status(200).json(blog);
    } else {
        response.status(404).end();
    }
});

blogRouter.delete(
    '/:id',
    middlewares.userExtractor,
    async (request, response) => {
        const user = request.user;

        const blog = await Blog.findById(request.params.id);

        if (!blog) {
            return response
                .status(400)
                .json({ error: 'there is no blog with this id' });
        }

        if (blog.user.toString() !== user._id.toString()) {
            return response
                .status(401)
                .json({ error: 'only the creater of the blog can delete it' });
        }
        await Blog.findByIdAndDelete(request.params.id);
        response.status(204).end();
    }
);

blogRouter.put('/:id', async (request, response) => {
    const { author, url, likes, title, user } = request.body;

    if (!author || !url || !title || !likes || !user) {
        return response.status(400).json({
            error: 'make sure all required fields are sent (title, author, url, likes, user)',
        });
    }

    const blog = { url, author, title, likes, user };
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
        new: true,
        runValidators: true,
        context: 'query',
    })
        .populate('user', {
            username: 1,
            name: 1,
            id: 1,
        })
        .populate('comments', {
            id: 1,
            content: 1,
        });

    if (updatedBlog) {
        response.status(201).json(updatedBlog);
    } else {
        response.status(400).json({
            error: `No blog with this id: '${request.params.id}'`,
        });
    }
});

blogRouter.post('/:id/comments', async (request, response) => {
    const { content } = request.body;
    const comment = new Comment({
        content,
        blog: request.params.id,
    });

    const savedComment = await comment.save();
    const blog = await Blog.findById(request.params.id);
    blog.comments = [...blog.comments, savedComment];
    await blog.save();
    response.status(201).json(savedComment);
});
module.exports = blogRouter;
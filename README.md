## Full_Stack_Open

## Part 1
1) The Html that you wrote in component is not html its jsx and its compilation is handled by Babel which converts new JS(ECMA14) into older JS version to maintain browser compatibility.
2) JSX is XML and is like HTML jsut that we can embed dynamic content by writing JS within curly braces.
3) In JSX every tag needs to be closed even if they are single tags, like <br> in html is fine but in JSX has to be <br/>.
4) The App.jsx defines a react component which is rendered by main.jsx. The root component is App. The first letter of component must be capital and must have one root element. ex - <div></div>, [], <></>
5) The data can be passed to components using props. you define props in the component and use the argument passed with props when using the components to pass the props values. We can pass multiple values of props.
6) Official name of JS standard is ECMAScript. latest version is ES14. Most browsers dont support all feature of ECMA so Babal is used to transpile JS.
7) Since we are using latest react version with hooks we dont need to use objects with methods and classes. How cool is that.
8) Changing state has to always be done by setting the state to a new object.
9) Never mutate the state of the components directly, ex using push or direct increments.
10) State updates in the react happens asyncronously, i.e not immediately.
11) Never define a component within a component.

## Part 2 
1) Create components in a separate files in components folder at src folder. 
2) Data can be stored and fetched from the component's state.
3) Form are implemented using the controlled components and implementing event handlers. 
4) All JavaScript projects are defined using the node package manager, aka npm.
5) We use promised based function fetch to pull data from server, so that processes get executed asyncronously. Axios work like similar to fetch.
6) Effect hook - Effects let a component connect to and synchronize with external systems. It takes two parameters, first the effect itself and second is used to specify how many times the effect should run.


## All commands used

# To create vite app
1) npm create vite@latest directory_name -- --template react
2) cd directory_name
3) npm install
4) npm run dev

# To start json server in a directory 
1) npx json-server --port 3001 --watch db.json   (Here db.json is filename)
2) to install globally - npm install -g json-server

# To install packages & adding server to start from package.json
1) npm install package_name ex: npm install axios
2) npm install json-server --save-dev (here json server installed as dev dependancy)
3) also add ["server": "json-server -p3001 --watch db.json"] in package.json so that we can directly start server by running npm run server


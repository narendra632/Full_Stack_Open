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

## All commands used

# To create vite app
1) npm create vite@latest directory_name -- --template react
2) cd directory_name
3) npm install
4) npm run dev

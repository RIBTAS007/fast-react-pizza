## Fast REACT PIZZA

- in this read me I have shared my learnings.

## get started with Vite

- You can use npm create vite to start a project with vite.
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
- Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- So when we install using vite no extra library gets installed. Hence we need to do npm i
- in vite we use `npm run dev` instead of `npm start`

## setup eslint

- we also need to configure eslint: `npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev`
- after this we need toupdate eslintrc.json and vite.config.json files

## Planning the project

- divide app into features
- divide apps into pages
  - think about overall and page level UI
  - break UI into components
  - design asnd build static version
- divide the app into feature categories
  - think about state management and dataflow
- decide th tech stack we need to use.

## components

- user - global UI state
- menu - global remote state ( menu comes from API)
- cart - global
- order - global remote

## tech stack

- react router (render as you fetch instead of fetch on render) - routing + remote state management
- tailwindcss - styling
- redux - UI state manegement

## folder structure

- we will follow feature based folder structure
- for doing this you can download the starter boiler plate code.

## react router dom

- npm i react-router-dom
- hen we can use createBrowser router to create the paths
- and then we can return the routerprovider ad pass the routers as an argument
- AppLayout will be the parent compinent so it will also be in the parent route
- the child routes data is shown in the outlet.

## loader in react router dom

- we create function to fetch data from some api
- then we provide that function to one of our routes, as soon as the application goes to that route.
- once the data is reached it will be provide to the component using a custom hook.
- so first we will create a loader function in menu.jsx that calls the api function.
- thn we will import that loader function and will add it into thr route path of menu
- then in the menu component we will use the `useloaderdata()` hook to import it.

## usenavigation hook

- it tells whether the data is loading or is idle.
- we can use it to show the loader
- we can get the error using useRouteError() hook when their is some issue in the routing.
- useNavigate hook is different from usenavigation hook, it is used when we want to change the route based on cretain conditions.

## Form

- sor Form is a component provided by react router.
- so whenever we submit this Form, react router will automatically call the action function.
- lecture number 291 is important
- the action function will then the response that we submitted in the form using request.
- Then we can call the createorder function and then we can use `redirect` to direct us to the order page.
- we need to use `redirect` instead of useNavigate hook because we usenvaigate can only be called inside a component function.
- useActionData() hook is used to get the data that is returned by the action.

## Tailwind

- we will be using tailwind to style our app

## Redux toolkit

- npm i @reduxjs/toolkit react-redux
- ```javascript
  decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalprice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
  ```
- by doing this we can call one reducer function inside another reducer function.
- we can aslo directly use store reducer like store.dispatch(clearCart()); but we should not overuse it.
- redux by nature is synch, so in order to work with async code we can use thunks
- thunks is a middleware that sits between the dispatching and the reducer itself.
- in the PUT request we need to send the entire object, in the patch request we just need to send the data we want to update or add in the object.

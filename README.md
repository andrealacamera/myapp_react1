# myapp_react1 

This is a demo app, made just for fun...

Here I used the following packages|libs|things:
- [CRA](https://create-react-app.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)


## Instructions (How to setup this project from scratch):
1. CRA
- Install basic example with `npx create-react-app myapp_react1` 
- Remove style (App.css, and its refs within App.js)
- Remove extra stuff, such as: reportWebVitals.js, app.test.js, setupTests.js, etc
- Remove web-vitals package `npm remove web-vitals`
- Clean index.css (here we are going to put Tailwind settings)
 
2. Tailwind
- Follow instructions [here](https://tailwindcss.com/docs/guides/create-react-app)
- Write code in App.js: e.g. remove existing stuff and add a simple `<h1>` tag with a couple of Tailwind classes.

3. React Router 
- Install the package `npm install react-router-dom@6`
- Create `src/pages` and `src/components` subfolders
- Create `Home.js`, `Page.js`, and some common components such as `Header.js`, `Footer.js`, etc. 
- Add the following code to `App.js` (or index.js, depends on you). Follow [documentation](https://reactrouter.com/docs/en/v6) for more complex examples 
```
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Page from './pages/Page'
import Header from './components/Header'
import Footer from './components/Footer'
...
...
<BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
    </Routes>
    <Footer />
</BrowserRouter>
```

## Advanced using of React/Router in this app

### useContext

First, set a `UserContext` in `src/components/UserContext.js`: define the shape that the consumers expect!

Second, in `App.js` define the initial value (e.g. by using setState hook). In particular, set the two functions for login and logout. Then wrap nested components with `<UserContext.Provider value={value}>`. 

The Context is used in two components `Header.jsx` and `Login.jsx`. In the header, we control wheather the user is logged and we show the protected page in the menu. On the other hand, in the Login page, we access to the name of the user (if logged) and we can toggle login/logout thanks to the `<UserContext.Consumer>` tag. Note that the argument of the Consumer is a function.

### Protected page(s)
By using the previous Context we can check the user and `Navigate` to homepage if the user is not logged in. 


### LocalStorage
Added the `useLocalStorage` hook to preserve login status when app reloads. 

### Further implementations:
- Move Context stuff from App.js to a component. 
- Better understand these examples (if pertinent):

1. [authentication](https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/)
2. [auth example](https://reactrouter.com/docs/en/v6/examples/auth)


# myapp_react1 

This is a demo app, made just for fun...

Here I used the following packages / things:
- [CRA](https://create-react-app.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- 


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
- Create `Home.js`, `Page.js`, and some common components such as `Header.js`, `Footer.js`, etc. In the common components you can set the [NavLinks menu](https://reactrouter.com/docs/en/v6/components/nav-link)
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
      <Route path="/" element={<Home />}>
      <Route path="/page" element={<Page />}>
    </Routes>
    <Footer />
</BrowserRouter>
```


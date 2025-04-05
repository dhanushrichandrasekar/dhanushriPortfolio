import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './portfolioapplication/Home';
import About from './portfolioapplication/About';
import Journey from './portfolioapplication/Journey';
import Skills from './portfolioapplication/Skills';
import Projects from './portfolioapplication/Projects';
import Contact from './portfolioapplication/Contact';
import RootLayout from './Layout/RootLayout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './portfolioapplication/Login';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="journey" element={<Journey  />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

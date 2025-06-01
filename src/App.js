
import './App.css';

import { Route, Routes } from "react-router-dom";
import LogIn from './routers/loginform';
import { AuthProvider, RequireAuth } from "./components/authentication/authGuard";
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routers/home'));
const About = lazy(() => import('./routers/about'));
const Service = lazy(() => import('./routers/service'));
const Contact = lazy(() => import('./routers/contact'));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route element={<RequireAuth />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;


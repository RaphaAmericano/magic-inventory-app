import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { PublicPages } from "../routes/PublicRoutes";
import { PrivatePages } from "../routes/PrivateRoutes";
import { useStores } from "@stores/index";
// Pages

const Home = React.lazy(async () => import("../pages/Home"));
const About = React.lazy(async () => import("../pages/About"));
const Login = React.lazy(async () => import("../pages/Login"));
const Signin = React.lazy(async () => import("../pages/Signin"));

const menu = [
  { to:"/", text:"Home", private: false },
  { to:"/about", text:"About", private: false },
  { to:"/login", text:"Login", private: false },
  { to:"/signin", text:"Signin", private: false },
  { to:"/resumes", text:"Resumos", private: true, submenu: [
    { to:"/resumes/new", text:"Novo Resumo", private: false },
  ] },
];


export function App() {
  const { authStore } = useStores()
  const { auth } = authStore;
  
  const menuItems = menu.filter((item) => item.private === auth);

  return (
    <>
      <Header menu={menuItems} />

      <React.Suspense fallback={null}>
        <Routes>
          <Route element={<PublicPages />}>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signin" element={<Signin />} />
          </Route>

          <Route element={<PrivatePages />}>
            
            <Route path="/" element={<Home />} />
            
          </Route>
          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </React.Suspense>

      <Footer />
    </>
  );
}

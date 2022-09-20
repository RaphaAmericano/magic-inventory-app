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
const Inventory = React.lazy(async () => import("../pages/Inventory"));
const NewInventory = React.lazy(async () => import("../pages/Inventory/NewInventory"));
const ListInventory = React.lazy(async () => import("../pages/Inventory/ListInventory"));
const EditInventory = React.lazy(async () => import("../pages/Inventory/EditInventory"));
const Collections = React.lazy(async () => import("../pages/Collections"));
const NewCollection = React.lazy(async () => import("../pages/Collections/NewCollection"));
const ListCollection = React.lazy(async () => import("../pages/Collections/ListCollection"));
const EditCollection = React.lazy(async () => import("../pages/Collections/EditCollection"));
const ViewCollection = React.lazy(async () => import("../pages/Collections/ViewCollection"));

const Wishlists = React.lazy(async () => import("../pages/Wishlists"));
const Charts = React.lazy(async () => import("../pages/Charts"));

const menu = [
  { to:"/login", text:"Login", private: false },
  { to:"/signin", text:"Signin", private: false },
];

export function App() {
  const { authStore } = useStores()
  const { auth } = authStore;
  
  const menuItems = menu.filter((item) => item.private === auth);

  return (
    <>
      {!auth && <Header menu={menuItems} />}

      <React.Suspense fallback={null}>
        <Routes>
          <Route element={<PublicPages />}>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signin" element={<Signin />} />
          </Route>

          <Route element={<PrivatePages />}>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />}>
              <Route path="new" element={<NewInventory />} />
              <Route path="list" element={<ListInventory />} />
              <Route path=":id" element={<EditInventory />} />
            </Route>
            <Route path="/collections" element={<Collections />}>
              <Route path="new" element={<NewCollection />}/>
              <Route path="list" element={<ListCollection />}/>
              <Route path=":id" element={<EditCollection />}/>
              <Route path=":id/view" element={<ViewCollection />}/>
            </Route>
            <Route path="/wishlists" element={<Wishlists />}/>
            <Route path="/charts" element={<Charts />}/>
          </Route>
          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </React.Suspense>

      {!auth && <Footer />}
    </>
  );
}

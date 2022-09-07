import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStores } from "../stores";

export function PublicPages(){
    const { authStore } = useStores();
    const { auth } = authStore;

    if(auth){
        return <Navigate to="/"/>
    }

    return <Suspense fallback={null}>
        <Outlet />
    </Suspense>
}
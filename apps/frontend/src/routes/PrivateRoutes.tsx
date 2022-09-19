import { Suspense } from "react";
import { DrawerContainer } from "@components/DrawerContainer";
import { Navigate, Outlet } from "react-router-dom";
import { useStores } from "../stores";

export function PrivatePages(){
    const { authStore } = useStores();
    const { auth } = authStore;

    if(!auth){
        return <Navigate to="/login"/>
    }

    return <Suspense fallback={null}>
        <DrawerContainer>
            <Outlet />
        </DrawerContainer>
    </Suspense>
}
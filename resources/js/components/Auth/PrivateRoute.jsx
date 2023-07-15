import { Navigate, Outlet } from "react-router-dom";
import AuthUser from "./Auth";

const isAuthenticate = () => {
    const { user } = AuthUser();
    return user ? user?.token ? true : false : false;
}

export function PublicOutlet() {
    return isAuthenticate() ? <Navigate to="/chat" /> : <Outlet />;
}

export function PrivateOutlet() {
    return isAuthenticate() ? <Outlet /> : <Navigate to="/" />;
}
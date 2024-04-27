import { Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <span>Home Page</span> } />
            <Route path="/user-profile" element={ <span>User Profile Page</span> } />
            <Route path="*" element={ <Navigate to={"/"} /> } />
        </Routes>
    )
}
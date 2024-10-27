import { Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm";
import Dashboard from "../Page/Dashboard";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default AllRoutes;

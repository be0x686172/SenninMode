import { BrowserRouter, Routes, Route } from "react-router";
import Authentication from "../pages/authentication/Authentication";
import Dashboard from "../pages/dashboard/Dashboard";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
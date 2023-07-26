import { Routes, Route, BrowserRouter } from "react-router-dom";
import EmailForm from '../components/EmailData';
import Home from '../components/Home';
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<EmailForm />} />
            </Routes>
        </BrowserRouter>
    );
}
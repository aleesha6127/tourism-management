import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Packages from "./pages/Packages/Packages";
import Places from "./pages/Places/Places";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Auth/Login";   // ✅ default import
import Signup from "./pages/Auth/Signup"; // ✅ default import
import Navbar from "./components/Navbar/Navbar";
import Explore from "./pages/Explore/Explore";
import BookingForm from "./pages/Booking/BookingForm";
import UserDashboard from "./pages/User/UserDashboard";
import Profile from "./pages/User/Profile";
import LoginPage from "./pages/Login/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import BookingPage from "./pages/Booking/BookingPage";
// Admin
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminPackages from "./pages/Admin/PackagesAdmin";
import AdminPlaces from "./pages/Admin/PlacesAdmin";
import AdminEnquiry from "./pages/Admin/EnquiriesAdmin";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/places" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/book" element={<BookingPage />} />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/book/:packageId" element={<BookingForm />} />
        {/* User */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/profile" element={<Profile/>} />
        {/* Admin with sidebar layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="packages" element={<AdminPackages />} />
          <Route path="places" element={<AdminPlaces />} />
          <Route path="enquiry" element={<AdminEnquiry />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

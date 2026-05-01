import { useNavigate } from "react-router-dom";

export default function useBooking() {
  const navigate = useNavigate();

  const handleBook = (pkgId) => {
    const user = localStorage.getItem("user");

    if (!user) {
      // Save the selected package so we can continue after login
      localStorage.setItem("selectedPackage", String(pkgId));
      navigate("/login");
    } else {
      navigate(`/book/${pkgId}`);
    }
  };

  return handleBook;
}

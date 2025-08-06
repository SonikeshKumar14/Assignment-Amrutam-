import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./layout/MainLayout";
import Commission from "./pages/affiliate/Commission";
import Coupons from "./pages/affiliate/Coupons";
import Dashboard from "./pages/affiliate/Dashboard";
import NotFound from "./pages/NotFound";
import SpecialCommission from "./pages/commission/SpecialCommission";
import PaymentPending from "./pages/payment/PaymentPending";
import PaymentRequest from "./pages/payment/PaymentRequest";
import AppCustomize from "./pages/customization/AppCustomize";
import AddNewFAQ from "./components/faq/AddNewFAQ";

// made by Sonikesh ---
function App() {
  return (
    <Routes>
      {/* Redirect base route to affiliate/commission */}
      <Route path="/" element={<Navigate to="/affiliate/dashboard" />} />

      {/* Nested layout for Affiliate */}
      <Route path="/affiliate" element={<Sidebar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="commission">
          <Route index element={<Commission />} />
          <Route path="specialcommission" element={<SpecialCommission />} />
        </Route>
        <Route path="coupons" element={<Coupons />} />
        <Route path="payment">
          <Route path="paymentpending" element={<PaymentPending />} />
          <Route path="paymenthistory" element={<PaymentRequest />} />
        </Route>
      </Route>

      {/* Nested layout for customization */}
      <Route path="customization" element={<Sidebar />}>
        <Route path="app" element={<AppCustomize />} />
        <Route path="app/add-faq" element={<AddNewFAQ />} />{" "}
      </Route>

      {/* Handle unrelated dashboard route */}
      <Route path="/dashboard" element={<NotFound />} />

      {/* Catch-all for any undefined route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

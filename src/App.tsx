import { Button } from "@/components/ui/button"; // ✅
import LoginPage from "./pages/LoginPage";
import AuthLayout from "./components/layout/AuthLayout";
import DashboardPage from "./pages/DashboardPage";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import CourseOnDemand from "./pages/CourseOnDemand";
import LivesTikTok from "./pages/LivesTikTok";
import Streaming from "./pages/Streaming";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import FreeClass from "./pages/FreeClass";
import CartCourse from "./pages/CartCourse";
import CheckoutCourse from "./pages/CheckoutCourse";
import SuccessCourse from "./pages/SuccessCourse";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bootcamp" element={<Index />} />
          <Route path="/curso-on-demand" element={<CourseOnDemand />} />
          <Route path="/lives-tiktok" element={<LivesTikTok />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/pago" element={<Payment />} />
          <Route path="/carrito-curso" element={<CartCourse />} />
          <Route path="/checkout-curso" element={<CheckoutCourse />} />
          <Route path="/compra-exitosa" element={<SuccessCourse />} />
          <Route path="/clase-gratuita-ia" element={<FreeClass />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp />
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

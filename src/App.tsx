// src/App.tsx

// Remove `useState` from react import
// import { useState } from "react"; 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Remove the import for Landing
// import Landing from "./pages/Landing"; 

const queryClient = new QueryClient();

const App = () => {
  // Remove state hook
  // const [showLanding, setShowLanding] = useState(true);

  // Remove conditional rendering block
  // if (showLanding) {
  //   return <Landing onEnter={() => setShowLanding(false)} />;
  // }

  // Now, the component directly returns the main application structure
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
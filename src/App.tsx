import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Invitation from "./pages/Invitation";
import SaveTheDate from "./pages/SaveTheDate";
import Reception from "./pages/Reception";
import RespondPlease from "./pages/RespondPlease";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SaveTheDate />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/rsvp" element={<RespondPlease />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Router from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer, Slide } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BasicProvider from "./ContextApi/BasicProvider";
import { ThemeProvider } from "./ContextApi/ThemeContext";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BasicProvider>
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </BasicProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);

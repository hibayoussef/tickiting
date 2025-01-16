import { StyledEngineProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import AppTheme from "./theme/AppTheme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <Suspense fallback="Loading...">
        <QueryClientProvider client={queryClient}>
          <AppTheme>
            <StyledEngineProvider injectFirst>
              <ToastContainer />
              <App />
            </StyledEngineProvider>
          </AppTheme>
          <ReactQueryDevtools initialIsOpen={false} />{" "}
        </QueryClientProvider>
      </Suspense>
    </StyledEngineProvider>
  </BrowserRouter>
);

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { StoresProvider } from "@stores/index";
import { App } from "./app";
import "@assets/styles/global.scss";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SnackBarContainer } from "@components/SnackBarContainer";

const queryClient = new QueryClient()

ReactDOM.render(
  <StoresProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <SnackBarContainer />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StoresProvider>,
  document.getElementById("root"),
);

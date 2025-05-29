import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@app/store";
import { GlobalStyle } from "@shared/styles/styles";
import { initAuth } from "@processes/auth/initAuth";
import App from "@app/App";

store.dispatch(initAuth());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </StrictMode>
);

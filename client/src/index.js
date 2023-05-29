import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { theme } from "./constants";
import App from "./components/App";
import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter basename="/food-delivery-web-app">
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

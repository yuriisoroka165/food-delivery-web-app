import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authorizationSlice = createSlice({
    name: "authorization",
    initialState,
    // extraReducers: builder =>
    //     builder
    //         .addCase(login.pending, (state, action) => state)
    //         .addCase(login.fulfiled, (state, action)=> state)
    //         .addCase(login.rejected, (state, action)=> state)
});

const authorizationPersistConfig = {
    key: "authorization",
    storage,
    whitelist: ["token"],
};

export const persistedAuthorizationReducer = persistReducer(
    authorizationPersistConfig,
    authorizationSlice.reducer
);

export const { logIn, logOut } = authorizationSlice.actions;
// export const authorizationReducer = authorizationSlice.reducer;

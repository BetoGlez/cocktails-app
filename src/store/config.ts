import { configureStore } from "@reduxjs/toolkit";

import { cocktailsListsDataSlice } from "./cocktails-lists-data/cocktailsListsDataSlice";

const reducer = {
    cocktailsListsData: cocktailsListsDataSlice.reducer
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { COCKTAILS_LISTS_DATA_INITIAL_STATE } from "./cocktailsListsData.constants";
import { ICocktail } from "../../models/cocktail.model";

export const cocktailsListsDataSlice = createSlice({
    name: "cocktailsListsData",
    initialState: COCKTAILS_LISTS_DATA_INITIAL_STATE,
    reducers: {
        createNewCocktailList: (state, { payload }: PayloadAction<{title: string, description: string}>) => {
            state.cocktailsLists = [
                ...state.cocktailsLists,
                {id: uuidv4(), title: payload.title, description: payload.description, cocktails: new Array<ICocktail>()}
            ];
        },
        addCocktailToList: (state, { payload }: PayloadAction<{listId: string, newCocktail: ICocktail}>) => {
            const existingList = state.cocktailsLists.find(list => list.id === payload.listId);
            if (existingList) {
                existingList.cocktails.push(payload.newCocktail);
            }
        }
    }
});

export const {
    createNewCocktailList: createNewCocktailListActionCreator,
    addCocktailToList: addCocktailToListActionCreator
} = cocktailsListsDataSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./contactsSlice";


const filterSlice = createSlice({
    name: "filter",
    initialState: INITIAL_STATE.filters,
    reducers: {
        // searchContact(state, action) {
        //     state.items = state.items.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()));
        // },

        searchContact(state, action) {
            state.name = action.payload
        }
    },
    selectors: {
        selectFilter: state => state.name
    }
})

export const { searchContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const { selectFilter } = filterSlice.selectors
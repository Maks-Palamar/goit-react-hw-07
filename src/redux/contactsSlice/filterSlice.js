import { createSlice, createSelector } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./contactsSlice";
import { selectContacts } from "./contactsSlice";
import { useMemo } from "react";

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
    // selectors: {
    //     selectFilter: state => state.name
    // }
})

export const selectFilter = state => state.filter.name

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {

    const filteredContacts =  contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;


  }
);

export const { searchContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// export const { selectFilter } = filterSlice.selectors
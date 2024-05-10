import { createSlice} from "@reduxjs/toolkit";  

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

export const INITIAL_STATE = {
  contacts: {
		items: initialContacts
	},
  filters: {
		name: ""
	}
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE.contacts,
  reducers: {
      addContact(state, action) {
        state.items.push(action.payload);
    },
      deleteContact(state, action) {
        state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    
  },
  selectors: {
    selectContacts: state => state.items
  }
});

export const { addContact, deleteContact, searchContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const { selectContacts } = contactsSlice.selectors;
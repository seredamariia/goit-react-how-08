import { createSlice } from "@reduxjs/toolkit";
import { initialStateContacts } from "./constants";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isDeleteContact = null;
  state.isEditContact = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialStateContacts,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.isAddingContact = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        state.isAddingContact = false;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleteContact = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isDeleteContact = false;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

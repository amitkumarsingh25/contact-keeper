import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  UPDATE_CONTACT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Amit Verma',
        email: 'verma@gmail.com',
        phone: '9609764643',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sujoy Paul',
        email: 'sp33@gmail.com',
        phone: '9609764888',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Sumit Mallick',
        email: 'mallick@gmail.com',
        phone: '9609764999',
        type: 'professional'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Actions to do

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts
  const filterContact = keyword => {
    dispatch({ type: FILTER_CONTACTS, payload: keyword });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

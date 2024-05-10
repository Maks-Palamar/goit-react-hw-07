import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { getIsError, getIsLoading } from './redux/contactsSlice/contactsSlice';


function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm  />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList  />
    </>
  )
}

export default App

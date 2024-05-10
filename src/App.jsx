import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';


function App() {

  return (
    <>
      <ContactForm  />
      <SearchBox  />
      <ContactList  />
    </>
  )
}

export default App

import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Question from './components/Question';
import { useEffect } from 'react';

function App() {

  // // Scroll to the specific section when the hash changes
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   console.log("Hash:", hash); // Log the hash to ensure it's being detected

  //   if (hash) {
  //     const element = document.getElementById(hash.substring(1)); // Get the element by id (remove '#')
  //     if (element) {
  //       console.log("Scrolling to:", element); // Log the element to ensure it's found
  //       element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
  //     } else {
  //       console.log("Element not found.");
  //     }
  //   }
  // }, [window.location.hash]); // Trigger effect when the hash changes

  return (
    <>
    <Router>
      <Header />
      <div>
      <Routes>
        <Route path="/Question" element={<Question />} />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

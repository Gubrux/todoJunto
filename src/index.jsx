import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PersonCard from './components/PersonCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard lastName={"Doe"} firstName={"Jane"} age={12} hairColor={"Brown"} />
    <PersonCard lastName={"Smith"} firstName={"John"} age={24} hairColor={"Black"} />
  </React.StrictMode>
);

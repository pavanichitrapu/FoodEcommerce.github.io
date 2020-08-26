import React from 'react';
import classes from './App.module.css';
import MainContainer from './MainContainer/MainContainer';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className={classes.App}>
      <section className={classes.LandingSection}>
     <MainContainer />
     <Sidebar />
      </section>
    </div>
  );
}

export default App;

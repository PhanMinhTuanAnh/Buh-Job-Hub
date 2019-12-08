import React from 'react';
import Footer from '../_Footer/Footer'
import Main from '../_Main/Main';
import Header from '../_Header/Header';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
function App() {
  return (
    <div>
      <ScrollToTopOnMount/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

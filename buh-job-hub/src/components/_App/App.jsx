import React from 'react';
import Footer from '../_Footer/Footer'
import Main from '../_Main/Main';
import Header from '../_Header/Header';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
function App() {
  return (
    <div>
      <ScrollToTop />
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

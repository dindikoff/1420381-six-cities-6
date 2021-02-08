import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Page404 = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <h1>Page Not Found</h1>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Page404;

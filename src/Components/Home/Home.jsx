import React from 'react';
import Feed from '../Feed/Feed';
import Head from '../Helpers/Head/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs, com Feed de fotos" />
      <Feed />
    </section>
  );
};

export default Home;

import React from 'react';
import SignupCard from './SignupCard';
import Achieve from './Facilities';
import Hero from './About';
import Pricing from './Pricing';
import About2 from './About2';
import Account from './Account';

function Home() {
  return (
    <div>
      <SignupCard />
      <Achieve />
      <Hero />
      <Pricing />
      <About2 />
      <Account />
    </div>
  );
}

export default Home;

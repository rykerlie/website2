import React from 'react';
import WaitlistForm from './waitlist-form';

const Hero = () => {
  return (
    <div className="text-center">
      <h1 className="text-7xl font-bold text-accent-primary">
        Stop managing your tools. Start directing your work.
      </h1>
      <p className="mt-4 text-lg text-accent-secondary">
        Aura is the proactive AI partner that executes your intent across every application.
      </p>
      <WaitlistForm />
    </div>
  );
};

export default Hero;

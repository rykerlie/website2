import React from 'react';

const WaitlistForm = () => {
  return (
    <form className="mt-8 flex items-center justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-64 bg-transparent border-b-2 border-borders-dividers text-accent-primary focus:border-cta-vibrant focus:outline-none"
      />
      <button
        type="submit"
        className="ml-4 px-6 py-2 bg-cta-vibrant text-accent-primary font-medium rounded-md hover:bg-opacity-90"
      >
        Join the Waitlist
      </button>
    </form>
  );
};

export default WaitlistForm;

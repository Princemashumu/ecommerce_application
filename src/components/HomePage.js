// src/pages/HomePage.js
import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import HomeAppliancesSection from '../components/HomeAppliancesSection';
import GadgetsSection from '../components/GadgetsSection';
import PreOwnedSection from '../components/PreOwnedSection';
import FooterComponent from '../components/FooterComponent';

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <main>
        <HomeAppliancesSection />
        <GadgetsSection />
        <PreOwnedSection />
      </main>
      <FooterComponent />
    </div>
  );
};

export default HomePage;




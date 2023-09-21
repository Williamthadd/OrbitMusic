import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WhatDoWeDoCard from "../Components/WhatDoWeDoCard";
import MusicPromotionAgency from "../Assets/MusicPromotion.jpg";
import MusicConsulting from "../Assets/MusicConsulting.jpg";
import TalentManagement from "../Assets/TalentManagement.jpg";
import EventOrganizer from "../Assets/EventOrganizer.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <Header />
      <div className="About-Us">
        <h1>About Us</h1>
        <p className="About-Us-Text Gap-About-Us-Title">
          We are the media of music enterntaiment for Indie, Alternatif-Rock,
          Semi-Indie-Rap, and Pop Rock genre of music. We take your and
          everyone's potentially music creation to be promoted, managed,
          consulted, and design to be a better song. Not just that, we can make
          your personal branding be more famous and gain more views from many
          people around the world.
        </p>
        <p className="About-Us-Text">
          As a media of music, it is our responsibility to make our mucisian
          partner which are you guys to be comfortably get as much as many
          benefits you want for gaining your music quality from us.
        </p>

        <h3 className="About-Us-Quote">
          Make your music, and we will take care of the rest
        </h3>

        <h1 className="What-Do-We-Do-Title">What Do We Do</h1>

        <div className="What-Do-We-Do-card-Position">
          <WhatDoWeDoCard
            imageUrl={MusicPromotionAgency}
            title="Music Promotion Agency"
          />

          <WhatDoWeDoCard imageUrl={MusicConsulting} title="Music Consulting" />

          <WhatDoWeDoCard
            imageUrl={TalentManagement}
            title="Talent Management"
          />

          <WhatDoWeDoCard imageUrl={EventOrganizer} title="Event Organizer" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;

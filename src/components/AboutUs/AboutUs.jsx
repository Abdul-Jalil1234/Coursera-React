import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us" aria-labelledby="about-us-heading">
      <h2 id="about-us-heading">About Paradise Nursery</h2>
      <p>
        Paradise Nursery started in a single greenhouse with one simple belief:
        every home deserves a little more green. Since then, we've grown into
        a small team of plant lovers who hand-select, nurture, and ship
        houseplants that are healthy, easy to care for, and ready to settle
        into your space from day one.
      </p>
      <p>
        We work directly with growers who share our commitment to sustainable,
        pesticide-light cultivation, and every plant that leaves our nursery
        is inspected by hand before it reaches your door. Whether you're
        furnishing your first apartment or building out an indoor jungle,
        we're here to help you find plants that fit your light, your space,
        and your lifestyle.
      </p>
    </section>
  );
}

export default AboutUs;

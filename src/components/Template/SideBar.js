import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>MEDHAT ALHADDAD</h2>
        <p><a href="mailto:medhat.alhaddad@gmail.com">medhat.alhaddad@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Medhat. I like Organizing things.
        I am a <a href="https://eng.asu.edu.eg/">Ain Shams university</a> graduate, Software Engineer, MERN Developer, AWS Cloud Developer and
        a Data Science enthusiast.
        , Former Full Stack Developer at <a href="http://www.femesty.com/">Femesty</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Medhat Alhaddad <Link to="/">medhat.alhaddad.ml</Link>.</p>
    </section>
  </section>
);

export default SideBar;

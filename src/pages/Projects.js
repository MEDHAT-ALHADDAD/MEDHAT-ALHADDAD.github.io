import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Medhat Alhaddad's projects."
  >
    {/* <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article> */}
    <body data-new-gr-c-s-check-loaded="14.1018.0" data-gr-ext-installed="">
      <div className="jackhammer">
        <div className="svg_holder">
          <svg id="jackhammerSVG" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 196.3 276.8" enableBackground="new 0 0 196.3 276.8" xmlSpace="preserve" preserveAspectRatio="xMidYMax" style={{ opacity: 1 }}>
            <g id="jackhammerMan">
              <g id="jackBody" transform="translate(0,-2.202208925070282)">
                <circle className="vestColor" cx="98.2" cy="118.8" r="88.6" />
                <rect x="37.2" y="144" className="vestColor" width="121.9" height="45.2" />
                <rect x="34.2" y="133.9" className="vestStipeColor" width="127.7" height="20.2" />
                <polygon className="chestColor" points="98.2,125.7 64.2,75.9 131.5,75.9" />
                <g>
                  <line className="chestHairColor" fill="none" strokeWidth="3.312" strokelinecap="round" strokemiterlimit="10" x1="88" y1="100.4" x2="88" y2="105.4" />
                  <line className="chestHairColor" fill="none" strokewidth="3.312" strokelinecap="round" strokemiterlimit="10" x1="97.6" y1="103.2" x2="97.7" y2="108.2" />
                  <line className="chestHairColor" fill="none" strokewidth="3.312" strokelinecap="round" strokemiterlimit="10" x1="92.8" y1="105.8" x2="92.8" y2="110.7" />
                  <line className="chestHairColor" fill="none" strokewidth="3.312" strokelinecap="round" strokemiterlimit="10" x1="102.4" y1="105.9" x2="102.5" y2="110.9" />
                  <line className="chestHairColor" fill="none" strokewidth="3.312" strokelinecap="round" strokemiterlimit="10" x1="107.4" y1="100.4" x2="107.5" y2="105.3" />
                </g>
              </g>
              <rect className="shadow_1_" x="0" y="272" opacity="0.22" width="196.3" height="4.8" />
              <g id="jackhammerTip" transform="translate(0,0)">
                <rect x="92.5" y="210.9" className="jackhammerShaftColor" width="11.4" height="61.1" />
                <rect x="92.5" y="265.2" className="jackhammerTipColor" width="11.4" height="6.8" />
              </g>
              <g id="head_1_">
                <path
                  className="skinColor"
                  d="M98.2,96.2L98.2,96.2c-21.2,0-38.6-17.4-38.6-38.6v-6.7c0-21.2,17.4-38.6,38.6-38.6h0
                c21.2,0,38.6,17.4,38.6,38.6v6.7C136.7,78.8,119.4,96.2,98.2,96.2z"
                />
                <g id="hat_1_">
                  <path className="hatColorDk" d="M55.6,42.5h85.2c0-24.5-22.2-41.2-42.6-41.2h0C77.8,1.2,55.6,17,55.6,42.5z" />
                  <polygon className="hatColorLt" points="98,33 85.1,0 110.7,0" />
                  <polygon className="hatColorLt" points="145.4,45.7 50.9,45.7 56,36.8 140.4,36.8" />
                </g>
                <g id="mask_1_">
                  <ellipse className="maskColor" cx="98.2" cy="76.6" rx="23.1" ry="19.6" />
                  <rect x="85" y="72.6" className="maskVentColor" width="26.4" height="2.2" />
                  <rect x="85" y="78.5" className="maskVentColor" width="26.4" height="2.2" />
                  <rect x="85" y="84.4" className="maskVentColor" width="26.4" height="2.2" />
                </g>
              </g>
              <g id="legs_1_">
                <path
                  className="pantsColor"
                  d="M169.2,171.9H27.1c8,10.8,18.4,19.7,30.5,25.9c-0.7,1.1-1.4,2.3-2.1,3.6c-3.3,5.9-6.5,13.3-8.4,22.1
                c-4.1,0.7-7.3,4.3-7.3,8.7c0,3.7,2.3,6.9,5.5,8.2c0,8.8,1.5,18.6,5.2,29.2l17.6-6.1c-6.5-18.7-5.4-36.2,3.3-52.2
                c1.3-2.3,2.6-4.5,4-6.4c7.3,1.9,14.9,3,22.8,3c7.9,0,15.5-1,22.8-3c1.2,1.8,2.5,3.7,3.7,5.8c9,16.1,10.3,33.9,3.7,52.8l17.6,6.1
                c3.7-10.6,5.2-20.3,5.2-29.2c3.2-1.3,5.5-4.5,5.5-8.2c0-4.3-3.1-7.9-7.3-8.7c-1.9-8.8-5.1-16.2-8.4-22.1c-0.7-1.2-1.4-2.4-2.1-3.6
                C150.8,191.6,161.2,182.7,169.2,171.9z"
                />
                <path className="feetColor" d="M147.8,249.2c12.6,0,22.8,10.2,22.8,22.8H125C125,259.4,135.2,249.2,147.8,249.2z" />
                <path className="feetColor" d="M48.5,249.2c-12.6,0-22.8,10.2-22.8,22.8h45.6C71.3,259.4,61.1,249.2,48.5,249.2z" />
              </g>
              <g id="jackhammer" transform="translate(0,0.30069316796990264)">
                <rect x="54.5" y="184.5" className="jackhammerHandleColorDk" width="87.3" height="10.3" />
                <rect x="54.5" y="184.5" className="jackhammerHandleColorLt" width="87.3" height="5.1" />
                <path
                  className="jackhammerHandleColorLt"
                  d="M99.7,232.6h-3.1c-6.1,0-11-5-11-11v-34.5c0-6.1,5-11,11-11h3.1c6.1,0,11,5,11,11v34.5
                C110.8,227.6,105.8,232.6,99.7,232.6z"
                />
                <rect x="85.6" y="200.8" className="jackhammerHandleColorDk" width="25.1" height="19.1" />
                <path
                  className="jackhammerMainColor"
                  d="M105.4,213.3H90.9c-6.1,0-11-5-11-11v-26.1c0-6.1,5-11,11-11h14.5c6.1,0,11,5,11,11v26.1
                C116.5,208.3,111.5,213.3,105.4,213.3z"
                />
                <rect x="88.9" y="165.1" className="jackhammerHandleColorLt" width="18.5" height="9.1" />
              </g>
              <g id="jackArms" transform="translate(0,-2.202208925070282)">
                <path
                  className="skinColor"
                  d="M182.8,145.4l-15.8,50.4c-3,9.4-13.2,14.7-22.6,11.7l0,0c-9.4-3-14.7-13.2-11.7-22.6l15.8-50.4l21.6-68
                C185.9,88.5,191.6,117.6,182.8,145.4z"
                />
                <path
                  className="skinColor"
                  d="M13.6,145.5l15.8,50.4c3,9.4,13.2,14.7,22.6,11.7l0,0c9.4-3,14.7-13.2,11.7-22.6l-15.8-50.4l-21.6-68
                C10.4,88.6,4.7,117.6,13.6,145.5z"
                />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="25.9" y1="171.4" x2="34.5" y2="168.8" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="28.8" y1="180.7" x2="37.3" y2="178.2" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="23.4" y1="162" x2="32" y2="159.5" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="20.6" y1="152.7" x2="29.2" y2="150.2" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="18.1" y1="143.3" x2="26.7" y2="140.8" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="29.8" y1="165.3" x2="38.3" y2="162.7" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="32.6" y1="174.6" x2="41.2" y2="172.1" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="27.3" y1="155.9" x2="35.8" y2="153.4" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="24.4" y1="146.6" x2="33" y2="144.1" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="21.9" y1="137.2" x2="30.5" y2="134.7" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="15.2" y1="134" x2="23.8" y2="131.5" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="169.9" y1="171.4" x2="161.4" y2="168.8" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="167.1" y1="180.7" x2="158.6" y2="178.2" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="172.5" y1="162" x2="163.9" y2="159.5" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="175.3" y1="152.7" x2="166.7" y2="150.2" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="177.8" y1="143.3" x2="169.2" y2="140.8" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="166.1" y1="165.3" x2="157.5" y2="162.7" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="163.3" y1="174.6" x2="154.7" y2="172.1" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="168.6" y1="155.9" x2="160.1" y2="153.4" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="171.4" y1="146.6" x2="162.9" y2="144.1" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="174" y1="137.2" x2="165.4" y2="134.7" />

                <line className="armHairColor" fill="none" strokeWidth="2.208" strokeLinecap="round" strokeMiterlimit="10" x1="180.7" y1="134" x2="172.1" y2="131.5" />
              </g>
            </g>
          </svg>

        </div>

        <div id="jackhammer_title" style={{ opacity: 1 }}>Our Website is Under Construction.</div>
        <div id="jackhammer_countdown">

          <svg version="1.1" id="svg_countdown" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="406px" height="114px" viewBox="0 0 406 114" enableBackground="new 0 0 406 114" xmlSpace="preserve">
            <g>
              <polygon className="shadowColor" id="countdownshadow" points="406,114 406,14 400,8 0,108 6,114 406,114" style={{ opacity: 1 }} />
              <g className="jackhammer_cube" id="jackhammer_cube1" data-svg-origin="0 12" transform="matrix(1, 0, 0, 1, 0, -12)" style={{ opacity: 1 }}>
                <rect className="boxSide" x="0" y="20" width="100" height="100" />
                <rect className="boxTop" x="0" y="12" width="100" height="100" />
                <text id="daysLeft" className="jhcount" textAnchor="middle" transform="matrix(1 0 0 1 50 77)">29</text>
                <text transform="matrix(1 0 0 1 50 96)" className="jhtime">days</text>
              </g>
              <g className="jackhammer_cube" id="jackhammer_cube2" data-svg-origin="100 12" transform="matrix(1, 0, 0, 1, 0, -12)" style={{ opacity: 1 }}>
                <rect x="100" y="20" className="boxSide" width="100" height="100" />
                <rect x="100" y="12" className="boxTop" width="100" height="100" />
                <text id="hoursLeft" className="jhcount" textAnchor="middle" transform="matrix(1 0 0 1 150 77)">3</text>
                <text transform="matrix(1 0 0 1 150 96)" className="jhtime">hours</text>
              </g>
              <g className="jackhammer_cube" id="jackhammer_cube3" data-svg-origin="200 12" transform="matrix(1, 0, 0, 1, 0, -12)" style={{ opacity: 1 }}>
                <rect x="200" y="20" className="boxSide" width="100" height="100" />
                <rect x="200" y="12" className="boxTop" width="100" height="100" />
                <text id="minutesLeft" className="jhcount" textAnchor="middle" transform="matrix(1 0 0 1 250 77)">6</text>
                <text transform="matrix(1 0 0 1 250 96)" className="jhtime">minutes</text>
              </g>
              <g className="jackhammer_cube" id="jackhammer_cube4" data-svg-origin="300 12" transform="matrix(1, 0, 0, 1, 0, -12)" style={{ opacity: 1 }}>
                <rect x="300" y="20" className="boxSide" width="100" height="100" />
                <rect x="300" y="12" className="boxTop" width="100" height="100" />
                <text id="secondsLeft" className="jhcount" textAnchor="middle" transform="matrix(1 0 0 1 350 77)">5</text>
                <text transform="matrix(1 0 0 1 350 96)" className="jhtime">seconds</text>
              </g>
            </g>
          </svg>

        </div>
        <div className="jackhammer_clear" />
        <div id="jackhammer_socialmedia" style={{ opacity: 1 }}>
          <ul>
            <li><a label="a" href="https://www.linkedin.com/in/medhat-alhaddad/"><img src="images/twitter.svg" alt="" /></a></li>
            <li><a label="a" href="https://www.linkedin.com/in/medhat-alhaddad/"><img src="images/facebook.svg" alt="" /></a></li>
            <li><a label="a" href="https://www.linkedin.com/in/medhat-alhaddad/"><img src="images/youtube.svg" alt="" /></a></li>
            <li><a label="a" href="https://www.linkedin.com/in/medhat-alhaddad/"><img src="images/dribbble.svg" alt="" /></a></li>
          </ul>
          <p>Follow us for updates</p>
        </div>
      </div>
    </body>
  </Main>
);

export default Projects;

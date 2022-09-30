/* 
  There are some weird things happening with the offset and the camera 
  movement because of the implementation of the smooth stop of the camera.

  My solution is to define two diferent positions.
  position is relative to the scrollComponent, that's for the nav bar, 
  displayPosition is the offset of the default camara position when facing the cube.
*/

export const PAGE_DEPH_MARGIN = 15;

export const EXPERIENCE = {
  rows: 2,
  separation: 3,
  leftPadding: -0.32,
  topPadding: 0.22,
  scale: 0.2,
  items: [
    {
      url: 'websites-preview/cs2.png',
      websiteURL: 'https://tomasgonzalez.github.io/cs.html',
    },
    { url: 'websites-preview/good-dollar.jpeg', websiteURL: null },
    { url: 'websites-preview/knack-page.png', websiteURL: null },
    { url: 'websites-preview/magic.png', websiteURL: null },
    { url: 'websites-preview/optic-logo.png', websiteURL: null },
  ],
};

export const SKILLS_LIST = {
  rows: 4,
  separation: 2.4,
  leftPadding: -0.4,
  topPadding: 0.33,
  scale: 0.15,
  items: [
    { url: 'icons/react-native.png', websiteURL: null },
    { url: 'icons/react-logo.png', websiteURL: null },
    { url: 'icons/ts-logo.png', websiteURL: null },
    { url: 'icons/js-logo.png', websiteURL: null },
    { url: 'icons/css-logo.png', websiteURL: null },
    { url: 'icons/html-logo.png', websiteURL: null },
    { url: 'icons/node-js-logo.png', websiteURL: null },
    { url: 'icons/python-logo.png', websiteURL: null },
    { url: 'icons/three-js-logo.png', websiteURL: null },
    { url: 'icons/jest-logo.png', websiteURL: null },
    { url: 'icons/graph-ql-logo.png', websiteURL: null },
    { url: 'icons/vim-logo.png', websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  {
    position: 0.15,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: 'About',
  },
  {
    position: 0.2337,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: 'Skills',
  },
  {
    position: 0.3382,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: 'Previous Work',
  },
  {
    position: 0.4409,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: 'Download CV',
  },
  {
    position: 0.55,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: 'Personal Proyects',
  },
  {
    position: 0.652,
    displayPosition: 0.28,
    displayPositionOffset: 0.3,
    displayPositionOffsetEnd: -0.1,
    name: 'Get In Touch',
  },
  {
    position: 1,
    displayPosition: 1,
    displayPositionOffset: 0.03,
    displayPositionOffsetEnd: 0,
    name: 'Profile Picture',
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);
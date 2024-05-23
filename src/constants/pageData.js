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
  //optionally show the websiteURL inside of the cube in an Iframe
  webViewer: {
    position: [0, 0, -15],
    rotation: [Math.PI, Math.PI, Math.PI],
    height: 720,
    width: 1024,
  },
  items: [
    {
      url: 'websites-preview/b706fa17832e8854ee125404a655f0df.jpeg',
      websiteURL: 'website5/index.html',
    },
    {
      url: 'websites-preview/wp2832625.webp',
      websiteURL: 'https://en.wikipedia.org/wiki/Honda',
    },
    {
      url: 'websites-preview/free-google-2719775-2265521.webp',
      websiteURL:
        'website4/index.html', //optional open url in new tab
    },
    {
      url: 'websites-preview/5968260.png',
      websiteURL:
        'https://bitcoin.org/bitcoin.pdf',
    },
    {
      url: 'websites-preview/NASA_logo.svg.png',
      websiteURL:
        'https://www.nasa.gov/',
    },
    {
      url: 'websites-preview/Stanford-University-Logo.jpeg',
      websiteURL: 'https://codeinplace.stanford.edu/teach/home',
    },
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
    { url: 'icons/5572192.png', websiteURL: null },
    { url: 'icons/js-logo.png', websiteURL: null },
    { url: 'icons/css-logo.png', websiteURL: null },
    { url: 'icons/html-logo.png', websiteURL: null },
    { url: 'icons/node-js-logo.png', websiteURL: null },
    { url: 'icons/python-logo.png', websiteURL: null },
    { url: 'icons/12942037.png', websiteURL: null },
    { url: 'icons/jest-logo.png', websiteURL: null },
    { url: 'icons/graph-ql-logo.png', websiteURL: null },
    { url: 'icons/free-blockchain-2-411041.png', websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  {
    position: 0.13,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: 'About Me',
  },
  {
    position: 0.2137,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: 'Experience and Credentials',
  },
  {
    position: 0.2982,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: 'Skills',
  },
  {
    position: 0.3899,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: 'Download CV',
  },
  {
    position: 0.48,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: 'Education',
  },
  {
    position: 0.592,
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
    name: 'Personal Avatar', //Profile Picture
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);
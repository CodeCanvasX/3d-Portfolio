import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Soubhagya Paul',
  subTitle: 'Portfolio',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Hello IU, Welcome to my Galaxy!',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About Me'),
      title: 'Who Am I?',
      infos: [
        "* I'm a driven individual with entrepreneurial experience, a strong interest in global markets, particularly in stocks and cryptocurrencies, and love for technology.",
        '* My entrepreneurial journey has equipped me with innovation and leadership skills, while my fascination with global markets extends to tracking economic trends and exploring stock market and cryptocurrency.',
        '* From coding to staying updated on the latest crypto innovations, my love for technology propels me forward, offering a unique perspective to any challenge.',
        '* I have a wide range of skills, of which I can say that I’ve mastered many.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience and Credentials'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience and Credentials',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my Resume!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://www.canva.com/design/DAGEObdmPzU/_abXq78JbTuWsTOGz7Iudg/edit',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Education'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Education',
      infos:  [
              "* Secondary Education - The Heritage - School, 2022.",
              "* Higher Secondary Education - University Grants Commission (UGC) . Completing Higher Secondary Education at UGC in 2024, expecting results - July.",
      ],
      footer: 'See you soon International University of Applied Sciences.',
      imageList: {
        rows: 1, //2
        separation: 2.5,
        leftPadding: -0.40, //40
        topPadding: -0.33, //0.20
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/UGC_India_Logo.png',
            websiteURL: null,
          },
          {
            url: 'websites-preview/images.jpeg',
            websiteURL: null,
          },
          {
            url: 'websites-preview/1700119806-IU-International-University-of-Applied-Sciences-logo.webp',
            websiteURL:
              null,
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'Contact Me',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 1,
        separation: 1.8,
        leftPadding: -0.00, //-0.25
        topPadding: 0.02, //0.2
        scale: 0.4, //0.5
        items: [
          {
            url: 'icons/free-google-mail-new-4762011-3955524.png',
            websiteURL: 'mailto:soubhagya.html@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
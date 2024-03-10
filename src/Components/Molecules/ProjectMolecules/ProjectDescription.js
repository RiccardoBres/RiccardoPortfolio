import AlvaroSound from '../../../Layout/ASSETS/Project1.png'
import ConsultWise from '../../../Layout/ASSETS/ConsultWise.png'
import MattArt from '../../../Layout/ASSETS/MattArt.png';
import ConsultWiseVideo from '../../../Layout/ASSETS/ConsultWiseVideo.mp4'





const ProjectDescription = [
    {
        src: AlvaroSound,
        title: 'Alvaro Sound',
        description: 'Alvaro Sound is a full stack web application that allows users to follow the artist, track his music, and buy the merchandising. The main focus was on integrating Stripe and implementing secure code for handling sensitive information.',
        technology: 'MongoDB, Express, React, NodeJS',
        achieved: 'Data persistence through Redux.',
        coffee: '3',
        href: 'https://alvaromusic.netlify.app',
        demoAccount: 'Demo Account: not available',
        status: 'Deployed',
    },
    {
        src: ConsultWise,
        video: ConsultWiseVideo,
        title: 'Consult Wise',
        description: 'Transform your consulting experience with Consult Wise, a full stack web app utilizing AI for personalized advice. Powered with ChatGPT, it gathers detailed user data for tailored responses and holds potential for further AI refinement.This web application is still in the early stages of development. The footer links are nonexistent, as it is not associated with an actual company. If you are interested, you have the option to create a fake account with a fictitious email to fully understand how the information gathering works and simulate an interaction with the application. Alternatively, you can log in using the demo account.',
        technology: 'MongoDB, Express, React, NodeJS, Passport.js, ChatGPT',
        achieved: 'Session tracking with a unique ID with passport-js.',
        coffee: '5',
        href: 'https://consultwise.netlify.app/',
        demoAccount: 'Demo Account: demo123demo.com / demo123',
        status: 'Deployed',
    },
    {
        src: MattArt,
        title: 'Matt Artist',
        description: 'Explore this artist page crafted for a client, utilizing the power of React and styled with SCSS for a seamless user experience.',
        technology: 'React, SCSS',
        achieved: 'Achieved efficient image loading using React-Image-Lazy-Load, enhancing performance and user engagement on the platform.',
        coffee: '1',
        href: 'https://mattiart.netlify.app/',
        demoAccount: '',
        status: 'Updating',
    },
];

export default ProjectDescription;
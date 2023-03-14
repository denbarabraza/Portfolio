import {v1} from "uuid";
import react from './img/skills/react.svg'
import redux from './img/skills/redux.svg'
import typeScript from './img/skills/typeScript.svg'
import javaScript from './img/skills/javaScript.svg'
import restAPI from './img/skills/restAPI.svg'
import unitTest from './img/skills/unitTest.svg'
import htmlCss from './img/skills/css.svg'
import socialNetwork from './img/projects/socialNetwork.jpg'
import todo from './img/projects/todojpg.jpg'
import learn from './img/projects/learn.jpg'
import github from './img/social/github.png'
import storybook from './img/skills/storybook.png'
import myFoto from './img/myFoto.jpg'


type DataType = {
    oneName: string
    statusMe: string[]
    name: string
    major: string
    aboutMe: string
    birthday: string
    age: number
    address: string
    eMail: string
    phone: string
    telegram: string,
    instagram: string,
    linkedin: string,
    gitHub: string,
    ava: string
    skills: SkillsType[]
    projects: ProjectType[]
}
type SkillsType = {
    id: string,
    img: string
    title: string,
    description: string
}
type ProjectType = {
    id: string,
    img: string
    hrefDemo?: string
    hrefView: string
    title: string,
    description: string
}

export const data: DataType = {
    oneName: 'Denis',
    statusMe: [
        'Front-end Developer who wants to be useful...',
        'Front-end Developer who can achieve a goal...',
        'Front-end Developer who have organizational skills...',
        'Front-end Developer who can work in multitasking mode...',
    ],
    name: 'Denis Bareischev',
    major: 'Front - End Developer (React)',
    aboutMe: 'I’m a hardworking and experienced Front-end developer having a result-focused attitude to creating SPA via React(JS/TS), Redux/Redux Toolkit.\n' +
        '     Improving my skills and trying to follow the latest and most effective technologies.\n' +
        '     I\'m currently studying React Native because it\'s interesting to me and my next goal is to become a mobile developer.',
    ava: myFoto,
    birthday: '05th september 1998',
    age: 24,
    address: 'Minsk, Belarus',
    eMail: 'denis.bareischev@gmail.com',
    phone: '+375(44)491-38-70',
    telegram: 'https://t.me/denbarabraza',
    instagram: 'https://www.instagram.com/den_barabraza/',
    linkedin: 'https://www.linkedin.com/in/denis-bareischev-b96071246/',
    gitHub: 'https://github.com/denbarabraza',
    skills: [
        {
            id: v1(),
            img: react,
            title: 'React',
            description: 'Used React library for developing UI of SPA. Experienced in creating functional components with Hooks as well as class components. Used HOC to reuse component logic and optimize performance with React.memo.'
        },
        {
            id: v1(),
            img: redux,
            title: 'Redux/Redux Toolkit',
            description: 'Implemented Redux/Redux Toolkit for state management of app as BLL. Created reducers for immutable state modification, and used Thunk middleware for asynchronous network requests.'
        },
        {
            id: v1(),
            img: typeScript,
            title: 'TypeScript',
            description: 'Used TypeScript for developing easily scalable and sustainable application.'
        },
        {
            id: v1(),
            img: javaScript,
            title: 'JavaScript',
            description: 'Experienced in using ES6 features, such as Promises, Classes, Destructuring assignment, Arrow functions etc.'
        },
        {
            id: v1(),
            img: htmlCss,
            title: 'HTML & CSS',
            description: 'Created styles for UI components by using Styled Components and Sass preprocessor.'
        },
        {
            id: v1(),
            img: github,
            title: 'Git/GitHub',
            description: 'Git is a  tool used for source code management.'
        },
        {
            id: v1(),
            img: restAPI,
            title: 'Rest API',
            description: 'Developed data access layer (DAL) for interaction with RESTful web services by using Axios library.'
        },
        {
            id: v1(),
            img: unitTest,
            title: 'Unit tests',
            description: 'Implemented TDD by creating Unit tests for reducers and components with Jest.'
        },
        {
            id: v1(),
            img: storybook,
            title: 'Storybook',
            description: 'Storybook using for building UI components and pages in isolation'
        },
    ],
    projects: [
        {
            id: v1(),
            img: learn,
            hrefDemo: 'https://denbarabraza.github.io/learn_together/#/pack-list',
            hrefView: 'https://github.com/denbarabraza/learn_together',
            title: 'Learn Together',
            description:
                'You can create your own study cards in the app and share them with other students. Study your cards and a friend\'s cards. After studying, evaluate your knowledge, and in case of a low score, the question will be repeated again for a better study of the question.'
        },
        {
            id: v1(),
            img: todo,
            hrefView: 'https://github.com/denbarabraza/Todolist',
            hrefDemo: 'https://denbarabraza.github.io/Todolist/',
            title: 'Todo',
            description: 'Application build with React/Redux/TypeScript. Allows you to effectively organize work according to the Japanese methodology of kanban boards. An analogue of trello...'
        },
        {
            id: v1(),
            img: socialNetwork,
            hrefView: 'https://github.com/denbarabraza/samurai-way',
            title: 'Social',
            description: 'Developers social network. Many features still in progress. But you can use base functions of any social network'
        },
        {
            id: v1(),
            img: '',
            hrefDemo: '',
            hrefView: '',
            title: '...',
            description: 'Your project could be here ;)'
        },

        /* {
             id: v1(),
             img: counter,
             hrefDemo: 'https://github.com/denbarabraza/counter',
             hrefView: 'https://github.com/denbarabraza/counter',
             title: 'Counter',
             description: 'Application build with ReactJS/Redux/TypeScript and styled components library.'
         }*/
    ]
}
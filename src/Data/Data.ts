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
import counter from './img/projects/counter.png'


type DataType = {
    oneName: string
    statusMe: string
    name: string
    major: string
    aboutMe: string
    birthday: string
    age: number
    residence: string,
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
    href: string
    title: string,
    description: string
}

export const data: DataType = {
    oneName: 'Denis',
    statusMe: 'Front-end Developer who wants to be useful...',
    name: 'Denis Bareischev',
    major: 'Front - End Developer (React)',
    aboutMe: 'I’m a front-end developer who has a results-focused attitude to creating SPA, using React(JS/TS), Redux. I would like to find project work and full-time employment in a company with a modern approach to development and a collaborative team.',
    ava: '',
    birthday: '05th september 1998',
    age: 24,
    residence: 'Belarus',
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
            title: 'Redux',
            description: 'Implemented Redux for state management of app as BLL. Created reducers for immutable state modification, and used Thunk middleware for asynchronous network requests.'
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
    ],
    projects: [
        {
            id: v1(),
            img: socialNetwork,
            href: 'https://github.com/denbarabraza/samurai-way',
            title: 'SOCIAL NETWORK',
            description: 'Developers social network. Many features still in progress. But you can use base functions of any social network'
        },
        {
            id: v1(),
            img: todo,
            href: 'https://github.com/denbarabraza/Todolist',
            title: 'TODOLIST',
            description: 'Application build with ReactJS/Redux/TypeScript and styled components library.'
        },
        {
            id: v1(),
            img: counter,
            href: 'https://github.com/denbarabraza/counter',
            title: 'COUNTER',
            description: 'Application build with ReactJS/Redux/TypeScript and styled components library.'
        }
    ]
}
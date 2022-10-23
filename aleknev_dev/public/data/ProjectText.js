import { SiReact, SiPython, SiAngular, SiVuedotjs } from 'react-icons/si';

const Projects = { 
    1: {
        name: 'GONI-GO',
        tech: ['React Native', 'JS', 'AWS'],
        icons: [SiAngular, SiAngular, SiVuedotjs],
        desc: 'A mobile goniometry application made for cancer survivors with limited post-treatment help.'
    },
    2: {
        name: 'ARD UTIL',
        tech: ['PYQT5', 'Python', 'AWS'],
        icons: [SiAngular, SiAngular, SiVuedotjs],
        desc: 'A toolkit that samples Amazon review data and provides recommendations based on keyword frequency.'
    },
    3: {
        name: 'RESTO REVIEW',
        tech: ['JS', 'PHP', 'MySQL', 'Bootstrap'],
        icons: [SiAngular, SiAngular, SiVuedotjs, SiPython],
        desc: 'A website that provides users with the opportunity to search and submit reviews on local restaurants.'
    },
    4: {
        name: 'WPM DOG',
        tech: ['JS', 'CSS', 'JQuery'],
        icons: [SiAngular, SiAngular, SiVuedotjs],
        desc: 'A typing test website with a focus on clean, distraction-free operation.'
    }, 
    5: {
        name: 'P0 JKERNEL',
        tech: ['Python', 'Jupyter', 'P0', 'WebAssembly'],
        icons: [SiAngular, SiAngular, SiVuedotjs, SiPython],
        desc: 'A custom Jupyter Notebook kernel that enables compiling and running P0 language programs.'
    }, 
    6: {
        name: 'TERRAIN GEN',
        tech: ['C++', 'OpenGL', 'GLUT'],
        icons: [SiAngular, SiAngular, SiVuedotjs],
        desc: 'A three dimensional terrain generator, complete with panning and rendering options.'
    }
}

export default Projects
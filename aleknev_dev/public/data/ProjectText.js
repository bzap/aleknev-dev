import { 
        SiReact,
        SiJavascript,
        SiNpm,
        SiPython, 
        SiAngular, 
        SiCplusplus,
        SiOpengl,
        SiVuedotjs,
        SiAsana,
        SiAmazonaws,
        SiBookstack,
        SiWebassembly,
        SiJupyter,
        SiPastebin,
        SiHtml5,
        SiCss3,
        SiJquery,
        SiPhp,
        SiMysql,
        SiBootstrap
    } from 'react-icons/si';
import { GrLanguage } from 'react-icons/gr'
import { CgUiKit } from 'react-icons/cg';
import { VscFileCode } from 'react-icons/vsc'

const projects = { 
    1: {
        name: 'GONI-GO',
        tech: ['JS', 'React Native', 'NPM', 'AWS'],
        icons: [SiJavascript, SiReact, SiNpm, SiAmazonaws],
        desc: 'A mobile goniometry application made for cancer survivors with limited post-treatment help.',
        image: ['/screenshots/ard.png'],
        buttons: ['Explanation', 'Presentation'],
        link: 'https://wpm-dog.vercel.app/'
    },
    2: {
        name: 'ARD UTIL',
        tech: ['Python', 'PYQT6', 'NLTK', 'XML'],
        icons: [SiPython, CgUiKit, GrLanguage, VscFileCode ],
        desc: 'A toolkit that samples Amazon review data and provides recommendations based on keyword frequency.',
        image: ['/screenshots/ard.png'],
        buttons: ['Explanation', 'Git Repo'],
        link: 'https://github.com/bzap/ARD_Util'
    },
    3: {
        name: 'WPM DOG',
        tech: ['JS', 'HTML', 'CSS', 'JQuery'],
        icons: [SiJavascript, SiHtml5, SiCss3, SiJquery],
        desc: 'A typing test website with a focus on clean, distraction-free operation.',
        image: ['/screenshots/ard.png'],
        buttons: ['Explanation', 'Presentation'],
        link: 'https://wpm-dog.vercel.app/'
    }, 
    4: {
        name: 'RESTO REVIEW',
        tech: ['JS', 'PHP', 'MySQL', 'Bootstrap'],
        icons: [SiJavascript, SiPhp, SiMysql, SiBootstrap],
        desc: 'A website that provides users with the opportunity to search and submit reviews on local restaurants.',
        image: ['/screenshots/ard.png'],
        buttons: ['Explanation', 'Git Repo'],
        link: 'https://github.com/bzap/resto_reviews'
    },
    5: {
        name: 'P0 JKERNEL',
        tech: ['Python', 'Jupyter', 'P0', 'WebAssembly'],
        icons: [SiPython, SiJupyter, SiPastebin, SiWebassembly],
        desc: 'A custom Jupyter Notebook kernel that enables compiling and running P0 language programs.',
        images: ['/screenshots/ard.png', '/screenshots/ard1.png', '/screenshots/ard2.png'],
        buttons: ['Explanation', 'Presentation'],
        link: 'https://wpm-dog.vercel.app/'
    }, 
    6: {
        name: 'TERRAIN GEN',
        tech: ['C++', 'OpenGL', 'GLUT', 'libGLU'],
        icons: [SiCplusplus, SiOpengl, SiBookstack ,SiAsana],
        desc: 'A three dimensional terrain generator, complete with panning and rendering options.',
        image: ['/screenshots/ard.png'],
        buttons: ['Explanation', 'Git Repo'],
        link: 'https://github.com/bzap/terrain_gen'
    }
}

export default projects
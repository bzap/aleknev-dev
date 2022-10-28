import { 
        SiReact,
        SiJavascript,
        SiNpm,
        SiPython, 
        SiAngular, 
        SiVuedotjs,
        SiAmazonaws
    } from 'react-icons/si';

const projects = { 
    1: {
        name: 'GONI-GO',
        tech: ['JS', 'React Native', 'NPM', 'AWS'],
        icons: [SiJavascript, SiReact, SiNpm, SiAmazonaws],
        desc: 'A mobile goniometry application made for cancer survivors with limited post-treatment help.',
        popup : { 
            background: `This was a collaborative effort by my groupmates (Kenneth Mak, Kalindu Sembakutti, Claire Elchuk) and I for our Capstone project. We initially recognized that there was an absence in post-op support in breast cancer patients, especially when it came to treating and keeping track of range-of-motion issues. In turn, we sought to create a mobile application that can take different measurements, track results and help inform the patient of their situation.`,
            breakdown: `In terms of measurement, the application has a component dedicated to the assessment of the primary categories of movement that would typically be restricted after an operation. Each measurement is taken by an automatic process that guides the user to positioning the phone correctly, while still taking accessibility into account. When the phone is in the correct position and the user initiates movement, it records and processes measurements from the accelerometer, and subsequently submits the results to the server when the process is complete. We talked with real breast cancer survivors as well as a few physiotherapists on their thoughts and for any feedback on this process.  
                        \nFor other times, when the user just wanted to track their progress, we created a component that can fetch their personal results from a server. It provides tabs to filter out different movements, the option for a more detailed view, and the option to display their progress of a specified movement in a graph. We used an Amazon S3 bucket to store user accounts and their own personal data.
                        \nAlbeit not quite finished due to time constraints, we also included a component which provided the user with exercise suggestions based on the range their measurements fall under, as well as pointers to informational resources.`,
            other: `The development of this application presented us with two significant barriers. Of course, one of them was ensuring the accuracy of the measurements taken, as well as ensuring consistency across both platforms. By the end, we felt that we were somewhat limited by the accelerometer, and we were interested in utilizing more sensors such as the gyroscope. The second barrier was user privacy. We were concerned with the effect of storing potentially sensitive data relevant to their treatments, and so we explored alternative routes that would involve storing the data locally on the phone. In the end we decided we would disclose what is happening with the data and ensure that we take a secure approach to using it. 
                    \nAs a final note, while I did contribute to the development of the measurements, more of my time went into the design of the UI, tracking and filtering the results, the graphs, and the suggestions. I’m also proud to say we won the People’s Choice Award for the Computer Science department!`,
            images: ['image.link', 'image.link']
        }
    },
    2: {
        name: 'ARD UTIL',
        tech: ['PYQT5', 'Python', 'NLTK', 'XML'],
        icons: [SiAngular, SiPython, SiVuedotjs],
        desc: 'A toolkit that samples Amazon review data and provides recommendations based on keyword frequency.',
        popup: {
            background: `This was a project that aimed to try and implement various topics learned throughout my degree such as searching and sorting algorithms, compression, lexical analysis, and GUI development. I wanted something that does not rely on a cloud orientated service and instead focuses on solving the problem of a large dataset locally. As a result, performance was a concern because any massive delay can ruin user experience. In addition to that, having to run it locally means the performance will vary based on the machine used.`,
            breakdown: `The toolkit is split into five different components. The first component is a script to import and compress downloaded data. Unsurprisingly, review data sourced from Amazon can produce very large JSON files, with some of them exceeding 40GB. Processing data like that can become very time consuming and very impractical to store. This script tries to tackle that by initially sorting and searching the data for the necessary forms using Merge Sort and Binary Search. These algorithms aren’t the wildest out there but are still very performant with respect to the type of data used. The script then creates a new object structure from the data and utilizes the Python Pickle module to serialize and compress it into far more reasonably sized files. 
                        \nThe second component creates an undirected graph from the new data, where the nodes are data points (e.g., each book, from the sample data provided), and the neighbouring edges are the common review words. The graph is then used to find the data points with the most similarities in order to provide recommendations. 
                        \nInsert picture here 
                        \nThe third component outputs a word cloud of adjectives within a data point. It works by the going through the reviews, categorizing and then tagging the words that are adjectives. 
                        \nInsert picture here 
                        \nThe fourth component helps to retrieve the title of the data point from the Amazon website. For the scope of this project, I didn’t want to use their API and instead I created a web scraper. It’s very simple, in that it uses the Python library Mechanize to open the URL of the item and then retrieve the title from the XML data of the page. Mechanize also happened to be perfect in that there is no denial of service from Amazon when trying to access the page. 
                        \nInsert picture here 
                        Finally, the fifth component is the GUI. This was never intended to be a web application, so I chose to use the PyQT toolkit as it’s flexible, open source, and most importantly, compatible with Python.`,
            other: `don't need this here 
                    `,
            images: ['image.link', 'image.link']
        }
    },
    3: {
        name: 'RESTO REVIEW',
        tech: ['JS', 'PHP', 'MySQL', 'Bootstrap'],
        icons: [SiAngular, SiAngular, SiVuedotjs, SiPython],
        desc: 'A website that provides users with the opportunity to search and submit reviews on local restaurants.',
        popup: {
            background: `Admittedly, this was a project from a web development course I was taking. The original goal was to create a website that displayed items and allowed a user to interact and submit their own content. I tried to use this as an additional opportunity to better grasp the usage of the Google Maps API and maintaining a local database. 
                        \nThe current iteration of the website has the following set of key components and functionalities – user account creation and caching, account login/logout, restaurant location submission, restaurant search, commenting and rating under a selected location, Google Maps geolocation and pin placement (to show local restaurants).`,
            breakdown: `Each of the account and submission related functionalities are processed using PHP to a MySQL database. To that note, I also implemented custom input and form validation, and parametrized queries to prevent SQL injection and/or broken queries to be sent. 
                        \nInsert screenshot here`,
            other: `Outside of general query difficulties, I was surprised that implementing persistent location from the Google Maps API presented the biggest challenge overall. Each time the user would navigate to a new page their location data and geolocation permission would reset, leading to errors loading related content. The solution entailed storing the user’s location data within a PHP session variable and adding specific checks to ensure the location request happens on initial load, as well as on a specific page if the user arrives by URL. Simple as it may sound, it ended up being quite time consuming.`,
            images: ['image.link', 'image.link']
        }
    },
    4: {
        name: 'WPM DOG',
        tech: ['JS', 'HTML', 'CSS', 'JQuery'],
        icons: [SiAngular, SiAngular, SiVuedotjs],
        desc: 'A typing test website with a focus on clean, distraction-free operation.',
        popup: {
            background: `Prior to working on this project, I had little experience with building websites without the use of frameworks and UI tools such as React and Material UI. To combat this and deepen my knowledge, I set out to see what kind of design and implementation I could come up with using plain and simple HTML and CSS. 
                        \nOne of my main goals was to have smooth, and consistent CSS animations when interacting with the interface. Aspects like word highlighting and satisfying dropdown menus were a priority. This project taught me a lot about animating keyframes and syncing elements between transitions. 
                        \nTowards the end of development, I found I was having trouble with animating the dropdown menus, where it became tedious trying to combine multiple animations at the same time, while still balancing the color of certain elements. I ended up breaking my rules and using jQuery for that alone. The use of jQuery greatly simplified these DOM and CSS manipulations.`,
            breakdown: `The primary script is split into a few different key operations. The first is the word (sentence) generator that takes a JSON of sample words and uses a simple algorithm to randomize them by their length. 
                        \nThe second is a counter that keeps track of the time elapsed and updates the statistics based on it. This one proved tricky at first as I was accustomed to the way state works in frameworks such as React. This meant continuously updating elements was not as simple as creating a state and having it update on its own.
                        \nThe last key operation is what I used to alleviate this. It’s a rendering call based on the time elapsed, used to calculate the correct statistics and display them to the user.`,
            other: `lol`,
            images: ['image.link', 'image.link']
        }
    }, 
    5: {
        name: 'P0 JKERNEL',
        tech: ['Python', 'Jupyter', 'P0', 'WebAssembly'],
        icons: [SiAngular, SiAngular, SiVuedotjs, SiPython],
        desc: 'A custom Jupyter Notebook kernel that enables compiling and running P0 language programs.',
        popup: {
            background: `This was another collaborative effort between a classmate (Kenneth Mak) and I. Jupyter Notebook allows editing and running notebook documents within a browser. By default, it provides a kernel to run Python code, with more languages provided by the community. For our use case, we wanted to run P0. The goal of this project was to apply our knowledge of parsing, syntax-directed translation, and code generation.`,
            breakdown: `One approach to creating a custom kernel for Jupyter was by creating a wrapper. This meant that the wrapper kernel would run Python as its language by default, however it would be capturing the standard output of a program run within it. Using that approach, our implementation involved taking the inputted P0 code from a Jupyter cell, scanning and parsing it, and using a custom code generator to translate the P0 code into Python. 
                        \nThis portion was split into two key components - the scanner and the parser. The scanner would take the input, scan each character one by one, and then talk to the parser. The parser would analyse what was scanned and break it down (into blocks, unary operators, procedure, variables, etc.) to be translated into the equivalent Python code. 
                        \nWe could then take that Python code, compile it, run it, and signal its output to the kernel. This portion was split into two more key components – the container and the kernel itself. The container would run the Python code and capture the output. It would then send the output as a string to the base kernel. The base kernel is simply there to listen to the cell and the container and respond appropriately.`,
            other: `The single biggest limitation to this approach was with user input due to the nature of capturing standard output. The input feed was immediately cut off when calling input() within the environment in which the code was run, and so it would always produce an EOF error.`,
            images: ['image.link', 'image.link']
        }
    }, 
    6: {
        name: 'TERRAIN GEN',
        tech: ['C++', 'OpenGL', 'GLUT', 'libGLU'],
        icons: [SiAngular, SiAngular, SiVuedotjs],
        desc: 'A three dimensional terrain generator, complete with panning and rendering options.',
        popup: {
            background: `This was a project that focused on creating a 3D geometric terrain and applying shading and lighting to it.`,
            breakdown: `To simplify, the terrain is initially generated into vectors using either a fault or circle algorithm (both algorithms are based upon descriptions given by LightHouse3D: http://www.lighthouse3d.com/). In order to provide lighting and shading to the terrain, a camera is initialized using GLUT, and the mesh normals are generated and stored in another vector. The terrain is then rendered by OpenGL by accessing the correct vertices and normals within each vector and displaying them as either quadrilaterals or triangles. By far the most trouble I had was in the generation of mesh normals, as it was very easy to get lost in the various matrices and to incorrectly map a number to an array. A single incorrect number meant that the shading and lighting will not fit to each of the thousands of generated vertices at all. 
                        \nIt features three different key operations. The first, as I described above, is calculating and generating the terrain based on the options that the user selects. This even provides the option to view the terrain as a wireframe. The second is the ability to pan and rotate the camera around the generated terrain. Lastly, the third is a bird’s eye view of the terrain in the form of a mini map.`,
            other: `lol`,
            images: ['image.link', 'image.link']
        }
    }
}

export default projects
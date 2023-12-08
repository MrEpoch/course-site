import Html from 'assets/Html.jpg';
import Css from 'assets/CSS.jpg';
import React from 'assets/react.jpg';
import Svelte from 'assets/Svelte.jpg';

export const courses = [
	{
		id: 1,
		name: 'Introduction to HTML',
		description: 'Unlock the power of web development with our introductory course, "HTML Fundamentals: Building the Web Foundation." HTML (Hypertext Markup Language) is the backbone of every webpage, and understanding its core principles is essential for anyone aspiring to create, design, or maintain websites.',
    goodPoints: [
      'Introduction to HTML',
      'HTML Fundamentals: document structure',
      'HTML Tags and Elements',
      'Attributes and Images',
      'Hyperlinks and Navigation',
      'Forms and Input Elements'
    ],
		tag: 'HTML',
		url: '/intro-to-html',
		image: Html
	},
	{
		id: 2,
		name: 'Basics of CSS',
		description: 'Step into the captivating world of web design with our course, "CSS Essentials: Styling the Web with Confidence." Cascading Style Sheets (CSS) play a crucial role in transforming plain HTML content into visually stunning and user-friendly websites. This course is tailored for beginners eager to unlock the magic of CSS and enhance their ability to create aesthetically pleasing web pages.',
    goodPoints: [
      'Introduction to CSS',
      'CSS fundamentals',
      'CSS selectors',
      'CSS properties',
      'CSS positioning',
      'CSS layout'
    ],
		tag: 'CSS',
		url: '/basics-of-css',
		image: Css
	},
	{
		id: 3,
		name: 'Basics of React',
		description: 'Embark on a transformative journey into the heart of modern web development with our course, "React Fundamentals: Building Dynamic Web Interfaces." React.js has emerged as a powerful library for crafting interactive and efficient user interfaces, and this course is designed to introduce beginners to its core concepts and principles.',
    goodPoints: [
      'Introduction to React',
      'React fundamentals',
      'React components',
      'React state',
      'React props',
      'React lifecycle methods'
    ],
		tag: 'React',
		url: '/basics-of-react',
		image: React
	},
	{
		id: 4,
		name: 'Basics of Svelte',
		description: 'Discover the revolutionary world of web development with our course, "Svelte Essentials: Building Web Apps with Effortless Efficiency." Svelte, a cutting-edge JavaScript framework, takes a unique approach by shifting much of the work to build time, resulting in smaller and faster web applications. This course is tailored for beginners eager to explore the fundamentals of Svelte and unlock the power of building reactive and efficient user interfaces.',
    goodPoints: [
      'Introduction to Svelte',
      'Svelte fundamentals',
      'Svelte components',
      'Svelte state',
      'Svelte props',
      'Svelte lifecycle methods'
    ],
		tag: 'Svelte',
		url: '/basics-of-svelte',
		image: Svelte
	}
];

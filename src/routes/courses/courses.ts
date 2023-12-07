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
		description: 'CSS foundation for web development',
		tag: 'CSS',
		url: '/basics-of-css',
		image: Css
	},
	{
		id: 3,
		name: 'Basics of React',
		description: 'React foundation for web development',
		tag: 'React',
		url: '/basics-of-react',
		image: React
	},
	{
		id: 4,
		name: 'Basics of Svelte',
		description: 'Svelte foundation for web development',
		tag: 'Svelte',
		url: '/basics-of-svelte',
		image: Svelte
	}
];

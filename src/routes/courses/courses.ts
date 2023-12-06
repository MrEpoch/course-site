import Html from 'assets/Html.jpg';
import Css from 'assets/CSS.jpg';
import React from 'assets/react.jpg';
import Svelte from 'assets/Svelte.jpg';

export const courses = [
	{
		id: 1,
		name: 'Introduction to HTML',
		description: 'Learn the basics of HTML',
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

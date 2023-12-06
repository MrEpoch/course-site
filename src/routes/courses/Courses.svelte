<script lang="ts">
	import { lazyLoad } from 'lib/lazyload';
	import { scale } from 'svelte/transition';

	export let course: any;
	let loaded = false;
</script>

<a
	href={'/courses' + course.url}
	class="min-w-64 min-h-48 relative hover:brightness-75 transition duration-300"
>
	<div
		class={`rounded-lg object-cover bg-gray-50 min-h-64 w-84 ${
			loaded ? '' : 'animate-pulse'
		} dark:bg-darkmode-400`}
	>
		<img
			class="opacity-0 max-w-full rounded-lg object-cover h-full"
			use:lazyLoad={course.image}
			on:load={() => (loaded = true)}
			alt={course.name}
		/>
	</div>
	<h5
		class={`text-lg font-bold tracking-tight whitespace-nowrap text-gray-900 dark:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
			loaded ? '' : 'hidden'
		}`}
	>
		{course.name}
	</h5>
</a>

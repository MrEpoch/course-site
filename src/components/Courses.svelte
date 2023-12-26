<script lang="ts">
	import { lazyLoad } from 'lib/lazyload';
  import { urlFor } from 'lib/sanity';

	export let course: any;
	let loaded = false;
</script>

<a
	href={'/courses' + "/" + course.slug.current}
	class="relative hover:brightness-75 transition duration-300"
>
	<div
		class={`overflow-hidden rounded-lg object-cover bg-gray-50 h-64 w-80 ${
			loaded ? '' : 'animate-pulse'
		} dark:bg-darkmode-400`}
	>
		<img
			class="opacity-0 hover:scale-110 transition duration-300 max-w-full rounded-lg object-cover h-full"
			use:lazyLoad={urlFor(course.image)}
			on:load={() => (loaded = true)}
			alt={course.name}
		/>
	</div>
	<h5
		class={`lg:text-2xl sm:text-xl text-lg font-bold tracking-tight whitespace-nowrap text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
			loaded ? '' : 'hidden'
		}`}
	>
		{course.title}
	</h5>
</a>

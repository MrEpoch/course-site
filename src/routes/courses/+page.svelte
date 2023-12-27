<script lang="ts">
	import Courses from 'components/Courses.svelte';
  import { page } from '$app/stores';
  export let data;

  const category = $page.url.searchParams.get('category');

  const style = {
    normal: "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800",
    styled: "text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:bg-gray-900 dark:focus:ring-orange-800"
  }

</script>

<div class="min-h-screen w-full flex items-center justify-center py-12">
	<div class="max-w-screen-xl h-full py-8 w-full flex items-center flex-col">
		<div class="flex items-center justify-center w-full py-8 flex-wrap">
			<a 
				href="/courses?category=all"
        data-sveltekit-reload
        class={category === 'all' || !category ? style.styled : style.normal}
        >All Courses</a
			>
			<a
        href="/courses?category=html"
        data-sveltekit-reload
        class={category === 'html' ? style.styled : style.normal}
				>HTML</a>
			<a
        href="/courses?category=css"
        data-sveltekit-reload
        class={category === 'css' ? style.styled : style.normal}
				>CSS</a
			>
			<a
        href="/courses?category=react"
        data-sveltekit-reload
        class={category === 'react' ? style.styled : style.normal}
				>React</a
			>
      <a
        href="/courses?category=svelte"
        data-sveltekit-reload
        class={category === 'svelte' ? style.styled : style.normal}
				>SvelteKit</a
			>
		</div>
		<div class="flex sm:flex-row flex-col flex-wrap gap-6 justify-center">
      {#each data.courses as course}
				<Courses {course} />
			{/each}
		</div>
	</div>
</div>

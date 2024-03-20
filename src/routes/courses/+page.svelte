<script lang="ts">
	import Courses from 'components/Courses.svelte';
	import { page } from '$app/stores';
  import Category from './Category.svelte';

	export let data;

  const category = $page.url.searchParams.get('category');
  let curCategory = category ?? 'all';
</script>

<div class="min-h-screen dark:bg-darkmode-500 w-full flex py-12">
	<div class="max-w-screen-xl mx-auto h-full sm:py-8 py-4 px-2 sm:px-6 w-full flex flex-1 justify-between items-center flex-col">
		<div class="flex items-center justify-center w-full h-full gap-3 pt-8 flex-wrap">
      {#each ['all', 'HTML', 'CSS', 'React', 'Svelte'] as category}
        <Category {category} {curCategory} />
      {/each}
		</div>
    <hr class="w-full my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<div class="grid xl:grid-cols-4 gap-6 md:grid-cols-3 max-[480px]:grid-cols-1 grid-cols-2">
			{#each data.courses as course}
				<Courses {course} />
			{/each}
		</div>
	</div>
</div>

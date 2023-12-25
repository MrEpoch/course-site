<script lang="ts">
	import Courses from 'components/Courses.svelte';
  export let data;
</script>

<div class="min-h-screen w-full flex items-center justify-center py-12">
	<div class="max-w-screen-xl w-full h-full flex justify-center items-center flex-col">
		<div class="flex items-center justify-center w-full py-8 flex-wrap">
			<button
				type="button"
				class="text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:bg-gray-900 dark:focus:ring-orange-800"
				>All Courses</button
			>
			<button
				type="button"
				class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>HTML</button
			>
			<button
				type="button"
				class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>CSS</button
			>
			<button
				type="button"
				class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>React</button
			>
			<button
				type="button"
				class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>SvelteKit</button
			>
		</div>
		<div class="sm:grid p-6 flex flex-col justify-between grid-cols-2 md:grid-cols-3 gap-4">
      {#each data.courses as course}
				<Courses {course} />
			{/each}
		</div>
	</div>
</div>

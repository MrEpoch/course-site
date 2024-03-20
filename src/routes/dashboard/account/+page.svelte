<script lang="ts">
	import Courses from 'components/Courses.svelte';

	export let data;

	const username = data.username;
	const courses = data.courses ?? [];
</script>

<div class="relative min-h-screen w-full bg-darkmode-500">
  <a href="/logout" class="bg-white absolute top-20 right-20 rounded-full p-4 hover:bg-gray-100 transition">
<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  </a>
	<div class="max-w-screen-xl py-32 mx-auto p-8">
		<h3 class="md:text-4xl text-2xl sm:text-3xl flex justify-center md:justify-start font-bold">
			Welcome, {username}
		</h3>
		<div class="w-full py-8 grid xl:grid-cols-4 gap-6 md:grid-cols-3 max-[480px]:grid-cols-1 grid-cols-2">
			{#each courses as course}
				<Courses {course} />
			{/each}
			{#if courses.length === 0}
				<div class="flex justify-center items-center bg-gray-50 dark:bg-darkmode-400 w-80 h-24">
					No courses found
				</div>
			{/if}
		</div>
	</div>
</div>

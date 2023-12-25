<script lang="ts">
	import Courses from "components/Courses.svelte";

  export let data;

  const username = data.username;
  const courses = data.courses;
</script>

<div class="min-h-screen w-full">
  <div class="max-w-screen-xl py-32 mx-auto p-8">
    <h3 class="md:text-4xl text-2xl sm:text-3xl flex justify-center md:justify-start  font-bold">Welcome, {username}</h3>
    <div class="w-full flex gap-6 py-16 flex-wrap">
      {#each courses as course}
        <Courses {course} />
      {/each}
      {#if courses.length === 0}
        <div class="flex justify-center items-center bg-gray-50 dark:bg-darkmode-400 w-80 h-24">No courses found</div>
      {/if}
    </div>
  </div>
</div>

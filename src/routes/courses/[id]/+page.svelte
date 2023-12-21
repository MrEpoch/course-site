<script lang="ts">
  import { urlFor } from "lib/sanity";
  export let data;
  $: course = data.course;
</script>


{#if course}
  <div class="min-h-screen w-full dark:bg-darkmode-500 py-10">
    <section class="flex lg:py-4 py-12 lg:flex-row gap-8 items-center min-h-screen flex-col max-w-screen-xl mx-auto p-4">
      <div class="w-full flex flex-col gap-4 h-full">
        <p class="text-xl text-orange-300 dark:text-orange-600 font-bold">Course details</p>
        <h1 class="text-4xl font-bold">{course.title}</h1>
        <p class="text-md text-gray-700 dark:text-gray-300 font-light">{course.description}</p>
        <ul class="flex flex-col py-8 lg:py-0 lg:items-start items-center w-full gap-4">
        </ul>
        <button class="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 transition">View course</button>
      </div>  
      <div class="w-full object-cover h-full">
        <img src={urlFor(course.image)} alt={course.title} />
      </div> 
    </section>
  </div>
{/if}

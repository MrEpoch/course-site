<script lang="ts">
  import { urlFor } from "lib/sanity";
  export let data;
  $: course = data.course;

  export let form;
  const session = data.session;
</script>

{#if form?.error}
  <h1 class="text-xl  text-red-500 font-bold leading-tight tracking-tight  md:text-2xl ">{form?.error}</h1>
{/if}


{#if course}
  <div class="min-h-screen w-full dark:bg-darkmode-500 py-10">
    <section class="flex lg:py-4 py-12 lg:flex-row gap-8 items-center min-h-screen flex-col max-w-screen-xl mx-auto p-4">
      <div class="w-full flex flex-col gap-4 h-full">
        <p class="text-xl text-orange-300 dark:text-orange-600 font-bold">Course details</p>
        <h1 class="text-4xl font-bold">{course.title}</h1>
        <p class="text-md text-gray-700 dark:text-gray-300 font-light">{course.description}</p>
        <ul class="py-8 space-y-4 text-left ">
          {#each course.points as point}
            
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
         <span><span class="font-semibold text-gray-900 dark:text-white">{point}</span></span>
    </li>

          {/each}
        </ul>
        {#if session}
          <form class="w-full" method="POST">
            <button class="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded text-md px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 transition">Enroll now</button>
            <input type="hidden" name="courseId" value={course._id} />
          </form>
        {:else}
          <div class="w-full flex justify-center">
            <button class="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded text-md px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 transition">View course</button>
          </div>
        {/if}
      </div>  
      <div class="w-full object-cover h-full">
        <img src={urlFor(course.image)} alt={course.title} />
      </div> 
    </section>
  </div>
{/if}

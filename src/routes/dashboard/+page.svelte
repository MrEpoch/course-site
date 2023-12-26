<script lang="ts">
	import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import connect from "assets/connect.svg";

  let loading = false;

  onMount(() => {
    loading = true;
  });

</script>

<div class="min-h-screen w-full relative ">
  {#if loading}
    <div in:fly={{ y: 300, duration: 1000 }}
      out:fly={{ y: -100, duration: 1000 }}
   class="custom-shape-divider-top-1703629103 md:block hidden">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill fill-gray-100 dark:fill-darkmode-400"></path>
      </svg>
    </div>
  {/if}
    <div class="w-full gap-8 flex flex-col justify-center relative items-center text-black z-10 h-screen max-w-screen-xl dark:text-white mx-auto p-4">
      <h1 class="md:text-4xl sm:text-3xl text-2xl text-center font-extrabold sm:font-bold">Connect with us at SnapLrn</h1>
      <img src={connect} alt="connecting two cables" class="hover:animate-spin duration-1000 transition cursor-pointer sm:w-1/5 dark:invert w-32 h-auto" />
      <div class="w-full flex justify-around items-center">
        <a href="/signup" class="px-6 py-3 bg-orange-600 rounded-lg text-gray-100 font-bold hover:bg-orange-700 transition">Join now</a>
        <a href="/courses?category=all" class="px-6 py-3 bg-orange-600 rounded-lg text-gray-100 font-bold hover:bg-orange-700 transition">See courses</a>
      </div>
    </div>
</div>

<style>
  .custom-shape-divider-top-1703629103 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1703629103 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 1000px;
}
</style>

<script>
	import Logo from 'assets/Logo-Course.png';
  import { theme } from "$lib/store";
</script>

<footer class="shadow dark:bg-darkmode-500 text-black dark:text-white">
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
				<img src={Logo} class="h-8" alt="Logo SnapLrn" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>SnapLrn</span
				>
			</a>
			<ul
				class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<li>
					<a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
				</li>
				<li>
					<a href="/contact" class="hover:underline">Contact</a>
				</li>
        <li>
          <button
            on:click={() => {
              theme.set($theme === 'dark' ? 'light' : 'dark');
            }}
            class="flex ml-4 justify-center w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              />
            </svg>
          </button>
        </li>
			</ul>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2023 <a href="https://stencukpage.com" class="hover:underline">Alexandr Stenčuk</a>. All
			Rights Reserved.</span
		>
	</div>
</footer>

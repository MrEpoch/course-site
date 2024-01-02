<script lang="ts">
	import Learning from 'assets/learning.jpg';
	import JoinNow from 'components/JoinNow.svelte';
</script>

<div class="min-h-screen w-full">
	<section
		style="background-image: url({Learning});"
		class={`w-full bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover  flex flex-col min-h-screen bg-fixed`}
	>
		<div class="py-20 px-4 mx-auto z-10 w-full max-w-screen-xl lg:py-32">
			<div
				class="bg-gray-50 dark:bg-darkmode-400 border border-darkmode-200 dark:border-darkmode-300 rounded-lg p-8 md:p-12 mb-8"
			>
				<a
					href="/courses?category=tutorials"
					class="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-orange-400 mb-2"
				>
					<svg
						class="w-2.5 h-2.5 me-1.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 14"
					>
						<path
							d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"
						/>
					</svg>
					Tutorial
				</a>
				<h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
					How to integrate basic HTML and CSS
				</h1>
				<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
					In most cases integration of html and css is pretty easy, let's look at our course
					showcasing this basic skill and many more.
				</p>
				<a
					href="/courses"
					class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
				>
					Read more
					<svg
						class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
			<div class="grid md:grid-cols-2 gap-8">
				<div
					class="bg-gray-50 dark:bg-darkmode-400 border border-darkmode-200 dark:border-darkmode-300 rounded-lg p-8 md:p-12"
				>
					<a
						href="/courses?category=design"
						class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
					>
						<svg
							class="w-2.5 h-2.5 me-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 18 18"
						>
							<path
								d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"
							/>
						</svg>
						Design
					</a>
					<h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
						Designing websites with Figma and Canva
					</h2>
					<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
						Most of modern websites these days are designed first before being written as code, we
						will show you soma practices about how you should do it.
					</p>
					<a
						href="/courses/design-canva-figma"
						class="text-orange-600 dark:text-orange-500 hover:underline font-medium text-lg inline-flex items-center"
						>Read more
						<svg
							class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</a>
				</div>
				<div
					class="bg-gray-50 dark:bg-darkmode-400 border border-darkmode-200 dark:border-darkmode-300 rounded-lg p-8 md:p-12"
				>
					<a
						href="/courses?category=code"
						class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
					>
						<svg
							class="w-2.5 h-2.5 me-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 16"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
							/>
						</svg>
						Code
					</a>
					<h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
						SvelteKit JS tutorial for beginners
					</h2>
					<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
						From basic store and transitions to more advanced server side rendering SSG or SSR.
					</p>
					<a
						href="/courses/coding-sveltekit"
						class="text-orange-600 dark:text-orange-500 hover:underline font-medium text-lg inline-flex items-center"
						>Read more
						<svg
							class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</section>
	<JoinNow />
</div>

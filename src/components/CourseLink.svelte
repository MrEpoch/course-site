<script>
  export let link;
  export let title;
  export let smallText;
  export let description;

</script>

			<div
				class="bg-gray-50 dark:bg-darkmode-400 border border-darkmode-200 dark:border-darkmode-300 rounded p-8 md:p-12 mb-8"
			>
				<a
          href={link}
					class="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 mb-2"
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
          {smallText}
				</a>
				<h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
          {title}
				</h1>
				<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
          {description}
				</p>
				<a
          href={link}
          class={bigSize ? "inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
          :	"text-orange-600 dark:text-orange-500 hover:underline font-medium text-lg inline-flex items-center"}
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


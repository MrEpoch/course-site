<script>
  export let category;
  export let curCategory;

	const style = {
		normal:
			'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium sm:px-5 sm:py-2.5 py-1.5 px-3 text-center sm:text-lg text-[12px] dark:text-white dark:focus:ring-gray-800',
		styled:
			'text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-base font-medium sm:px-5 py-1.5 px-3 sm:py-2.5 text-center dark:border-orange-500 dark:text-orange-500 sm:text-lg text-[12px] dark:hover:text-white dark:hover:bg-orange-500 dark:bg-gray-900 dark:focus:ring-orange-800'
	};
</script>


<a
  href={`/courses?category=${category}`}
				data-sveltekit-reload
        class={category === curCategory ? style.styled : style.normal}>{category}</a
			>

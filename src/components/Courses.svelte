<script lang="ts">
	import { urlFor } from 'lib/sanity';

	export let course: any;
</script>

<a
	href={'/courses' + '/' + course.slug.current}
	class="hover:brightness-75 bg-darkmode-400 transition duration-300 min-w-48 min-h-48 lg:min-w-64 lg:min-h-64 w-full h-full bg-cover bg-center rounded-lg flex justify-center items-center"
  style="background-image: url({urlFor(course.image).width(300).height(300).url()});"
>
	<h5
    class={`lg:text-2xl sm:text-xl text-lg font-bold tracking-tight whitespace-nowrap text-white`}
	>
		{course.title}
	</h5>
</a>

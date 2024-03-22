<script lang="ts">
	import { urlFor } from 'lib/sanity';
  import CardContainer from './ui/ThreeDCardEffect/CardContainer.svelte';
  import CardBody from './ui/ThreeDCardEffect/CardBody.svelte';
  import CardItem from './ui/ThreeDCardEffect/CardItem.svelte';

  export let course: any;

  let isMouseEntered = false;
</script>
<a
  href={'/courses' + '/' + course.slug.current}
  >
  <CardContainer bind:isMouseEntered className="inter-var">
  <CardBody 		className="shadow relative group/card transition dark:hover:border-transparent dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] dark:bg-darkmode-500/[0.1] dark:border-darkmode-300  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
  >
    <CardItem {isMouseEntered} translateZ="60" 			className="text-neutral-500 text-lg font-extrabold w-full text-center mt-2 dark:text-neutral-300">
      {course.title}
    </CardItem>
    <CardItem {isMouseEntered} translateZ="50" 			className="text-neutral-500 text-sm w-full mt-2 dark:text-neutral-300">
      <img src={urlFor(course.image).width(500).height(500).url()} alt={course.title} class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl" />
    </CardItem>
  </CardBody>
  </CardContainer>
</a>

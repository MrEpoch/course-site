<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import connect from 'assets/connect.svg';

	let loading = false;

	onMount(() => {
		loading = true;
	});
</script>


<main class="min-h-screen w-full bg-darkmode-500"></main>

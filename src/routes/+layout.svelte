<script lang="ts">
  import "../app.css";
	import Footer from "./Footer.svelte";
	import Sidebar from "./Sidebar.svelte";
  import { theme } from '$lib/store';
  import Transition from 'components/Transition.svelte';

    export let data;
    
    $: dark = $theme === 'dark';
    
</script>

<svelte:head>
    <title>SnapLrn</title>
    <meta name="color-scheme" content={dark ? 'dark' : 'light'} />
</svelte:head>

<div class:dark>
  <Sidebar />
    <Transition url={data.url}>
        <slot />
    </Transition>
  <Footer />
</div>


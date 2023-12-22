<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	import Sidebar from './Sidebar.svelte';
	import { theme } from '$lib/store';
	import Transition from 'components/Transition.svelte';
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data;

  let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})

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

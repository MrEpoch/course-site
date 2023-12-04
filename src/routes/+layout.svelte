
<script lang="ts">
  import "../app.css";
	import Footer from "./Footer.svelte";
	import Sidebar from "./Sidebar.svelte";
</script>

<div>
  <Sidebar />
  <slot />
  <Footer />
</div>

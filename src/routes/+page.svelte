<script lang="ts">
  import { lazyLoad } from "lib/lazyload";
  import Learning from "assets/learning.jpg"
  
  let loading = true;

</script>

<div class="min-h-screen w-full">
  <section class="w-full min-h-screen">
    <div class={`bg-gray-800 h-screen w-full ${loading ? 'animate-pulse' : ''}`}>
      <img use:lazyLoad={Learning} on:load={() => loading = false} alt="person learning" class="w-full opacity-0 brightness-50 grayscale-0 h-full object-cover" />
    </div>
  </section> 
</div>

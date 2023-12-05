<script lang="ts">
    import { scale } from 'svelte/transition';

    export let url: string;
</script>

{#key url}
    <div in:scale class="h-full">
        <slot />
    </div>
{/key}

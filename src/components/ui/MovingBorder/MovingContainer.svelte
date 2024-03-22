<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import MovingBorder from './MovingBorder.svelte';

	export let borderRadius: string | undefined = '1.75rem';
	export let containerClassName: string | undefined = undefined;
	export let borderClassName: string | undefined = undefined;
	export let duration: number | undefined = 2000;
	export let className: string | undefined = undefined;
</script>

<div
	class={cn(
		'relative overflow-hidden w-full bg-transparent p-[1px] ',
		containerClassName
	)}
	style={`border-radius: ${borderRadius};`}
	{...$$props}
>
	<div class="absolute inset-0 w-full" style={`border-radius: calc(${borderRadius} * 0.96);`}>
		<MovingBorder {duration} rx="30%" ry="30%">
			<div
				class={cn(
					'h-20 w-20 bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] opacity-[0.8]',
					borderClassName
				)}
			/>
		</MovingBorder>
	</div>

	<div
		class={className}
		style={`border-radius: calc(${borderRadius} * 0.96);`}
	>
		<slot />
	</div>
</div>

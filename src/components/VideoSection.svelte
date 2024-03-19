<script>
	import goldMedal from 'assets/gold-medal.svg';

	export let thumb;
	export let thumbWidth;
	export let thumbHeight;
	export let video;
	export let videoWidth;
	export let videoHeight;

	let modalOpen = false;
</script>

<section class="w-full bg-darkmode-500 min-h-screen flex">
	<div
		class="max-w-screen-xl flex-1 flex lg:flex-row flex-col gap-5 justify-center lg:justify-between w-full mx-auto p-8"
	>
		<div class="w-full h-full flex flex-col gap-3 justify-center items-center">
			<h3 class="text-3xl font-bold">Watch the introduction</h3>
			<p class="text-lg max-w-3xl font-light text-center text-gray-500">
				Short introduction about usage of SnapLrn, showcases all important features and technologies
				you can as user user
			</p>
			<img src={goldMedal} width={150} height={150} alt="gold medal" />
		</div>
		<button
			class="relative w-full flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-orange-300 rounded-3xl group"
			on:click={() => (modalOpen = true)}
			aria-label="Watch the video"
		>
			<img
				class="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
				src={thumb}
				width={thumbWidth}
				height={thumbHeight}
				priority
				alt="Modal video thumbnail"
			/>
			<svg
				class="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
				xmlns="http://www.w3.org/2000/svg"
				width="72"
				height="72"
			>
				<circle
					class="text-darkmode-400"
					fill="currentColor"
					cx="36"
					cy="36"
					r="36"
					fillOpacity=".8"
				/>
				<path
					class="fill-orange-500 drop-shadow-2xl"
					d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
				/>
			</svg>
		</button>
		{#if modalOpen}
			<div
				on:click={() => {
					modalOpen = false;
				}}
				id="default-modal"
				tabindex="-1"
				aria-hidden="true"
				class="flex justify-center items-center backdrop-brightness-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 min-h-screen max-h-full"
			>
				<div aria-hidden="true" class="relative p-4 w-full max-w-2xl max-h-full">
					<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<video width={videoWidth} height={videoHeight} loop controls>
							<track kind="captions" />
							<source src={video} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

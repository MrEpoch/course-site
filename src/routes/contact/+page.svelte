<script>
	import Contact from 'assets/Contact.jpg';
	import ContactForm from 'components/ContactForm.svelte';
</script>

<div class="flex flex-col bg-darkmode-500 py-16 min-h-screen w-full">
	<div class="w-full h-full max-w-screen-xl flex-1 flex flex-col mx-auto">
		<section
			class="flex-1 flex lg:flex-row flex-col gap-5 justify-center lg:justify-between h-full items-center w-full mx-auto p-8"
		>
			<div class="w-full h-full flex items-center justify-center">
				<ContactForm />
			</div>
			<div class="w-full h-full flex items-center justify-center">
				<img src={Contact} alt="Contact" class="w-full h-full object-cover rounded" />
			</div>
		</section>
	</div>
</div>

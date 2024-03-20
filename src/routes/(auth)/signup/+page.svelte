<script lang="ts">
	import Logo from 'assets/Logo-Course.png';
  import Github from "assets/github-mark.png";
  import Join from "assets/join.jpg";
  import ErrorHandler from "components/ErrorHandler.svelte";
  import { onMount } from 'svelte';

  export let form;

  onMount(() => {
    
  if (form?.githubUrl) {
    window.location.href = form.githubUrl
  }
  })

</script>

<div class="relative min-h-screen bg-darkmode-500 text-white flex justify-center">
  {#if form?.error}
    <ErrorHandler errorMessage={form?.message} emptyErrorFn={() => {
    if (form.error) form.error = false
    }} />
  {/if}
    <div class="max-w-screen-xl m-0 sm:m-10 bg-darkmode-400 shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img src={Logo} alt="logo" width="50" height="50" class="w-mx-auto" />
            </div>
            <div class="mt-12 flex flex-col items-center">
                <div class="w-full flex-1 mt-8">
                    <form method="POST" action="?/github" class="flex flex-col items-center">
                        <button
                            class="w-full hover:bg-orange-300 max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div class="bg-white p-2 rounded-full">
                              <img src={Github} alt="github" width="20" height="20" />
                            </div>
                            <span class="ml-4">
                              Sign Up with Github
                            </span>
                        </button>
                    </form>
                    <div class="my-12 border-b border-gray-600 text-center">
                        <div
                            class="leading-none px-2 inline-block text-sm text-gray-500 tracking-wide font-medium bg-darkmode-400 transform translate-y-1/2">
                            Or Sign Up with E-mail
                        </div>
                    </div>
                    <form method="POST" action="?/normal" class="mx-auto max-w-xs">
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-darkmode-500 border border-darkmode-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-darkmode-400"
                            type="email" placeholder="Email" name="email" />
                        <input
                          class="w-full px-8 py-4 rounded-lg font-medium bg-darkmode-500 border border-darkmode-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-darkmode-400 mt-5"
                            type="password" name="password" placeholder="Password" />
                        <input
                          class="w-full px-8 py-4 rounded-lg font-medium bg-darkmode-500 border border-darkmode-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-darkmode-400 mt-5"
                            type="password" name="password-confirm" placeholder="Confirm Password" />
                        <button
                            class="flex gap-3 mt-5 tracking-wide font-semibold bg-orange-400 text-white-500 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-">
                                Create Account
                            </span>
                        </button>
                        <p class="mt-6 text-xs text-gray-400 text-center">
                            I agree to abide by
                            <a href="/" class="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </a>
                            and
                            <a href="/" class="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
                        </p>
                    </form>
                    <p href="/signup" class="mt-6 text-xs text-gray-400 text-center">
                      Already have an account? <a href="/signin" class="hover:underline">
                        Log In
                      </a>
                    </p>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-orange-100 text-center flex hidden lg:flex">
            <div class="w-full h-full flex-1 bg-cover brightness-90 bg-center bg-no-repeat"
                style="background-image: url({Join});">
            </div>
        </div>
    </div>
</div>

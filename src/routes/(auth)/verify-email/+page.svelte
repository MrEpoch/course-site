<script>
  import emailVerify from "assets/email-verify.svg";
</script>

<div class="min-h-screen w-full">
  <div class="max-w-screen-xl h-screen justify-center items-center w-full mx-auto p-4 flex flex-col gap-8">
    <h1 class="text-3xl font-bold">Verify your Email</h1>
    <p class="text-center">For verification, please check your email.</p>
    <img src={emailVerify} class="w-32 h-32" alt="Email Verification" />
    <p>
      We've sent you an email with a link to verify your email. If you didn't receive it, please sign up again. 
    </p>
    <div class="flex gap-4">
      <a href="/signup" class="transition bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">Sign Up</a>
      <a href="/signin" class="transition bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">Sign In</a>
    </div>
  </div>
</div>

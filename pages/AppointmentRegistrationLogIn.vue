<template>
  <AppointmentRegistrationLogIn
    :email="email"
    :emailState="emailState"
    :password="password"
    :passwordState="passwordState"
    @update:email="email = $event"
    @update:password="password = $event"
    @validate:password="validatePassword"
    @validate:email="validateEmail"
    @validate="validateInputs"
    @forgot-password="handleForgotPassword"
    @update:rememberUsername="rememberUsername = $event"
  >
    <template #passwordIcon="{ visible }">
      <template v-if="visible">
        <svg
          name="hidepassword"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
        >
          <path
            d="M2.1203 13.5907C2.04834 13.3748 2.04828 13.1411 2.12011 12.9251C3.56632 8.57751 7.66743 5.44238 12.5008 5.44238C17.3319 5.44238 21.4314 8.5746 22.8794 12.9191C22.9514 13.135 22.9515 13.3687 22.8796 13.5846C21.4334 17.9323 17.3323 21.0674 12.499 21.0674C7.66785 21.0674 3.56831 17.9352 2.1203 13.5907Z"
            stroke="#037A72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6249 13.2549C15.6249 14.9808 14.2258 16.3799 12.4999 16.3799C10.774 16.3799 9.37494 14.9808 9.37494 13.2549C9.37494 11.529 10.774 10.1299 12.4999 10.1299C14.2258 10.1299 15.6249 11.529 15.6249 13.2549Z"
            stroke="#037A72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
      <template v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#0F172A"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3.98 8.223A10.477 10.477 0 0 0 1.935 12c1.29 4.337 5.308 7.499 10.064 7.499.993 0 1.953-.138 2.864-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.774 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
      </template>
    </template>
  </AppointmentRegistrationLogIn>
</template>

<script>
const email = ref("");
const password = ref("");
const emailState = ref("");
const passwordState = ref("");
const rememberUsername = ref(false);

const validatePassword = () => {
  console.log("asdasds");
  passwordState.value = password.value.length >= 6 ? "success" : "error";
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailState.value = emailPattern.test(email.value) ? "success" : "error";
};

const validateInputs = () => {
  console.log("VALIDATE");
};

const handleForgotPassword = () => {
  console.log("rememberUsername", rememberUsername.value);
  alert("handleForgotPassword");
};
</script>

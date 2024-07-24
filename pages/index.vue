<template>
  <div class="flex flex-col items-center mx-auto gap-[10px] w-full">
    <h1 class="mx-auto">Components</h1>
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

    <AppointmentRegistrationInsertMail
      @sign-in="
        (input) => {
          console.log('Sign in emitted', input);
        }
      "
    >
      <template #logo>Logo goes here</template>
    </AppointmentRegistrationInsertMail>

    <AppointmentRegistrationChooseDentist
      @choose-dentist="
        (input) => {
          console.log('dentist', input);
        }
      "
      :dentistArray="dentistArray"
    >
      <template #logo>Logo goes here</template>
    </AppointmentRegistrationChooseDentist>

    <GenericAccordion>
      <template #title>
        <div class="font-bold">First accordion title</div>
      </template>
      <template #icon>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="24"
          height="25"
          viewBox="0 0 24 25"
        >
          <path
            d="M4.5 16.25L12 8.75L19.5 16.25"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
      <template #content>
        This is the content of the accordion. You can place any HTML content
        here, including text, images, or other components.
      </template>
    </GenericAccordion>

    <div
      style="display: flex; justify-content: center; width: 100%; gap: 20px"
      v-for="(row, rowIndex) in buttonConfigs"
      :key="rowIndex"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
        v-for="(button, colIndex) in row"
        :key="colIndex"
      >
        <GenericButton
          :theme="button.theme"
          :outlined="button.outlined"
          :plain="button.plain"
          :sending="sending"
          class="btn"
          :disabled="button.disabled"
          :iconName="button.iconName"
          style="margin: 10px"
        >
          <template #appendIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="29"
              viewBox="0 0 24 29"
              fill="none"
            >
              <path
                d="M5.49493 27.6658V22.4906C2.75603 21.5401 0.916748 18.3505 0.916748 14.6052C0.916748 12.3718 1.41896 10.0378 3.89882 10.0378H10.184C11.473 10.0378 12.5175 11.0828 12.5175 12.3718C12.5175 13.3999 11.8447 14.3069 10.8609 14.6053L7.26753 15.695C9.10595 15.695 11.361 17.4387 11.3125 19.697"
                stroke="#172774"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.916 27.6667V22.4903C17.916 22.4903 19.1492 21.8739 20.4376 20.6407C22.9191 18.2659 23.2425 14.5104 22.5712 11.1419C22.3473 10.0187 22.0272 8.8806 21.5693 7.92303"
                stroke="#172774"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.90503 9.8853V5.92486C2.90503 4.2099 4.29528 2.81964 6.01024 2.81964C7.72521 2.81964 9.11546 4.2099 9.11546 5.92486V9.8853"
                stroke="#172774"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.11572 9.06938V3.85714C9.11572 2.14111 10.5068 0.75 12.2229 0.75C13.9389 0.75 15.33 2.14111 15.33 3.85714V9.06938C15.33 10.704 14.0677 12.0439 12.4647 12.1672"
                stroke="#172774"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3303 5.92601C15.3303 4.21042 16.7211 2.81964 18.4366 2.81964C20.1522 2.81964 21.5429 4.21042 21.5429 5.92601V8.59207C21.5429 10.3077 20.1522 11.6984 18.4366 11.6984C16.7211 11.6984 15.3303 10.3077 15.3303 8.59207V5.92601Z"
                stroke="#172774"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>

          <template #label>
            {{ button.label }}
          </template>
        </GenericButton>
      </div>
    </div>

    <GenericCheckbox label="Default Checkbox" />
    <GenericCheckbox label="Error Checkbox" error />
    <GenericCheckbox label="Success Checkbox" success />
    <GenericCheckbox label="Disabled Checkbox" disabled />

    <GenericDropDown
      class="mt-2"
      :items="dropdownItems"
      :default-selected="defaultItem"
      @update:selected="handleSelection"
      :width="'340px'"
      :multiple="false"
    />

    <GenericInput
      prependIcon="home"
      id="default"
      label="Default"
      placeholder="Default Input"
      appendIcon="home"
    />
    <GenericInput id="active" label="Active" placeholder="Active input" />
    <GenericInput
      id="warning"
      label="Your name"
      placeholder="Warning input"
      :warning="true"
      message="Some warning message."
      prependIcon="print"
      appendIcon="cancel"
    />
    <GenericInput
      id="success"
      label="Success"
      placeholder="Success input"
      :success="true"
      message="Some success message."
      appendIcon="search"
    />
    <GenericInput
      id="error"
      label="Error"
      placeholder="Error input"
      :error="true"
      prependIcon="settings"
      message="Some error message."
    />
    <GenericInput
      id="disabled"
      label="Disabled"
      :isDisabled="true"
      prependIcon="stop"
      message="Some disabled message."
    >
      <template #prependIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="29"
          viewBox="0 0 24 29"
          fill="none"
        >
          <path
            d="M5.49493 27.6658V22.4906C2.75603 21.5401 0.916748 18.3505 0.916748 14.6052C0.916748 12.3718 1.41896 10.0378 3.89882 10.0378H10.184C11.473 10.0378 12.5175 11.0828 12.5175 12.3718C12.5175 13.3999 11.8447 14.3069 10.8609 14.6053L7.26753 15.695C9.10595 15.695 11.361 17.4387 11.3125 19.697"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.916 27.6667V22.4903C17.916 22.4903 19.1492 21.8739 20.4376 20.6407C22.9191 18.2659 23.2425 14.5104 22.5712 11.1419C22.3473 10.0187 22.0272 8.8806 21.5693 7.92303"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.90503 9.8853V5.92486C2.90503 4.2099 4.29528 2.81964 6.01024 2.81964C7.72521 2.81964 9.11546 4.2099 9.11546 5.92486V9.8853"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.11572 9.06938V3.85714C9.11572 2.14111 10.5068 0.75 12.2229 0.75C13.9389 0.75 15.33 2.14111 15.33 3.85714V9.06938C15.33 10.704 14.0677 12.0439 12.4647 12.1672"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.3303 5.92601C15.3303 4.21042 16.7211 2.81964 18.4366 2.81964C20.1522 2.81964 21.5429 4.21042 21.5429 5.92601V8.59207C21.5429 10.3077 20.1522 11.6984 18.4366 11.6984C16.7211 11.6984 15.3303 10.3077 15.3303 8.59207V5.92601Z"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </GenericInput>

    <GenericOtpInput />

    <AppointmentRegistrationStartScreen
      @register="
        () => {
          console.log('register');
        }
      "
      @login="
        () => {
          console.log('login');
        }
      "
    >
      <template #logo></template>
    </AppointmentRegistrationStartScreen>

    <h1 class="mx-auto">AFTER INSERT MAIL</h1>

    <AppointmentRegistrationInsertMail
      @sign-in="
        (input) => {
          console.log('Sign in emitted', input);
        }
      "
    >
      <template #logo>Logo goes here</template>
    </AppointmentRegistrationInsertMail>

    <h1 class="mx-auto">AFTER INSERT OTP</h1>
    <AppointmentRegistrationInsertCode
      v-model:otp="otp"
      :otpState="otpState"
      @validate="handleOtpSubmit"
    >
      <template v-if="otpState === 'error'" #error>sad</template>
      <template v-if="otpState === 'success'" #success>success</template>
      <template #logo> Logo goes here </template>
    </AppointmentRegistrationInsertCode>
  </div>
</template>

<script setup>
// Define the button configurations

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

const dentistArray = ref([
  {
    id: "1",
    name: "Frau Steltenkamp",
    type: "Zahnärztin",
    favicon:
      "https://cdn.dribbble.com/users/1753953/screenshots/3818675/media/b376f45b3edd274a18c6296df22854fb.gif",
    appointmentDates: [
      "1. Juli",
      "2. Juli",
      "3. Juli",
      "3. Juli",
      "3. Juli",
      "3. Juli",
    ],
  },
  {
    id: "2",
    name: "Herr Faulhaber",
    type: "Zahnarzt",
    favicon:
      "https://cdn.dribbble.com/users/1753953/screenshots/3818675/media/b376f45b3edd274a18c6296df22854fb.gif",
    appointmentDates: ["1. Juli", "2. Juli", "3. Juli"],
  },
  {
    id: "2",
    name: "Frau Müller",
    type: "Zahnärztin",
    favicon:
      "https://cdn.dribbble.com/users/1753953/screenshots/3818675/media/b376f45b3edd274a18c6296df22854fb.gif",
    appointmentDates: ["1. Juli", "2. Juli", "3. Juli"],
  },
  {
    id: "3",
    name: "Herr Schmidt",
    type: "Zahnarzt",
    favicon: "https://dribbble.com/shots/3818675-Empty-State-Animation",
    appointmentDates: ["1. Juli", "2. Juli", "3. Juli"],
  },
]);

const dropdownItems = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Settings", value: "settings" },
  { label: "Earnings", value: "earnings" },
  { label: "Sign out", value: "signout" },
];

const buttonConfigs = ref([
  [
    {
      outlined: false,
      plain: false,
      label: "Button",
      disabled: false,
    },
    {
      outlined: true,
      plain: false,
      iconName: "print",
      disabled: true,
      label: "Outlined Dark 1",
    },
  ],
  [
    {
      outlined: false,
      plain: true,
      iconName: "print",
      label: "Plain Button 1",
    },
    {
      theme: "white",
      plain: true,
      disabled: true,
      iconName: "print",
      label: "Default Button 2",
    },
  ],
  [
    {
      outlined: true,
      plain: true,
      label: "Outlined Button 2",
    },
    {
      outlined: false,
      plain: true,
      iconName: "print",
      label: "Plain Button 2",
    },
    {
      iconName: "print",
      label: "Plain Button 2",
    },
  ],
]);
</script>

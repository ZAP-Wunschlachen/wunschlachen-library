<template>
  <div class="flex flex-col gap-[10px] m-4">
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
      <template #logo> loginBRUv </template>
    </AppointmentRegistrationStartScreen>

    <h1 class="mx-auto">AFTER INSERT MAIL</h1>

    <AppointmentRegistrationInsertMail
      @sign-in="
        (input) => {
          console.log('Sign in emitted', input);
        }
      "
    >
      <template #logo
        >Logoasdasdsd Bruv</template
      ></AppointmentRegistrationInsertMail
    >
  </div>
</template>

<script setup lang="ts"></script>

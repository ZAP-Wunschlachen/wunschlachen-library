<template>
  <div class="flex flex-col items-center mx-auto gap-[10px] max-w-[1200px]">
    HELlo wolrd
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
  </div>
</template>

<script setup>
// Define the button configurations
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

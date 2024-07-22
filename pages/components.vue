<template>
  <div class="flex mx-auto flex-col max-w-[1200px]">
    <div class="p-4"></div>

    <AppointmentRegistrationError class="mb-4" />
    <AppointmentRegistrationSuccessful class="mb-4" />
    <AppointmentRegistrationPickDate class="mb-4" />
    <AppointmentRegistrationChooseDentist class="mb-4" />
    <AppointmentRegistrationChooseLocation class="mb-4" />
    <AppointmentRegistrationChooseTemplate class="mb-4" />
    <AppointmentRegistrationOldPatient class="mb-4" />
    <AppointmentRegistrationInsertCode class="mb-4" />
    <AppointmentRegistrationLogIn class="mb-4" />
    <AppointmentRegistrationStartScreen
      class="mb-4"
    ></AppointmentRegistrationStartScreen>
    <AppointmentRegistrationInsertMail></AppointmentRegistrationInsertMail>

    <GenericBulletList
      text="Welche Vorteile haben festsitzende Zähne an einem Tag gegenüber Prothesen?"
    >
      <GenericSingleBullet
        header="Bequemer Zugang"
        text="Unsere Zahnärzte kommen direkt ins Pflegeheim"
      >
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
      </GenericSingleBullet>

      <GenericSingleBullet
        header="Einfühlsame Behandlung"
        text="Speziell geschult für ältere und pflegebedürftige Patienten"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="39"
          viewBox="0 0 38 39"
          fill="none"
        >
          <path
            d="M23.7346 6.83337C23.1913 6.83337 22.7508 7.27385 22.7508 7.81719V10.5842H19.9838C19.4405 10.5842 19 11.0247 19 11.5681V14.7655C19 15.3088 19.4405 15.7493 19.9838 15.7493H22.7508V18.5162C22.7508 19.0596 23.1913 19.5 23.7346 19.5H26.932C27.4754 19.5 27.9158 19.0596 27.9158 18.5162V15.7493H30.6828C31.2261 15.7493 31.6667 15.3088 31.6667 14.7655V11.5681C31.6667 11.0247 31.2261 10.5842 30.6828 10.5842H27.9158V7.81719C27.9158 7.27385 27.4754 6.83337 26.932 6.83337H23.7346Z"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.33325 25.8334L11.6095 30.9923C12.3855 31.751 13.3637 32.1667 14.3739 32.1667H28.2841C29.2777 32.1667 30.0833 31.2216 30.0833 30.0555C30.0833 27.7237 28.4721 25.8334 26.4848 25.8334H16.8141"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.167 23.9467L14.8754 25.2807C15.8189 26.0176 17.3487 26.0176 18.2923 25.2807C19.2358 24.5439 19.2358 23.3495 18.2923 22.6127L15.6403 20.5419C14.7859 19.8748 13.6271 19.5 12.4188 19.5H6.33325"
            stroke="#172774"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </GenericSingleBullet>

      <GenericSingleBullet
        text="Fester und stabiler Halt für eine bessere Funktion"
      >
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
      </GenericSingleBullet>

      <GenericSingleBullet
        text="Fester und stabiler Halt für eine bessere Funktion"
      >
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
      </GenericSingleBullet>

      <GenericSingleBullet
        text="Fester und stabiler Halt für eine bessere Funktion"
      >
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
      </GenericSingleBullet>

      <GenericSingleBullet
        text="Fester und stabiler Halt für eine bessere Funktion"
      >
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
      </GenericSingleBullet>
    </GenericBulletList>

    <div class="flex flex-col w-full">
      <span class="mx-auto text-xl">Accordion</span>
      <div class="container w-100">
        <div class="flex flex-col m-2">
          Accordion
          <GenericAccordion>
            <template #title>
              <div class="font-bold">First accordion title</div>
            </template>

            <template #content>
              This is the content of the accordion. You can place any HTML
              content here, including text, images, or other components.
            </template>
          </GenericAccordion>
        </div>

        <div class="flex flex-col m-2">
          Accordion
          <GenericAccordion>
            <template #title>
              <div class="font-bold">Second accordion title</div>
            </template>
            <template #content>
              This is the content of the accordion. You can place any HTML
              content here, including text, images, or other components.
            </template>
          </GenericAccordion>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full">
      <span class="mx-auto text-xl">Dropdown</span>
      <div class="container w-100">
        <div class="flex flex-col m-2">
          Single value checkbox
          <GenericDropDown
            class="mt-2"
            :items="dropdownItems"
            :default-selected="defaultItem"
            @update:selected="handleSelection"
            :width="'340px'"
            :multiple="false"
          />
        </div>

        <div class="flex flex-col m-2">
          Single value checkbox
          <GenericDropDown
            class="mt-2"
            :items="dropdownItems"
            :default-selected="defaultItem"
            @update:selected="handleSelection"
            :width="'340px'"
            :multiple="true"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full gap-4 my-10">
      <span class="mx-auto text-xl">Checkboxes</span>
      <div class="container md:mx-auto">
        <GenericCheckbox class="m-1" label="Default Checkbox" />
        <GenericCheckbox class="m-1" label="Error Checkbox" error />
        <GenericCheckbox class="m-1" label="Success Checkbox" success />
        <GenericCheckbox class="m-1" label="Disabled Checkbox" disabled />
      </div>
    </div>

    <div class="flex flex-col w-full gap-4 my-10">
      <span class="mx-auto text-xl">Inputs</span>
      <div class="container">
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
        />
      </div>
    </div>

    <div class="flex flex-col w-full gap-4 my-10">
      <span class="mx-auto text-xl">Buttons</span>
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
            <tempalte #prependIcon>
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
            </tempalte>

            <template #label>
              {{ button.label }}
            </template>
          </GenericButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const specialImages = ref([
  "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
  "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
  "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
]);

const specialText = ref([
  "Wenn für einen kompletten Kiefer Zahnersatz erforderlich ist, ist diese Behandlungsmethode denkbar. Der traditionelle Ansatz wäre, jeden Zahn durch ein einzelnes Zahnimplantat zu ersetzen. Bei dieser Technik werden jedoch oft nur 4, 6 oder 8 Implantate verwendet, um die entfernten Zähne zu ersetzen. Der Zahnersatz kann häufig noch am selben Tag oder am nächsten Tag nach der Implantation eingesetzt werden. Auf diese Weise können Sie Ihre dritten Zähne an einem Tag befestigen lassen.",
  "Wenn für einen kompletten Kiefer Zahnersatz erforderlich ist, ist diese Behandlungsmethode denkbar. Der traditionelle Ansatz wäre, jeden Zahn durch ein einzelnes Zahnimplantat zu ersetzen. Bei dieser Technik werden jedoch oft nur 4, 6 oder 8 Implantate verwendet, um die entfernten Zähne zu ersetzen. Der Zahnersatz kann häufig noch am selben Tag oder am nächsten Tag nach der Implantation eingesetzt werden. Auf diese Weise können Sie Ihre dritten Zähne an einem Tag befestigen lassen.",
  "Wenn für einen kompletten Kiefer Zahnersatz erforderlich ist, ist diese Behandlungsmethode denkbar. Der traditionelle Ansatz wäre, jeden Zahn durch ein einzelnes Zahnimplantat zu ersetzen. Bei dieser Technik werden jedoch oft nur 4, 6 oder 8 Implantate verwendet, um die entfernten Zähne zu ersetzen. Der Zahnersatz kann häufig noch am selben Tag oder am nächsten Tag nach der Implantation eingesetzt werden. Auf diese Weise können Sie Ihre dritten Zähne an einem Tag befestigen lassen.",
]);

const sending = ref(false); // Example ref for sending state
const dropdownItems = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Settings", value: "settings" },
  { label: "Earnings", value: "earnings" },
  { label: "Sign out", value: "signout" },
];

const carouselTestimonialItems = ref([
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 1",
    title: "Jan über seine Mutter (78)",
    nursingHome: "Pflegeheim AB",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 2",
    title: "Jan über seine Mutter (78)",
    nursingHome: "Pflegeheim WYD",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 3",
    title: "Jan über seine Mutter (78)",
    nursingHome: "Pflegeheim XY",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 4",
    title: "Jan über seine Mutter (78)",
    nursingHome: "Pflegeheim XY",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 5",
    title: "Jan über seine Mutter (78)",
    nursingHome: "Pflegeheim XY",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 6",
    title: "Jan über seine Mutter (78)",
    nursingHome: "Pflegeheim XY",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },

  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 7",
    title: "Jan über seine Mutter (78)",
    nursingHome: "Pflegeheim XY",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 8",
    title: "John über seinen Vater (80)",
    nursingHome: "Pflegeheim ABC",
    comment: "Die Betreuung und Pflege im Pflegeheim ABC ist hervorragend.",
  },
  {
    src: "https://i.pinimg.com/474x/f4/10/57/f410576405d74ec1bc34decb324cfae4.jpg",
    alt: "Random Image 9",
    title: "Anna über ihre Tante (85)",
    nursingHome: "Pflegeheim DEF",
    comment:
      "Ich bin sehr zufrieden mit der Versorgung meiner Tante im Pflegeheim DEF.",
  },
  // Add more items as needed
]);

const carouselItems = ref([
  {
    src: "https://i.pinimg.com/474x/07/58/bb/0758bb461cfc7e1835b9d2617da832fb.jpg",
    alt: "Random Image 1",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/07/58/bb/0758bb461cfc7e1835b9d2617da832fb.jpg",
    alt: "Random Image 1",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
  {
    src: "https://i.pinimg.com/474x/07/58/bb/0758bb461cfc7e1835b9d2617da832fb.jpg",
    alt: "Random Image 1",
    comment:
      "Dank der regelmäßigen Besuche des Zahnarztes im Pflegeheim ist die Zahngesundheit meiner Mutter bestens versorgt.",
  },
]);

const defaultItem = { label: "Select an option", value: null };
const selectedItem = ref(defaultItem);

function handleSelection(item) {
  selectedItem.value = item;
}

// Define the button configurations
const buttonConfigs = ref([
  [
    {
      outlined: false,
      plain: false,
      label: "Button",
      disabled: true,
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

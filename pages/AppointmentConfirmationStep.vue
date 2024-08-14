<template>
  <AppointmentConfirmationStep
    style="margin: auto"
    :appointment="selectedAppointment"
    :patient="patientObject"
  >
    <template #clock-icon> </template>
    <template #logo> this is the logo!! </template>
  </AppointmentConfirmationStep>
</template>

<script setup>
const selectedAppointment = {
  date: {
    day: "Aug 15",
    start: "09:00",
    end: "13:00",
    date: "2024-08-15T00:00:00.000Z",
    dentist: {
      id: "956ca491-0038-4b3c-b187-5cbca5c4b870",
      user_created: "bd3fb8a5-7e16-4abc-a4fa-ae40ac7e5733",
      date_created: "2023-09-19T23:42:55.531Z",
      user_updated: "99b588c9-37d5-4247-a143-46835bdd494c",
      date_updated: "2024-08-14T11:11:53.031Z",
      first_name: "Martin",
      last_name: "Paetz",
      nickname: "MP",
      user: "878dcdb1-5ee7-4914-ad60-0ee243863bc7",
      gender: "M",
      calendars: [
        "029c122a-bfdd-4439-beca-c4f5dd5aca01",
        "1f74ac9a-a617-43d5-8625-f398939d63fb",
      ],
      profile_image: {
        id: "91b7accc-ebb9-4b7c-bf3b-69aad9de5b20",
        storage: "dospace",
        filename_disk: "91b7accc-ebb9-4b7c-bf3b-69aad9de5b20.png",
        filename_download:
          "240725_WUNSCHLACHEN_DENTISTS_PROFILIMAGE_MARTIN_PAETZ.png",
        title: "240725 Wunschlachen Dentists Profilimage Martin Paetz",
        type: "image/png",
        folder: "c00cca28-7313-4e2d-beb0-7a7327ea3dd4",
        uploaded_by: "ffd48d0b-84a0-4ddc-ae1d-2dba488a9b23",
        uploaded_on: "2024-07-30T11:44:56.524Z",
        modified_by: null,
        modified_on: "2024-07-30T11:44:56.898Z",
        charset: null,
        filesize: "915282",
        width: 1080,
        height: 1080,
        duration: null,
        embed: null,
        description: null,
        location: null,
        tags: null,
        metadata: {},
        focal_point_x: null,
        focal_point_y: null,
      },
    },
    slots: [
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
      "12:30",
      "12:45",
    ],
  },
  slotIndex: 1,
  treatment: {
    id: "ad5779bb-23ed-4b52-a001-7ab866a87edb",
    status: "draft",
    user_created: "0c2c3f46-84b7-49a9-9c0a-d22aecc9c534",
    date_created: "2024-01-24T15:37:40.280Z",
    user_updated: "99b588c9-37d5-4247-a143-46835bdd494c",
    date_updated: "2024-07-25T14:47:15.464Z",
    name: "Beratung",
    sort: 26,
    needed_documents: null,
    treatment_filte: null,
    display_name: "REPLACE",
    treatment_filter: [17],
  },
};
const patientObject = {
  id: "6e0ea169-1f75-4bc6-80f5-9bc38038669a",
  user_created: "ffd48d0b-84a0-4ddc-ae1d-2dba488a9b23",
  date_created: "2024-08-14T10:52:10.473Z",
  user_updated: null,
  date_updated: null,
  first_name: null,
  last_name: null,
  patient_number: "NEW570356",
  location: null,
  legal_guardian: null,
  insurance_status: null,
  birthday: null,
  needed_documents: null,
  comms_stream: null,
  status: "active",
  merged_patient: null,
  user: "82ba20c8-1800-4822-9ca7-14b3be6707c1",
  nursinghome: [],
  treatments: [],
  patient_documents: [],
  contact_details: [],
  merged_patients: [],
  appointments: [],
  active_tasks: [],
};
</script>

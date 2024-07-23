export type Appointment = {
  date: Date;
  location: Location;
  dentist: Dentist;
};

export type Location = {
  branch: string;
  address: string;
};

export type Dentist = {
  name: string;
};

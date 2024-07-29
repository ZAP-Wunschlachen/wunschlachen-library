export type Appointment = {
  date: Date;
  location: Location;
  dentist: Dentist;
};

export type Location = {
  id: string | number;
  name: string;
  abbreviation: string;
  zip_code: string;
  city: string;
  street: string;
  street_number: string;
  district: string;
};

export type Dentist = {
  id: string | number;
  name: string;
  first_name: string;
  last_name: string;
  user: string;
  profile_image: string;
};

export type TreatmentTemplate = {
  id?: string | number;
  name: string;
  display_name: string;
};

export type AvailableTime = {
  day: string; // Formatted date string
  start: string;
  end: string;
  date: Date; // Real date object
  dentist: Dentist;
  slots: any;
};

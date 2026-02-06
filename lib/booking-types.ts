export type AppointmentType = "consultation" | "session";

export interface Appointment {
  type: AppointmentType;
  title: string;
  duration: number;
  price: number;
  deposit?: number;
  description: string;
}

export const APPOINTMENTS: Record<AppointmentType, Appointment> = {
  consultation: {
    type: "consultation",
    title: "Free 15-Minute Consultation",
    duration: 15,
    price: 0,
    description:
      "A brief, no-pressure call to discuss whether therapy with me is right for you.",
  },
  session: {
    type: "session",
    title: "50-Minute Therapy Session",
    duration: 50,
    price: 9500,
    deposit: 3000,
    description:
      "Individual trauma therapy session. £30 deposit required, remainder due at appointment.",
  },
};

export interface BookingFormData {
  appointmentType: AppointmentType;
  date: Date;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

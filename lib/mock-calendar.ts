import { TimeSlot } from "./booking-types";
import { addDays, format, setHours, setMinutes } from "date-fns";

export const getAvailableSlots = async (date: Date): Promise<TimeSlot[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const slots: TimeSlot[] = [];
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  hours.forEach((hour) => {
    const slotTime = setMinutes(setHours(date, hour), 0);
    const timeString = format(slotTime, "HH:mm");

    const isAvailable = Math.random() > 0.3;

    slots.push({
      time: timeString,
      available: isAvailable,
    });
  });

  return slots;
};

export const isSlotAvailable = async (
  date: Date,
  time: string,
): Promise<boolean> => {
  return Math.random() > 0.2;
};

export const getAvailableDates = (): Date[] => {
  const dates: Date[] = [];
  const today = new Date();

  for (let i = 1; i <= 14; i++) {
    const date = addDays(today, i);

    if (date.getDay() !== 0) {
      dates.push(date);
    }
  }

  return dates;
};

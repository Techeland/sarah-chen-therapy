"use-client";

import { TimeSlot } from "@/lib/booking-types";
import { getAvailableDates, getAvailableSlots } from "@/lib/mock-calendar";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { Clock, Loader2 } from "lucide-react";

interface DateTimePickerProps {
  selectedDate?: Date;
  selectedTime?: string;
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
}

export const DateTimePicker = ({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: DateTimePickerProps) => {
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  useEffect(() => {
    const dates = getAvailableDates();
    setAvailableDates(dates);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setLoadingSlots(true);
      getAvailableSlots(selectedDate).then((slots) => {
        setTimeSlots(slots);
        setLoadingSlots(false);
      });
    }
  }, [selectedDate]);

  const isdateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) =>
        format(availableDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardContent className="flex flex-col items-center pt-4 gap-4">
          <h3 className="font-semibold mb-4 text-charcoal-900">
            Select a Date
          </h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              if (date) {
                onDateSelect(date);
                onTimeSelect("");
              }
            }}
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today || !isdateAvailable(date);
            }}
            className="rounded-mb border border-cream-300"
          />
          {selectedDate && (
            <div className="my-4 p-3 bg-sage-50 rounded-lg">
              <p className="text-sm text-sage-700">
                Selected:{" "}
                <span className="font-semibold">
                  {format(selectedDate, "EEEE do MMMM yyyy")}
                </span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col pt-4 gap-4">
          <h3 className="text-center font-semibold mb-4 text-charcoal-900">
            {selectedDate ? "Select a Time" : "Choose a date first"}
          </h3>

          {!selectedDate && (
            <div className="flex items-center justify-center h-64 text-charcoal-400">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Select a date to see available times</p>
              </div>
            </div>
          )}

          {selectedDate && loadingSlots && (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-sage-500" />
            </div>
          )}

          {selectedDate && !loadingSlots && (
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.time}
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  disabled={!slot.available}
                  onClick={() => onTimeSelect(slot.time)}
                  className={`
                                ${
                                  selectedTime === slot.time
                                    ? "bg-sage-500 text-white hover:bg-sage-600"
                                    : "border-sage-300 text-charcoal-700 hover:bg-sage-50"
                                }
                                ${!slot.available && "opacity-40 cursor-not-allowed"}
                                `}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          )}

          {selectedDate &&
            !loadingSlots &&
            timeSlots.filter((s) => s.available).length === 0 && (
              <div className="flext items-center justify-center h-64 text-charcoal-400">
                <div className="text-center">
                  <p className="text-sm">No available slots for this date</p>
                  <p className="text-xs mt-2">Please select another date</p>
                </div>
              </div>
            )}

          {selectedTime && (
            <div className="mt-10 p-3 bg-sage-50 rounded-lg">
              <p className="text-center text-sm text-sage-700">
                Selected: <span className="font-semibold">{selectedTime}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

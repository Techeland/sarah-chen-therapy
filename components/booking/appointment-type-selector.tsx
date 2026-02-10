"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { APPOINTMENTS, AppointmentType } from "@/lib/booking-types";
import { Check } from "lucide-react";

interface AppointmentTypeSelectorProps {
  selected?: AppointmentType;
  onSelect: (type: AppointmentType) => void;
}

export function AppointmentTypeSelector({
  selected,
  onSelect,
}: AppointmentTypeSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-display font-semibold text-charcoal-900">
          Choose Appointment Type
        </h2>
        <p className="mt-2 text-charcoal-700">
          Select the type of appointment you'd like to book
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(Object.keys(APPOINTMENTS) as AppointmentType[]).map((type) => {
          const appointment = APPOINTMENTS[type];
          const isSelected = selected === type;

          return (
            <Card
              key={type}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "ring-2 ring-sage-500 border-sage-500"
                  : "border-cream-300 hover:border-sage-300"
              }`}
              onClick={() => onSelect(type)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      {appointment.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sage-600 font-semibold text-xl">
                      {appointment.price === 0
                        ? "Free"
                        : `£${appointment.price / 100}`}
                      {appointment.deposit && (
                        <span className="text-sm text-charcoal-600 font-normal ml-2">
                          (£{appointment.deposit / 100} deposit)
                        </span>
                      )}
                    </CardDescription>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-sage-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-charcoal-700">
                  {appointment.description}
                </p>
                <p className="mt-3 text-xs text-charcoal-600">
                  Duration: {appointment.duration} minutes
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selected && (
        <Button
          size="lg"
          className="w-full md:w-auto bg-sage-500 hover:bg-sage-600"
          onClick={() => {
            // This will be handled by parent component
            document
              .getElementById("calendar-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Continue to Select Date & Time
        </Button>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { AppointmentTypeSelector } from "@/components/booking/appointment-type-selector";
import { AppointmentType } from "@/lib/booking-types";
import { DateTimePicker } from "@/components/booking/date-time-picker";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  const [selectedType, setSelectedType] = useState<AppointmentType>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-display font-semibold text-charcoal-900">
            Book an Appointment
          </h1>
          <p className="mt-3 text-lg text-charcoal-700">
            Schedule your consultation with Sarah Chen
          </p>
        </div>
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center ${selectedType ? "text-sage-600" : "text-charcoal-400"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedType ? "bg-sage-500 text-white" : "bg-charcoal-200"}`}
              >
                1
              </div>
              <span className="ml-2 text-sm font-medium hidden sm:inline">
                Appointment Type
              </span>
            </div>
            <div
              className={`flex-1 h-1 mx-4 ${selectedType ? "bg-sage-500" : "bg-charcoal-200"}`}
            ></div>

            <div
              className={`flex items-center ${selectedDate ? "text-sage-600" : "text-charcoal-400"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedDate ? "bg-sage-500 text-white" : "bg-charcoal-200"}`}
              >
                2
              </div>
              <span className="ml-2 text-sm font-medium hidden sm:inline">
                Date & Time
              </span>
            </div>
            <div
              className={`flex-1 h-1 mx-4 ${selectedDate && selectedTime ? "bg-sage-500" : "bg-charcoal-200"}`}
            ></div>

            <div
              className={`flex items-center ${selectedDate && selectedTime ? "text-sage-600" : "text-charcoal-400"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedDate && selectedTime ? "bg-sage-500 text-white" : "bg-charcoal-200"}`}
              >
                3
              </div>
              <span className="ml-2 text-sm font-medium hidden sm:inline">
                Your Details
              </span>
            </div>
          </div>
        </div>

        {/* Step 1: Select Appointment Type */}
        <div className="mb-12">
          <AppointmentTypeSelector
            selected={selectedType}
            onSelect={setSelectedType}
          />
        </div>

        {/* Step 2: Select Date & Time - We'll build this next */}
        {selectedType && (
          <div id="calendar-section" className="mb-12 scroll-mt-24">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-semibold text-charcoal-900">
                Select Date & Time
              </h2>
              <p className="text-charcoal-700 mt-2">
                Choose an available date and time for your appointment
              </p>
            </div>
            <DateTimePicker
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onDateSelect={setSelectedDate}
              onTimeSelect={setSelectedTime}
            />

            {selectedDate && selectedTime && (
              <div className="mt-8 flex justify-center">
                <Button
                  size="lg"
                  className="bg-sage-500 hover:bg-sage-600"
                  onClick={() => {
                    document
                      .getElementById("form-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Continue to Your Details
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Booking Form - We'll build this after calendar */}
        {selectedDate && selectedTime && (
          <div className="mb-12">
            <h2 className="text-2xl font-display font-semibold text-charcoal-900 mb-6">
              Your Details
            </h2>
            <p className="text-charcoal-600 mb-4">Form coming next...</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import * as React from "react";

type Ctx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  preselect: string[];
  setPreselect: (slugs: string[]) => void;
};

const BookingModalContext = React.createContext<Ctx | null>(null);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [preselect, setPreselect] = React.useState<string[]>([]);

  return (
    <BookingModalContext.Provider value={{ open, setOpen, preselect, setPreselect }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = React.useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used inside BookingModalProvider");
  return ctx;
}

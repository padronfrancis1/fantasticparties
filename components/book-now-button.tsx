"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useBookingModal } from "@/components/booking-modal-provider";

type Props = Omit<ButtonProps, "onClick"> & {
  preselect?: string[];
  children?: React.ReactNode;
};

export function BookNowButton({ preselect, children = "Book your party", ...props }: Props) {
  const { setOpen, setPreselect } = useBookingModal();
  return (
    <Button
      {...props}
      onClick={() => {
        if (preselect) setPreselect(preselect);
        setOpen(true);
      }}
    >
      {children}
    </Button>
  );
}

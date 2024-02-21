"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

export default function EmailButton({ email }) {
  return (
    <Button
      className="h-8 w-8"
      variant="outline"
      size="icon"
      onClick={() => {
        navigator.clipboard.writeText(email);
        toast.success("Email copied to clipboard");
      }}
    >
      <MailIcon className="h-4 w-4" />
    </Button>
  );
}

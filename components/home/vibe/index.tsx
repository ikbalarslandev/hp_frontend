"use client";

import CheckboxComponent from "./checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const vibeData = [0, 1, 2, 3, 4];

const VibeComponent = () => {
  const [openValue, setOpenValue] = useState("vibe");
  const t = useTranslations("filter");
  const v = useTranslations("vibe");
  return (
    <Accordion
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
    >
      <AccordionItem value="vibe">
        <AccordionTrigger className="text-lg font-bold">
          {t("vtitle")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {vibeData.map((vibe) => (
            <CheckboxComponent
              key={vibe}
              id={vibe}
              name={v(vibe.toString())}
              paramName="vibe"
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default VibeComponent;

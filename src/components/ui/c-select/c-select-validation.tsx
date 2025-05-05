import { Controller, useFormContext } from "react-hook-form";

import * as SelectPrimitive from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./c-select";

interface CSelectValidationProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
}

function CSelectValidation({
  name,
  label,
  placeholder,
  options,
  ...props
}: CSelectValidationProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <label className="block text-gray-700 mb-2">{label}</label>
          <Select {...field} {...props}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      )}
    />
  );
}

export default CSelectValidation;

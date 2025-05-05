import { Controller, useFormContext } from "react-hook-form";
import { CInput } from "./cinput";

interface CInputValidationProps extends React.ComponentProps<"input"> {
  name: string;
  label?: string;
}

function CInputValition({ name, label, ...props }: CInputValidationProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <label className="block text-gray-700 mb-2">{label}</label>
          <CInput {...field} {...props} />
        </>
      )}
    />
  );
}

export default CInputValition;

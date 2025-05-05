import { Controller, useFormContext } from "react-hook-form";
import { CTextarea } from "./c-textarea";

interface CTextareaValidationProps extends React.ComponentProps<"textarea"> {
  name: string;
  label?: string;
}

function CTextareaValition({
  name,
  label,
  ...props
}: CTextareaValidationProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <label className="block text-gray-700 mb-2">{label}</label>
          <CTextarea {...field} {...props} />
        </>
      )}
    />
  );
}

export default CTextareaValition;

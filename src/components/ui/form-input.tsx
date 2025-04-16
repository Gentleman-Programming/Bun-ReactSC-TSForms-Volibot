import type { AnyFieldApi } from "@tanstack/react-form";
import type { InputHTMLAttributes } from "react";

// mostramos los errores que tiene el field del formulario
function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <ul>
          {field.state.meta.errors.map((error, index) => (
            <li key={index}>
              <em>{error.message}</em>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

// extendemos las propiedades de un input de html
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  field: AnyFieldApi;
  label: string;
}

const FormInput = ({ field, label, ...props }: FormInputProps) => {
  return (
    <div className="mb-4">
      <label className={`block mb-1 font-medium`}>{label}</label>

      <input
        className={`w-full border p-2 rounded focus:outlin-none ${field.state.meta.errors.length ? "border-red-500" : "border-gray-300"}`}
        value={field.state.value}
        onChange={(e) => field.setValue(e.target.value)}
        {...props}
      />
      <FieldInfo field={field} />
    </div>
  );
};

export default FormInput;

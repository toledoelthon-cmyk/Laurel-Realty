import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from "react";

type BaseFieldProps = {
  label: string;
  name: string;
  helper?: string;
};

type FieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;
type SelectProps = BaseFieldProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    options: Array<{ label: string; value: string }>;
    placeholder?: string;
  };
type TextareaProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Field({ label, name, helper, ...props }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="field-label">{label}</span>
      <input className="field-input" id={name} name={name} {...props} />
      {helper ? <span className="field-help">{helper}</span> : null}
    </label>
  );
}

export function SelectField({
  label,
  name,
  helper,
  options,
  placeholder = "Selecciona una opción",
  ...props
}: SelectProps) {
  return (
    <label className="grid gap-2">
      <span className="field-label">{label}</span>
      <select className="field-input" id={name} name={name} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helper ? <span className="field-help">{helper}</span> : null}
    </label>
  );
}

export function TextareaField({ label, name, helper, ...props }: TextareaProps) {
  return (
    <label className="grid gap-2 md:col-span-2">
      <span className="field-label">{label}</span>
      <textarea
        className="field-input min-h-32 resize-y"
        id={name}
        name={name}
        {...props}
      />
      {helper ? <span className="field-help">{helper}</span> : null}
    </label>
  );
}

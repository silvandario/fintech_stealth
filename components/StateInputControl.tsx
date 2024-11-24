import React from 'react';
import { Control, FieldPath, useController } from 'react-hook-form';
import { FormControl, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';


const VALID_STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];
const formSchema = authFormSchema('sign-up')
interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
  }

const formatStateInput = (value: string) => {
  return value.toUpperCase();
};

const StateInputControl = ({ control, name, label, placeholder }: CustomInput) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <div className="flex w-full flex-col">
      <label className="label-class">{label}</label>
      <FormControl>
        <Input
          placeholder={placeholder}
          className="input-class"
          {...field}
          onChange={(e) => {
            const formattedValue = formatStateInput(e.target.value);
            field.onChange(formattedValue); // Update the field with formatted value
          }}
          maxLength={2} // Restrict to 2 characters
        />
      </FormControl>
      {field.value && !VALID_STATES.includes(field.value) && (
        <FormMessage className="form-message mt-2">
          Please enter a valid U.S. state (e.g., NY, CA, TX).
        </FormMessage>
      )}
    </div>
  );
};

export default StateInputControl;
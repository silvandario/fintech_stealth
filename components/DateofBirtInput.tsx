import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}
const formatDateString = (value: string): string => {
    // Remove all non-digit characters
    const cleanValue = value.replace(/\D/g, "");
  
    // Add dashes in the format YYYY-MM-DD
    if (cleanValue.length <= 4) {
      return cleanValue; // Year only
    } else if (cleanValue.length <= 6) {
      return `${cleanValue.slice(0, 4)}-${cleanValue.slice(4)}`; // Year and month
    } else {
      return `${cleanValue.slice(0, 4)}-${cleanValue.slice(4, 6)}-${cleanValue.slice(6, 8)}`; // Full date
    }
  };

const DateOfBirthInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                className="input-class"
                {...field}
                onChange={(e) => {
                    const formattedValue = formatDateString(e.target.value);
                    field.onChange(formattedValue);
                  }}
                  maxLength={10}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default DateOfBirthInput
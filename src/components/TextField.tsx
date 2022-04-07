import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type TextFieldProps = Omit<MuiTextFieldProps, "name" | "error"> & {
  name: string;
};

export default function TextField({
  name,
  fullWidth = true,
  ...rest
}: TextFieldProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <MuiTextField
            fullWidth={fullWidth}
            label={t(name)}
            {...field}
            {...rest}
            name={name}
            error={invalid}
            helperText={error ? error.message : rest.helperText}
          />
        );
      }}
    />
  );
}
/*
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type TextFieldProps = MuiTextFieldProps & {
  name: string;
};
const TextField = (props: TextFieldProps) => {
  const { t } = useTranslation();
  const { control } = useFormContext();
  const { name } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => {
        console.log(field);
        return (
          <MuiTextField
            fullWidth={true}
            label={t(name)}
            error={invalid}
            helperText={error ? error.message : ""}
            {...field}
          />
        );
      }}
    />
  );
};
export default TextField;
*/
/*
https://github.com/dohomi/react-hook-form-mui/blob/master/src/TextFieldElement.tsx
export type TextFieldElementProps = Omit<TextFieldProps,
  'name'> & {
  validation?: ControllerProps['rules']
  name: string
  parseError?: (error: FieldError) => string
  control?: Control<any>
}

*/

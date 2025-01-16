import TextField from '@mui/material/TextField';

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

export default function TextInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  helperText,
}: TextInputProps) {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
    />
  );
}

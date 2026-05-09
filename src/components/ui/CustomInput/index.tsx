'use client';

import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { FunctionComponent, ReactNode } from 'react';

import { toEnglishNumber } from '@/utils/validation';
import {useSelector} from "react-redux";

type inputModeType = 'tel' | 'numeric' | 'text' | 'email' | undefined;
type variantType = 'outlined' | 'filled' | 'standard';
export type typeTextField = 'text' | 'password' | 'email' | 'numeric';

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value?: any;
  dark?: boolean;
  error?: boolean;
  variant?: variantType;
  maxLength?: number;
  helperText?: string;
  type?: typeTextField;
  inputMode?: inputModeType;
  InputProps?: any;
  disabled?: boolean;
  hidden?: boolean;
  onChangeHandler?: (value: any) => void;
  onEnter?: any;
  rows?: number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  multiline?: boolean;
  readOnly?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = (props) => {
  const {
    label = '',
    variant = 'outlined',
    placeholder = '',
    value,
	dark,
    error = false,
    helperText = '',
    type = 'text',
    maxLength = 100,
    inputMode,
    disabled,
    hidden = false,
    multiline = false,
    readOnly = false,
    rows = 1,
    onEnter,
    startIcon,
    endIcon,
    onChangeHandler,
  } = props;

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;

    if (inputMode === 'numeric' && /\D/g.test(toEnglishNumber(value))) return;
    onChangeHandler?.(inputMode === 'numeric' ? toEnglishNumber(value) : value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter') {
      onEnter?.();
    }
  };
	const theme = useSelector((state: any) => state.common.theme);

  return (
    <TextField
      id='outlined-basic'
      variant={variant}
      placeholder={placeholder}
      fullWidth
      label={label}
      value={value}
      error={error}
      rows={rows}
      onChange={onChange}
      helperText={helperText}
      type={type}
      hidden={hidden}
      multiline={multiline}
      inputMode={inputMode}
      autoComplete='off'
      onKeyDown={handleKeyDown}
      disabled={disabled}
	  sx={{

		  '& .MuiInputBase-input': {
			  color:dark ? "white" : theme === 'dark' ? "#FEFEFE" : '#374151',
		  },
		  '& .MuiOutlinedInput-notchedOutline': {
			  borderColor:dark ? "white" : theme === 'dark' ? "#25406E" : '#D1D5DB',
			  borderWidth:'1px',
		  },
		  '& input': {
			  height: dark ? '2.8rem !important' : '40px !important',
		  },
		  '& label': {
			  top:dark ? "0px" :"-3px",
			  padding:"0 2px",
			  color:dark ? "white" : theme === 'dark' ? "#FEFEFE" : '#374151',
			  background:dark ? "#052153" : theme === 'dark' ? "#08152A" : 'white',
		  },
	  }}
      slotProps={{
        input: {
          inputMode,
          readOnly: readOnly,
          sx: { letterSpacing: inputMode === 'numeric' ? '2px' : 'normal' },
          startAdornment: startIcon ? (
            <InputAdornment position='start' sx={{ marginLeft: '-0.5rem' }}>
              {startIcon}
            </InputAdornment>
          ) : null,
          endAdornment: endIcon ? (
            <InputAdornment position='start' sx={{ marginLeft: '0.5rem' }}>
              {endIcon}
            </InputAdornment>
          ) : null,
        },
      }}
      inputProps={{
        inputMode,
        maxLength: maxLength,
        autoComplete: 'new-password',
        form: {
          autocomplete: 'off',
        },
      }}
      {...props}
    />
  );
};

export default CustomInput;

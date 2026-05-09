import { Button, CircularProgress } from '@mui/material';

type colorType = 'primary' | 'error' | 'secondary' | 'inherit'|'info'|'success';
type variantType = 'outlined' | 'contained' | 'text' | 'success'|'info';
type sizeType = 'large' | 'small' | 'medium';
type buttonType = 'submit' | 'button';

interface PrimaryButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  color?: colorType;
  startIcon?: any;
  endIcon?: any;
  variant?: variantType;
  fullWidth?: boolean;
  minWidth?: boolean;
  size?: sizeType;
  type?: buttonType;
  children?: any;
  theme?: 'default';
}

const CustomButton = (props: PrimaryButtonProps) => {
  const {
    text = '',
    variant = 'contained',
    size ="medium",
    type,
    disabled,
    loading,
    color,
    startIcon,
    endIcon,
    onClick,
    fullWidth,
    minWidth,
    children,
  } = props;

  return (
    <Button
	  //@ts-ignore
      variant={variant}
      onClick={onClick}
      type={type}
      color={color}
      fullWidth={fullWidth}
      startIcon={!loading && startIcon}
      endIcon={!loading && endIcon}
      size={size}
	  sx={{minWidth:minWidth ?'10px':'120px'}}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <CircularProgress size={16} color='inherit' /> : text || children}
    </Button>
  );
};

export default CustomButton;

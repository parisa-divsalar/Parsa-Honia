const darkThemePalette = {
  mode: 'dark',
  primary: {
    main: '#E30613',
    A900: '#5A0208',
    A800: '#7A030A',
    A700: '#9A040D',
    A600: '#B80510',
    A400: '#E83540',
    A300: '#ED5A63',
    A200: '#F2858C',
    A100: '#F7B0B5',
    A50: '#FCE8EA',
  },
  secondary: {
    main: '#1D1D1D',
    A900: '#0A0A0A',
    A800: '#111111',
    A700: '#1A1A1A',
    A600: '#2A2A2A',
    A400: '#4A4A4A',
    A300: '#6B6B6B',
    A200: '#959595',
    A100: '#BEBEBE',
    A50: '#E8E8E8',
  },

  text: {
    main: '#ced1d6',
    primary: '#F5F7F7',
    secondary: '#959DA7',
    bothDark: '#1F1F1F',
    Section: '#FEFEFE',
    opacity: 'rgba(245,247,247,0.8)',
  },

  background: {
    main: '#1c1c1c',
    mainLight: '#2a2a2a',
    mainLightCustom: '#242424',
    paper: '#333333',
    layout: '#161616',
    slide: '#2a2a2a',
    slideCustomer: '#222222',
  },
  natural: {
    natural900: '#F9FAFB',
    natural800: '#F3F4F6',
    natural700: '#E5E7EB',
    natural600: '#D1D5DB',
    natural500: '#9CA3AF',
    natural400: '#6B7280',
    natural300: '#4B5563',
    natural200: '#374151',
    natural100: '#111112',
    natural50: '#0A0C10',
  },
  fundamental: {
    base: '#1C1C1C',
    Section: '#161616',
    placeholder: '#333333',
    placeholderGlass: '#444444',
    subPlaceholder: '#222222',
    card: '#2A2A2A',
    card2: '#222222',
    border: '#444444',
    slide: '#2A2A2A',
  },

  success: {
    main: '#0B9A48',
    A75: '#32C46E',
    A50: '#99e8cb',
    A25: '#ccf4e5',
    A10: '#ebfbf5',
  },
  info: {
    main: '#E30613',
    A75: '#ED5A63',
    A50: '#E3061380',
    A25: '#F7B0B5',
    A10: '#E306131A',
  },
  warning: {
    main: '#f59e0b',
    A75: '#f8b648',
    A50: '#f9ce84',
    A25: '#fce6c2',
    A10: '#fef6e7',
  },
  error: {
    main: '#ef4444',
    A75: '#f37373',
    A50: '#f6a1a1',
    A25: '#fbd0d0',
    A10: '#feeded',
  },
  complementary: {
    main: '#FCE8EA',
    lightRed: '#FCE8EA',
    lightGreen: '#ECF8D5',
    lightOrange: '#F8ECD5',
    lightGray: '#F5F5F5',
  },
};

// light is default theme

const lightThemePalette = {
  mode: 'light',

  primary: {
    main: '#E30613',
    A900: '#5A0208',
    A800: '#7A030A',
    A700: '#9A040D',
    A600: '#B80510',
    A400: '#E83540',
    A300: '#ED5A63',
    A200: '#F2858C',
    A100: '#F7B0B5',
    A50: '#FCE8EA',
  },
  secondary: {
    main: '#1D1D1D',
    A900: '#0A0A0A',
    A800: '#111111',
    A700: '#1A1A1A',
    A600: '#2A2A2A',
    A400: '#4A4A4A',
    A300: '#6B6B6B',
    A200: '#959595',
    A100: '#BEBEBE',
    A50: '#E8E8E8',
  },

  text: {
    main: '#5e6673',
    primary: '#374151',
    secondary: '#374151',
    bothDark: '#1F1F1F',
    Section: '#374151',
    opacity: '#374151B3',
  },

  background: {
    main: '#f9fafb',
    mainLight: '#2a2a2a',
    mainLightCustom: '#f5f6f8',
    paper: '#f9fafb',
    layout: '#2a2a2a',
    slide: '#fce8ea',
    slideCustomer: '#f5e6e7',
  },

  natural: {
    natural900: '#0A0C10',
    natural800: '#1F2937',
    natural700: '#374151',
    natural600: '#4B5563',
    natural500: '#6B7280',
    natural400: '#9CA3AF',
    natural300: '#D1D5DB',
    natural200: '#E5E7EB',
    natural100: '#F3F4F6',
    natural50: '#F9FAFB',
  },

  fundamental: {
    base: '#F9FAFB',
    Section: '#FEFEFE',
    placeholder: '#F9FAFB',
    placeholderGlass: '#F9FAFB',
    subPlaceholder: '#F3F4F6',
    card: '#E5E7EB',
    card2: '#F8ECD5',
    border: '#d1d5db',
    slide: '#FCE8EA',
  },

  success: {
    main: '#0B9A48',
    A75: '#67deb3',
    A50: '#99e8cb',
    A25: '#ccf4e5',
    A10: '#ebfbf5',
  },
  info: {
    main: '#E30613',
    A75: '#ED5A63',
    A50: '#FCE8EA',
    A25: '#F7B0B5',
    A10: '#FCE8EA',
  },
  warning: {
    main: '#f59e0b',
    A75: '#f8b648',
    A50: '#f9ce84',
    A25: '#fce6c2',
    A10: '#fef6e7',
  },
  error: {
    main: '#ef4444',
    A75: '#f37373',
    A50: '#f6a1a1',
    A25: '#fbd0d0',
    A10: '#feeded',
  },
  complementary: {
    main: '#FCE8EA',
    lightRed: '#FCE8EA',
    lightGreen: '#ECF8D5',
    lightOrange: '#F8ECD5',
    lightGray: '#F5F5F5',
  },
};

const themes = {
  dark: darkThemePalette,
  light: lightThemePalette,
};

export const getDesignTokens: any = (darkMode: 'dark' | 'light') => {
  return {
    palette: themes[darkMode],
    breakpoints: {
      values: {
        xxs: 0,
        xs: 320,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1280,
      },
    },
    typography: {
      h1: {
        fontSize: '4rem',
        fontWeight: '700',
      },

      h2: {
        fontSize: '3rem',
        fontWeight: '600',
      },

      h3: {
        fontSize: '2.5rem',
        '@media (max-width:600px)': {
          fontSize: '16px',
        },
        fontWeight: '600',
      },

      h4: {
        fontSize: '2.125rem',
        '@media (max-width:600px)': {
          fontSize: '1.1rem',
        },
        fontWeight: '600',
      },

      h5: {
        fontSize: '1.25rem',
        '@media (max-width:600px)': {
          fontSize: '16px',
        },
        fontWeight: '600',
      },

      h6: {
        fontSize: '1.5rem',
        '@media (max-width:600px)': {
          fontSize: '18px',
        },
        fontWeight: '600',
      },

      subtitle1: {
        fontSize: '18px',
        '@media (max-width:600px)': {
          fontSize: '12px',
        },
        fontWeight: '600',
      },

      subtitle2: {
        fontSize: '14px',
        '@media (max-width:600px)': {
          fontSize: '12px',
        },
        fontWeight: '500',
      },
      subtitle3: {
        fontSize: '16px',
        '@media (max-width:600px)': {
          fontSize: '12px',
        },
        fontWeight: '500',
      },
      subtitle4: {
        fontSize: '30px',
        '@media (max-width:600px)': {
          fontSize: '18px',
        },
        fontWeight: '600',
      },
      subtitle5: {
        fontSize: '12px',
        fontWeight: '500',
      },
      body1: {
        fontSize: '1rem',
        fontWeight: '600',
      },

      body2: {
        fontSize: '0.875rem',
        fontWeight: '400',
      },

      caption: {
        fontSize: '0.75rem',
        fontWeight: '500',
        lineHeight: '1rem',
      },

      paragraph: {
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
      },

      badge: {
        fontSize: '0.625rem',
        lineHeight: '0.75rem',
      },

      overline: {
        fontSize: '0.75rem',
        letterSpacing: '0',
        lineHeight: '1.5rem',
      },

      paragraphSelected: {
        fontSize: '0.875rem',
        fontWeight: '600',
        lineHeight: '1.5rem',
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: '1400px !important',
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {},
        },
      },
      MuiButton: {
        styleOverrides: {
          root: (props: any) => ({
            boxShadow: 'none !important',
            borderRadius: '0.6rem',
            height: '2.5rem',
            fontSize: '0.875rem',
            padding: '0 0.75rem !important',
            minWidth: '120px',
            textTransform: 'unset',
            outlined: 'unset',
            ...(props.disabled ? { color: '#fff !important' } : {}),

            '&:hover': {
              boxShadow: 'none !important',
            },

            '& .MuiButton-endIcon': {
              marginLeft: '0',
              marginRight: '4px',
            },

            '& .MuiButton-startIcon': {
              marginLeft: '4px',
            },
          }),
          success: {
            background: 'white',
            width: '47px !important',
            minWidth: '50px !important',
            fontSize: '12px',
            fontWeight: '500',
            padding: '0 !important',
            height: '31px !important',
            border: '1px solid #34D39980',
          },
          variants: [
            {
              props: { variant: 'success' },
              style: {
                backgroundColor: '#4CAF50', // Example color
                color: 'white',
              },
            },
            {
              props: { variant: 'info' },
              style: {
                backgroundColor: '#E30613',
                color: 'white',
              },
            },
          ],
          contained: {
            color: 'white',
            fontWeight: '500',

            '&:disabled': {
              color: '#bbb !important',
            },

            '&:hover': {
              boxShadow: 'none !important',
            },
          },
          secondary: {
            border: '1px solid #ddd',
          },
          outlined: {
            fontSize: '0.875rem',
            fontWeight: '500',
            '&:disabled': {
              opacity: '0.5',
              color: '#F7B0B5',
            },
          },

          info: {
            background: '#FCE8EA',
            color: '#E30613 !important',
            fontSize: '12px',
            fontWeight: '500',
          },

          text: {
            fontWeight: '500',
          },

          loading: {
            background: '#ECECEC !important',
            color: '#8B8B8B',
            fontWeight: '600',
          },
        },

        // variants: [
        // 	{
        // 		props: { size: 'small' },
        // 		style: {
        // 			fontSize: '12px',
        // 			fontWright: '700',
        // 			display: 'flex',
        // 			// padding:"0 !important",
        // 			height:"32px  !important",
        // 		},
        // 	},
        // 	{
        // 		props: { size: 'medium' },
        // 		style: {
        // 			fontSize: '12px',
        // 			fontWright: '700',
        // 		},
        // 	},
        // 	{
        // 		props: { size: 'large' },
        // 		style: {
        // 			padding: '12px 24px',
        // 			fontSize: '1rem',
        // 		},
        // 	},
        // ],
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#3d3d3d',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          autoComplete: 'off',
          inputProps: {
            autoComplete: 'off',
          },
        },
        styleOverrides: {
          root: {
            width: '100%',
            margin: '0.7rem auto',

            '& input': {
              color: '#1D1D1DF5',
              lineHeight: '0',
              padding: '0 1rem',
              fontSize: '0.875rem !important',
            },

            '& .MuiOutlinedInput-input ': {
              height: '1rem',
            },

            '& [class*="MuiOutlinedInput"]': {
              textAlign: 'right',
              borderRadius: '0.75rem',
            },

            '& label': {
              transformOrigin: 'right !important',
              left: 'inherit !important',
              overflow: 'unset',
              right: '1.5rem !important',
              fontSize: '0.75rem',
              fontWeight: 400,
            },

            '& legend': {
              maxWidth: '0 !important',
              visibility: 'visible !important',
              position: 'relative',
              right: '1rem',
              height: '0.5rem',
            },

            '& .MuiFormHelperText-root': {
              textAlign: 'right',
              marginRight: '0',
              marginTop: '.5rem',
            },
          },
        },
      },
    },
  };
};

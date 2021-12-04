import React, {createContext, useContext, useMemo, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App.jsx';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

//,====_ТЕМЫ MUI_============================================================
const themeLight = createTheme({
	palette: {
		mode: 'light',
		background: {
			paper: '#fff',
			default: '#ba68c8'
		},
		prymary: {
			main: '#3f51b5',
			ContrastText: '#fff'
		},
		secondary: {
			main: '#9c27b0',
			ContrastText: '#fff'
		},
		info: {
			main: '#0288d1',
			contrastText: '#fff'
		},
		text: {
			primary: '#3f51b5',
			secondary: '#9c27b0',
			disabled: 'rgba(0, 0, 0, 0.38)'
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
		divider: 'rgba(255, 255, 255, 0.12)'

	},
	components: {
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontSize: '1.2em',
					//color: '#9c27b0',
					color: '#fff',
					fontWeight: 'bold',
					textShadow: '1px 0 3px #77048bcf'

				}
			}
		}
	}
});

const themeDark = createTheme({
	palette: {
		mode: 'dark',
		background: {
			paper: '#424242',
			default: '#303030'
		},
		prymary: {
			main: 'rgb(101, 115, 195)',
			ContrastText: '#fff'
		},
		secondary: {
			main: '#e87cfd9c',
			ContrastText: '#fff'
		},
		info: {
			main: '#03a9f4',
			contrastText: '#fff'
		},
		text: {
			primary: '#fff',
			secondary: 'rgba(255, 255, 255, 0.99)',
			disabled: 'rgba(255, 255, 255, 0.5)',
			hint: 'rgba(255, 255, 255, 0.5)'
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
		divider: 'rgba(255, 255, 255, 0.12)'
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					background: '#424242',
				}
			}
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					background: '#ccc',
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					background: '#ccc',
				}
			}
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					background: '#e87cfd9c',
					color: 'inherit'
				}
			}
		},
		MuiListItem: {
			backgroundColor: '#ccc',
				styleOverrides: {
					root: {
						backgroundColor: '#ccc',
						color: '#fff',
					},
				}
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontSize: '1.1em',
					fontWeight: 'bold',
					textShadow: '1px 0 1px #000'
				}
			}
		},
		//MuiButton: {
		//	styleOverrides: {
		//		root: {
		//			background: '#e87cfd9c',
		//		}
		//	}
		//}

		//MuiSvgIcon: {
		//	styleOverrides: {
		//		root: {
		//			color: '#fff',
		//		},
		//	}
		//}
	},

});

//,===========_ПЕРЕКЛЮЧАТЕЛЬ ТЕМ_=====================================================


const ColorModeContext = createContext({
	toggleColorMode: () => {}
});


const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light' ?
			{
				//* palette values for light mode
				prymary: {
						main: '#3f51b5',
						ContrastText: '#fff'
					},
					secondary: {
						main: '#9c27b0',
						ContrastText: '#fff'
					},
			} :
			{
				//* palette values for dark mode
				prymary: {
						main: 'rgb(101, 115, 195)',
						ContrastText: '#fff'
					},
					secondary: {
						main: '#e87cfd9c',
						ContrastText: '#fff'
					}
			}),
	},
});


const [mode, setMode] = useState('light');

const colorMode = useMemo(() => ({
	toggleColorMode: () => {
		setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
	}
}), [])


ReactDOM.render(
	<React.StrictMode >
		<ThemeProvider theme = {themeLight} >
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
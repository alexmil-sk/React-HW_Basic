import React, { createContext, useContext, useMemo, useState } from 'react';
import classes from './App.module.css';
import Header from './Header/Header.jsx';
import MsgForm from './MsgForm/MsgForm.jsx';
import Nav from './Nav/Nav.jsx';
import JoinRightTwoToneIcon from '@mui/icons-material/JoinRightTwoTone';
import JoinLeftTwoToneIcon from '@mui/icons-material/JoinLeftTwoTone';
import { ThemeProvider, createTheme, useTheme, Container, Typography, Box, IconButton } from '@mui/material';

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
		divider: '#ccccccad'

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
		},
		MuiListItem: {
			backgroundColor: '#ccc',
			styleOverrides: {
				root: {
				//	borderBottom: '1px solid #ccccccad',//, смю Divider в конце palette
				},
			}
		},
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

//,===========_КОД ПЕРЕКЛЮЧЕНИЯ ТЕМ_=====================================================


const ColorModeContext = createContext({
	toggleColorMode: () => { }
});


const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === 'light' ?
				//* palette values for light mode======
			{
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
				divider: '#ccccccad'
			} :
			{
				//* palette values for dark mode
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
			}),
	},
});

//,==============_ПЕРЕКЛЮЧАТЕЛЬ_========================

const ThemeToggle = () => {
	const theme = useTheme();

	const colorMode = useContext(ColorModeContext);

	return <div>
		{/* mode: {theme.palette.mode} */}
		<IconButton
			color="inherit"
			onClick={colorMode.toggleColorMode}
		>
			{theme.palette.mode === 'dark' && <JoinRightTwoToneIcon color="inherit" fontSize="large"/> }
			{theme.palette.mode === 'light' && <JoinLeftTwoToneIcon color="inherit" fontSize="large"/>}
		</IconButton>
	</div>
}



//?---------------------------------------------------------------------------

function App() {

	const [mode, setMode] = useState('light');

	const colorMode = useMemo(() => ({
		toggleColorMode: () => {
			setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
		}
	}), [])


	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])


	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Container sx={{ mt: 4, mb: 4, padding: '25px 0', border: '1px solid #9C27B0' }} color="secondary">
					<Header
						ThemeToggle={ThemeToggle}
					/>
					<div
						className={classes.wrapper}
					>
						<Box
							sx={{ width: '45%' }}
						//className={classes.container1}
						>
							<Typography
								color="secondary"
								className={classes.mainTitle}
								variant="h3"
								sx={{ mt: 2, mb: 2 }}
							>List of Chats</Typography>
							<Nav />
						</Box>
						<Box
						//className={classes.container2}
						>
							<Typography
								color="secondary"
								className={classes.mainTitle}
								variant="h3"
								sx={{ mt: 2, mb: 2 }}
							>Chat for Students</Typography>
							<MsgForm />
						</Box>
					</div>
				</Container>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;

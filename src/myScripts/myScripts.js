import React, { createContext, useContext } from 'react';
import { useTheme, IconButton } from '@mui/material';
import JoinRightTwoToneIcon from '@mui/icons-material/JoinRightTwoTone';
import JoinLeftTwoToneIcon from '@mui/icons-material/JoinLeftTwoTone';




//*=============================================================================

//,===========_КОД ПЕРЕКЛЮЧЕНИЯ ТЕМ_============

export const ToggleContext = createContext({
	switchMode: () => {}
});


export const getMode = (mode) => ({
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
			} : {
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
	components: {
		mode,
		...(mode === 'light' ?
			//* components values for light mode======
			{
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

			} : {
				//* components values for dark mode
				mode: 'dark',
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
						},
						label: {
							color: '#ccc'
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
							fontSize: '1.2em',
							fontWeight: 'bold',
							textShadow: '1px 0 1px #000'
						}
					}
				},
			}),
	}
});

//*=============================================================================

//,==============_ПЕРЕКЛЮЧАТЕЛЬ_========================


export const SwitchLight = () => {
	const theme = useTheme();
	const colorMode = useContext(ToggleContext);

	return <div>
		{/* mode: {theme.palette.mode} / {theme.components.mode} */}
		<IconButton
			color="inherit"
			onClick={colorMode.switchMode}
		>
			{theme.palette.mode === 'dark' && theme.components.mode === 'dark' && <JoinRightTwoToneIcon color="inherit" fontSize="large"/> }
			{theme.palette.mode === 'light' && theme.components.mode === 'light' && <JoinLeftTwoToneIcon color="inherit" fontSize="large"/>}
		</IconButton>
	</div>
}

//*=============================================================================



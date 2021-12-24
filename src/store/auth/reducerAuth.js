import {
	auth
} from '../../firebase/firebase.js';

//*----------------------------------------------------------------

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

//*----------------------------------------------------------------

const initialState = {
	user: null
};

//*----------------------------------------------------------------

export const getUser = (state) => state.auth.user;
export const getIsAuth = (state) => state.auth.user !== null;

//*----------------------------------------------------------------

export const loginUserAction = (user) => ({
	type: LOGIN_USER,
	payload: user
});

export const logoutUserAction = () => ({
	type: LOGOUT_USER
});

export const initAuthAction = (dispatch) => {
	auth.onAuthStateChanged((user) => {
		if (user) {
			dispatch(loginUserAction(user));
		} else {
			dispatch(logoutUserAction());
		}
	});
};
//*----------------------------------------------------------------

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER: {
			return {
				user: action.payload
			};
		}
		case LOGOUT_USER: {
			return {
				user: null
			}
		}
		default: {
			return state
		}
	}
};
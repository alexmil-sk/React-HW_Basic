import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMessage, deleteMessage } from "../../../store/msgForm/actionsMsgForm.js";
import { Drawer, Box, Button } from '@mui/material';
import classes from '../MsgForm.module.css';
import SaveIcon from '@mui/icons-material/Save';
import CreateMsg from '../CreateMsg/CreateMsg.jsx';
import { getMsg } from '../../../store/msgForm/selectorsMsgForm.js';





const EditMsg = (props) => {

	const messages = useSelector(getMsg);


	const dispatch = useDispatch();
	const {
		openDrawer,
		closeDrawer,
	} = props;

const onSave = (value) => {
	closeDrawer();
	dispatch(
		editMessage({
			//id: props.id,
			id: value.id,
			...value,
		})
	)
}



	return (
		<Drawer
			anchor="left"
			open={openDrawer}
			onClose={closeDrawer}
			className={classes.drawer}
		>

				<CreateMsg
					onSave={onSave}
					initialValues={{
						id: (messages.length !== 0 ? messages[0].id : 'underfined' ),
						title: (messages.length !== 0 ? messages[0].title : 'underfined'),
						body: (messages.length !== 0 ? messages[0].body : 'underfined'),
						image: (messages.length !== 0 ? messages[0].image : 'underfined' ),
				}}
				

				/>
		</Drawer>
	)
}


export default EditMsg;
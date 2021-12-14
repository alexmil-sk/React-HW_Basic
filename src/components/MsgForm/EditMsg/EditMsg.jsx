import { useDispatch, useSelector } from 'react-redux';
import { editMessage} from "../../../store/msgForm/actionsMsgForm.js";
import { Drawer } from '@mui/material';
import classes from '../MsgForm.module.css';
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
			...value,
		})
	)
}



	return (
		<Drawer
			anchor="right"
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
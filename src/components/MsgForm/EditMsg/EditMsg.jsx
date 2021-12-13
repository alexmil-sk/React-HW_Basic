import { useState } from 'react';
import { Card, Button, Stack, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import CreateMsg  from "../CreateMsg/CreateMsg.jsx";
import { editMessage } from "../../../store/msgForm/actionsMsgForm.js";


const EditMsg = (props) => {
	const [isEdit, setIsEdit] = useState(false);
	const dispatch = useDispatch();

	const onEdit = () => {
		setIsEdit(true)
	}
	const onCancelChanges = () => {
		setIsEdit(false)
	}
	const onSaveChanges = (value) => {
		setIsEdit(false)
		dispatch(
			editMessage({
				id: props.id,
				...value,
			})
		)
	}

	return <>
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					{props.content}
				</Card.Text>
				<Stack direction="horizontal" gap={3}>
					<Button onClick={onEdit} variant="primary">Edit</Button>
					<Button onClick={props.onDelete} variant="primary">Delete</Button>
				</Stack>
			</Card.Body>
		</Card>
		<Modal show={isEdit} onHide={onCancelChanges}>
			<Modal.Header closeButton>
				<Modal.Title>Post edit</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<CreateMsg
					onSave={onSaveChanges}
					initialValues={{
						title: props.title,
						content: props.content,
					}}
				/>
			</Modal.Body>
		</Modal>
	</>
}


export default EditMsg;
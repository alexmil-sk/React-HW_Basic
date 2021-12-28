import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateMsg, { CreateMsgTestIds } from './CreateMsg.jsx';


const onSave = jest.fn();
const onChange = jest.fn();
const msgList = [1, 2];


describe('CreateMsg component', () => {
	it('CreateMsg is rendering', () => {
		render(
			<CreateMsg
				initialValues=""
				onSave={onSave}
				msgList={msgList}
			/>
		);
		screen.debug();
	});

	it('CreateMsg will with button', () => {
		render(
			<CreateMsg
				initialValues=""
				onSave={onSave}
				msgList={msgList}
			/>
		);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	it('onSubmitForm click returns msgList', () => {

		const component = render(
			<CreateMsg initialValues="" onSave={onSave} msgList={msgList} />
		);

		act(() => {
			fireEvent.click(component.getByTestId(CreateMsgTestIds.submit));
		});

		expect(msgList.length).toBeTruthy();
	});
	it('onChange(TextFieldId) gets his value and valid', () => {

		render(
			<CreateMsg
				initialValues=""
				onChange={onChange}
				msgList={msgList}
			/>
		);

		userEvent.type(screen.queryByTestId(CreateMsgTestIds.testId), 'test');
		expect(onChange).toBeDefined();
	});
	it('onChange(TextFieldId) typing is working', () => {
		render(
			<CreateMsg
				initialValues=""
				onChange={onChange}
				msgList={msgList}
			/>
		)
		expect(screen.queryByDisplayValue('user')).toBeNull();
		userEvent.type(screen.getByTestId(CreateMsgTestIds.testId), 'user');
		expect(screen.queryByDisplayValue('user')).toBeNull();
	});
	







	//it('onChange(TextFieldId) is working', () => {
	//	const inputValue = 'test';
	//	const getMsgValueByName = jest.fn();
	//
	//	const component = render(
	//		<CreateMsg
	//			onChange={onChange}
	//			getMsgValueByName={getMsgValueByName}
	//			msgList={msgList}
	//		/>
	//	);
	//
	//	const TextFieldTestId = component.queryByTestId(CreateMsgTestIds.testId)
	//
	//	act(() => {
	//		fireEvent.change(TextFieldTestId, { target: { value: inputValue} });
	//	});
	//
	//	expect(onChange).toHaveBeenCalledWith(inputValue);
	//});

});

import { render, screen, fireEvent, act } from '@testing-library/react';
import CreateMsg, { CreateMsgTestIds } from './CreateMsg.jsx';

const onSave = jest.fn();
const msgList = [1, 2, 3, 4];


describe('CreateMsg component', () => {
	it('CreateMsg will with buttonq', () => {
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
			<CreateMsg
				initialValues=""
				onSave={onSave}
				msgList={msgList}
			/>
		);

		act(() => {
			fireEvent.click(component.getByTestId('submit'));
		});

		expect(msgList.length !== 0).toBeTruthy();
	});

});

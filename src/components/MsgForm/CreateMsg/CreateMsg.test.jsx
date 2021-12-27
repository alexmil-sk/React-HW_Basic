import { render, screen } from '@testing-library/react';
import CreateMsg, { testVariables} from './CreateMsg.jsx';

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
	it('CreateMsg will render', () => {
		render(
			<CreateMsg
				initialValues=""
				onSave={onSave}
				msgList={msgList}
			/>
		);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});

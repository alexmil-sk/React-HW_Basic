import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MsgForm, MsgFormRender } from './MsgForm.jsx';
import { create } from "react-test-renderer";



describe('MsgForm component',() => {
	it('MsgForm component renders with msgList', () => {
		const msgList = ['item1', 'item2'];
		render(<MsgFormRender msgList={msgList}/>);
		screen.debug();
		expect(msgList.length).toBe(2);
	});


	
});


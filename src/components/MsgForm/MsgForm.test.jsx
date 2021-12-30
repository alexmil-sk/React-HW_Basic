import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MsgForm, MsgFormRender } from './MsgForm.jsx';
import { create } from "react-test-renderer";



describe('MsgForm component', () => {
	it('MsgForm component have been rendered', () => {
		const msgList = ['item1', 'item2'];
		render(<MsgFormRender msgList={msgList} />);
		expect(screen.getAllByText(/User's name/i)).toBeTruthy();
	});
	it('MsgList component have been rendered', () => {
		const msgList = ['item1', 'item2'];
		render(<MsgFormRender msgList={msgList} />);
		expect(screen.getByText(/messages/i)).toBeInTheDocument();
	});
	it('MsgForm component get props msgList', () => {
		const msgList = ['item1', 'item2'];
		render(<MsgFormRender msgList={msgList}/>);
		expect(msgList.length).toBe(2);
	});
	it('MsgForm component get props onSave', () => {
		const msgList = ['item1', 'item2'];
		const onSave = jest.fn();
		render(<MsgFormRender onSave={onSave} msgList={msgList}/>);
		expect(onSave).toBeTruthy();
	});


});


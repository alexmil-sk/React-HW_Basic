import { render, screen } from '@testing-library/react';
import { MsgFormRender } from './MsgForm.jsx';

const msgList = ['item1', 'item2'];
const onSave = jest.fn();


describe('MsgForm component', () => {
	it('MsgForm component have been rendered', () => {
		render(<MsgFormRender msgList={msgList} />);
		expect(screen.getAllByText(/User's name/i)).toBeTruthy();
	});
	it('MsgList component have been rendered', () => {
		render(<MsgFormRender msgList={msgList} />);
		expect(screen.getByText(/messages/i)).toBeInTheDocument();
	});
	it('MsgForm component get props msgList', () => {
		render(<MsgFormRender msgList={msgList}/>);
		expect(msgList.length).toBe(2);
	});
	it('MsgForm component get props onSave', () => {
		render(<MsgFormRender onSave={onSave} msgList={msgList}/>);
		expect(onSave).toBeTruthy();
	});
	it('MsgForm has send message button', () => {
		render(<MsgFormRender msgList={msgList} />);
		expect(screen.queryByRole('button')).toBeInTheDocument();
	});
	it('Image field has default value', () => {
		render(<MsgFormRender msgList={msgList}/>);
		expect(screen.getByText(/Users's avatar http:/i)).toBeInTheDocument();
	});

});


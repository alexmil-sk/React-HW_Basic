import React from 'react';
import './Counter.scss';
import Buttons from './Buttons/Buttons.jsx';

function Counter(props) {

	return (
		<div className="containerCounter">
			<h2 className="mainTitle">{props.title}</h2>
			<div className="counter">Counter: {props.counter}</div>
			<Buttons
				increment={props.increment}
				decrement={props.decrement}
				isClear={props.isClear}
				getNull={props.getNull}
				counter={props.counter}
			/>
			{(props.isClear || props.counter === 0) &&
				<h4>Измените счетчик...</h4>
			}

		</div>
	);
}

export default Counter;
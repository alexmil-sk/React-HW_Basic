import React from 'react';
import classes from './Buttons.module.css';

export default function Buttons(props) {
	return (
		<div className={classes.btnBlock}>
			<button className={classes.plus} onClick={props.increment}>+</button>
			<button className={classes.minus} onClick={props.decrement}>-</button>
			{(!props.isClear && props.counter !== 0) ?
				(<button
					className={classes.toggle}
					onClick={props.getNull}
					style={{ background: '#c31616' }}
				>Wipe
				</button>) :
				(<button
					className={classes.toggle}
					onClick={props.getNull}
					style={{ background: 'green'}}
				>Clean
				</button>)
			}
		</div>
	)
}



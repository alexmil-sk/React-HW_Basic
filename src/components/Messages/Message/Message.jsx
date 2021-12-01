import React from 'react'
import classes from './Message.module.css';
import './MessageAnime.css';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';


function Message(props) {

	const delMsgs = (id) => {
		props.delUsersMsgs(id);
	}

	return (
		<div className={classes.userMsgContainer}>
			<TransitionGroup component="div" className={classes.userMsg}>
				{props.stateMsgs.map(msg => {

					return (
						<CSSTransition
							key={msg.id}
							timeout={1000}
							classNames="msgAnimated"
						>
							<div key={msg.id} className={classes.msgForm}>
								<div className={classes.msgContent}>
									<div className={classes.msgId}>
										<img src={msg.image} alt={msg.id} className={classes.msgImg} />
										<span>{msg.id}</span>
									</div>
									<div className={classes.msgtext}>
										<span className={classes.msgTitle}>{msg.title}</span>
										<p>{msg.body}</p>
									</div>
									<button
										className={classes.delBtn}
										onClick={() => delMsgs(msg.id)}
									>&times;</button>
								</div>
							</div>
						</CSSTransition>
					)
				})
				}
			</TransitionGroup>
		</div>
	)
}

export default Message;


import React from 'react'
import classes from './Message.module.css';

function Message(props) {

	

	const delMsgs = (id) => {
		props.delUsersMsgs(id);
	}

	return (
		<div className={classes.userMsgContainer}>
			<div className={classes.userMsg}>
				{props.stateMsgs.map(msg => {
					return (
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
					)
				})
				}
			</div>
		</div>
	)
}

export default Message;


import React from 'react';
import classes from '../MsgForm.module.css';
import '../MsgFormAnime.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ListItem, List, Container, Box, Avatar, Typography } from '@mui/material';


function ListMsg({ msgList }) {


	return (
		<>
			<Container sx={{ padding: '0!important', ml: 1, mr: 1 }}>
				<Box sx={{ mb: '25px' }}>
					<div className={classes.container}>
						<Typography
							color="secondary"
							variant="h4"
							className={classes.mainTitle}
						>Messages</Typography>
						<div className={classes.userMsgContainer}>
							<List className={classes.userMsg}>
								<TransitionGroup component="span">
									{msgList.map((msg) => {
										return (
											<CSSTransition
												key={msg.idx}
												timeout={1000}
												classNames="msgUseAnimated"
											>
												<ListItem
													key={msg.idx}
													className={classes.msgForm}
													severity="info"
													variant="outlined"
												>
													<div className={classes.msgContent}>
														<div className={classes.msgId}>
															<Avatar
																src={msg.image} alt={msg.id} className={classes.msgImg}
																sx={{ width: 100, height: 100, border: '1px solid', boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)' }}
															/>
															<Typography fontSize="large" sx={{ textAlign: 'center' }}>{msg.id}</Typography>
														</div>
														<div className={classes.msgtext}>
															<span className={classes.msgTitle}>{msg.title}</span>
															<Typography fontSize="large">{msg.body}</Typography>
														</div>
													</div>
												</ListItem>
											</CSSTransition>
										)
									})
									}
								</TransitionGroup>
							</List>
						</div>
					</div>
				</Box>
			</Container>
		</>
	)
}

export default ListMsg;


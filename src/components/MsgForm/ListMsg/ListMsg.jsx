import React from 'react';
import classes from '../MsgForm.module.css';
import '../MsgFormAnime.css';
import EditMsg from '../EditMsg/EditMsg.jsx';
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useParams, Redirect } from 'react-router-dom';
import { getMsg } from '../../../store/msgForm/selectorsMsgForm.js';
import { ListItem, List, Container, Box, Avatar, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


function ListMsg({ onDelete, onEdit, handleOpen }) {

	const messages = useSelector(getMsg);
	const { chatId } = useParams();//! Достает из match.params одну из его характеристик: postId

	//*=================================================================


	if (messages.find(({ id }) => id === chatId)) {
		return <Redirect to="/404" />;
	}

	//*==================================================================



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
									{messages.map((msg) => {
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
														<button
															className={classes.delBtn}
															onClick={() => onDelete(msg.id)}
														>&times;</button>
														<button
															onClick={handleOpen}
															className={classes.editBtn}
														>
															<ModeEditIcon />
															</button>
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


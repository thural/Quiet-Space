import React, { useContext } from "react"
import HandlerContext from "../MainContext"
import styles from "./styles/messageStyles"

const Message = ({ message }) => {

	const { loggedUser } = useContext(HandlerContext)
	
	const { username, text, reactions } = message

	//const liked = reactions.includes(user['_id']) ? 'unlike' : 'like'
	
	const marginLeft = username !== loggedUser.username ? "auto" : "0"

	const classes = styles()

	return (

		<div id={username} className={classes.message} style={{marginLeft}}>

			<div className={classes.sender}>
				{username}
			</div>

			<div className={classes.text}>
				<p>{text}</p>
			</div>

		</div>
	)

}

export default Message
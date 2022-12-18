import { createUseStyles } from "react-jss"

const styles = createUseStyles({
	chatboard: {
		display: 'flex',
		flexFlow: 'column nowrap',
		gap: '1rem',
		width: '100%',
		margin: '0 10%',
		padding: '5%',
		width: '100%',
		flexBasis: 'min-content',
		flexGrow: '1',
		marginTop: '0',
		marginBottom: '0',
		'& .add-post-btn': {
			marginTop: '1rem',
			width: 'fit-content',
			backgroundColor: 'black',
			color: 'white',
			padding: '4px 8px',
			borderRadius: '1rem',
			border: '1px solid black',
			fontSize: '1rem',
			fontWeight: '500',
			marginBottom: '1rem'
		}
	},
	chatInput: {
		gap: '1rem',
		color: 'black',
		width: '100%',
		marginTop: 'auto',
		display: 'flex',
		padding: '1rem',
		flexFlow: 'row nowrap',
		alignItems: 'center',
		borderRadius: '1em',
		backgroundColor: 'white',
		marginBottom: '1rem',
		'& button': {
			color: 'white',
			width: 'fit-content',
			border: '1px solid black',
			padding: '4px 8px',
			fontSize: '1rem',
			fontWeight: '500',
			borderRadius: '1rem',
			backgroundColor: 'black'
		},
		'& .input': {
			display: 'flex',
			flexFlow: 'column nowrap',
			gap: '0.5rem',
		},
		'& input': {
			boxSizing: 'border-box',
			width: '100%',
			padding: '10px',
			height: '1.8rem',
			backgroundColor: '#e2e8f0',
			border: '1px solid #e2e8f0',
			borderRadius: '10px'
		},
		'& input:focus': {
			outline: 'none',
			borderColor: '#a7abb1',
		}
	},
});

export default styles

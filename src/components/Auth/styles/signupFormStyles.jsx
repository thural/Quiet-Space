import { createUseStyles } from "react-jss"

const styles = createUseStyles({
  signup: {
    gap: '0.5rem',
    color: 'black',
    margin: 'auto',
    display: 'flex',
    padding: '1rem',
    flexFlow: 'column nowrap',
    borderRadius: '1em',
    backgroundColor: 'white',
    '& button': {
      marginTop: '1rem',
      marginLeft: 'auto',
      width: 'fit-content',
      backgroundColor: 'black',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '1rem',
      border: '1px solid black',
      fontSize: '1rem',
      fontWeight: '500',
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
    },
    '& h3': {
      marginBottom: '0'
    }
  },
});

export default styles

import { Button } from '@material-ui/core';

import './styles.css';

export const GeneralBtn = ({ text, onClick, disabled }) => (
    <Button
    className='button'
    onClick={onClick}
    disabled={disabled}
    variant="contained" 
    color="primary"
    cursor="pointer"
    >
        {text}
    </Button>
)
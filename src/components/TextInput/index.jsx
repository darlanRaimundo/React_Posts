import { TextField } from '@material-ui/core'

import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => (
    <TextField
        className='text-input'
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="Type your search"
        variant="outlined"
    />
)
export const Filter = ({onInputChange }) => { 
    return (
        <input type='text' onChange={(e) => onInputChange(e.target.value)}/>
    )
}
import { FilterIntput, FilterTitle } from "./Filter.styled"



export const Filter = ({title, state, handleFindContact}) =>{
    const {filter} = state
    return(
        <>
            <FilterTitle>{title}</FilterTitle>
            <FilterIntput
                type="text"
                name="filter"
                value={filter}
                onChange = {handleFindContact}
            />
        
        </>

    )
}




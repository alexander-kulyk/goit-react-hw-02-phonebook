import { PrimaryTitle, SecondaryTitle } from "./Title.styled"


export const Title = ({PrTitle, SecondTitle}) =>{
    console.log(PrTitle, SecondTitle);
  
    return(
        <>
            <PrimaryTitle>{PrTitle}</PrimaryTitle>
            <SecondaryTitle>{SecondTitle}</SecondaryTitle>
        </>
    )
}
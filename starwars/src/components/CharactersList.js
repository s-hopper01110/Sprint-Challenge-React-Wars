import React from 'react';
import Characters from './Characters';

function CharactersList (props) {
    return (
    <div>
        {props.starwars.map(starwarsData => {
            return <Characters key={starwarsData.name} starwarsSet={starwarsData} />
        })}
    
    </div> 
        
    )
}

export default CharactersList;
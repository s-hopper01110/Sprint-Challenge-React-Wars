import React from 'react';
import './StarWars.css';

      function Characters (props) {
            return (
                  <div className="charName">
                        <h3>{props.starwarsSet.name}</h3>
                              <div className="swElements">
                                   <div> Birth Year:{props.starwarsSet.birth_year}</div> 

                              </div>
                  </div> //main div

                  
            )
      }

export default Characters;
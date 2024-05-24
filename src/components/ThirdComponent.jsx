import React from 'react'
import PropTypes from 'prop-types'

export const ThirdComponent = ({name,lastName,card}) => {
    
  return (
    <div>Comunicación entre componentes
    <ul>
        <li> {name} </li>
        <li> {lastName} </li>
        <li> {card.height} </li>
    </ul>
    </div>
 )
}

ThirdComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  card: PropTypes.object
}

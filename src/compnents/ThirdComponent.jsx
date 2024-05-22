import React from 'react'

export const ThirdComponent = (props) => {
    console.log(props)
  return (
    <div>Comunicación entre componentes
    <ul>
        <li> {props.name} </li>
        <li> {props.lastName} </li>
        <li> {props.card.allergies} </li>
    </ul>
    </div>
 )
}

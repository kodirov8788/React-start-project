import React from 'react'
import Card from '../card/Card'
import "./Main.css"

const Main = (props) => {
    console.log("main >>", props.data);
    return (
        <div className='main'>
            {/* <Card Name={props.data[0].name} Lastname={props.data[0].lastname} />
            <Card Name={props.data[1].name} Lastname={props.data[1].lastname} />
            <Card Name={props.data[2].name} Lastname={props.data[2].lastname} /> */}
            {
                props.data.map(user => (
                    <Card Name={user.name} Lastname={user.lastname} />
                ))
            }
            {/* <Card Name="Axmad" Lastname="Dilshodov" />
            <Card Name="Axmad" Lastname="Dilshodov" /> */}
        </div>
    )
}

export default Main
import React from 'react'
import "./SidebarOption.css";
import { useHistory } from "react-router-dom"
import db from './firebase';

function SidebarOption({Icon,title,id,addChannelOption}) {

    const history = useHistory();


    const selectChannel=()=>{
        if(id) {
            history.push(`/room/${id}`);
        }else{
            history.push('title');
        }
    };


    const addChannel =() => {
        const channelName = prompt("Welcome Folks ! Please enter a channel name ")

        if(channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel} >
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h className="sidebarOption__channel">
                    <span className="sidebarOption__hash"># {title}</span>
                </h>
            )}
        </div>
    )
}

export default SidebarOption

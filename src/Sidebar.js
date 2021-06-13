import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import LoopIcon from "@material-ui/icons/Loop"
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import DuoIcon from '@material-ui/icons/Duo';
import db from "./firebase";

function Sidebar() {

    const [channels,setChannels] = useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>(
            setChannels(
                snapshot.docs.map(doc=>({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])


    return (
        <div className = "sidebar">
            <div className = "sidebar__header">
                <div className= "sidebar__info">
                    <h2>Channels</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Guest User
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption title = "Discussion Forum"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
			<SidebarOption Icon={DraftsIcon} title="Saved items" />
			<SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
			<SidebarOption Icon={FileCopyIcon} title="File browser" />
			<SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
			<SidebarOption Icon={AppsIcon} title="Apps" />
            
            {/* <SidebarOption title = "Module-1"/>
            <SidebarOption title = "Module-2"/>
            <SidebarOption title = "Module-3"/>
            <SidebarOption title = "Discussion Forum"/>
            <SidebarOption title = "Discussion Forum"/>
            <SidebarOption title = "Discussion Forum"/> */}

            <SidebarOption Icon={MeetingRoomIcon} title="Meetings" />
            <hr/>
            {/* <SidebarOption Icon={ExpandLessIcon} title="Show more" /> */}
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            
            <SidebarOption Icon={VoiceChatIcon} title="VoiceChat" />
            <SidebarOption Icon={DuoIcon} title="Vedio Confrencing" />
            <hr/>
            <SidebarOption Icon={AddIcon} title="Add channel" />
            

            {/* {Connect all the channel to the database} */}
            {/* {SidebarOption} */}
            {channels.map(channel=>(
                <SidebarOption
                title = {channel.name}
                id={channel.id}
            />
            ))}
           
            
            

        </div>
    )
}

export default Sidebar;

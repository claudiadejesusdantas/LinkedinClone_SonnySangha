import { Avatar } from '@mui/material';
import React from "react";
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.nine10.ca/wp-content/uploads/2012/07/the-meaning-of-colours.jpg" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Claudia Dantas</h2>
                <h4>claudiadjd@gmail.com</h4>
            </div>

            <div className="sidebar__stats">

                <div className="sidebar__stat">
                    <p> Who viewed you </p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                    
                <div className="sidebar__stat">
                    <p> Views on post </p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('react.js')}
                    {recentItem('javascript')}
                    {recentItem('CSS')}
                    {recentItem('HTML')}
                    {recentItem('softwareengineer')}
                </div>
        </div>
    )
}

export default Sidebar
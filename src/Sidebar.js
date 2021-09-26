import React from 'react'
import "./Sidebar.css";
function Sidebar() {
    return (
        <div className="sidebar">
            <h2> Hii  i am Sidebar</h2>
            <Sidebar title="Home"/>
            <Sidebar title="Trending"/>
            <Sidebar title="subscription" />
           

        </div>
    )
}

export default Sidebar

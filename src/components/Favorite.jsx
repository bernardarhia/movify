import React from 'react'
import {RiCloseLine} from 'react-icons/ri';
const Favorite = ({sidebarOpen, setSidebarOpen, darkMode}) => {
    const handleSidebar = ()=>{
        setSidebarOpen(!sidebarOpen);
      }
    return (
        <div className="favorite-container" 
        style={{
           right: sidebarOpen ? '0':'-100%',
           background:darkMode ? '#fff':'#000'
        }}>
            <div className="close-favorite" onClick={handleSidebar}>
                <RiCloseLine fill={darkMode ? ' #797979':' #fff'} />
            </div>
        </div>
    )
}

export default Favorite

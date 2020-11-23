import React from 'react'
import {RiCloseLine} from 'react-icons/ri';
const Favorite = ({sidebarOpen, setSidebarOpen, darkMode}) => {
    const handleSidebar = ()=>{
        setSidebarOpen(!sidebarOpen);
      }
    return (
        <div className="favorite-container" 
        style={{
           right: sidebarOpen ? '0':'-200%',
           background:darkMode ? '#fff':'#000'
        }}>
            <div className="close-favorite" onClick={handleSidebar}>
                <RiCloseLine fill={darkMode ? '#797979':' #fff'} />
            </div>
            <h1 style={{color:darkMode ? ' #36434d':'#fff', textAlign:"center",margin:'1rem 0'}}>Favorites</h1>

            <div className="favorite__lists">
                <ul>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,131,23,134,3546,45657,35,6535,68,3535].map((list)=>{
                        return <li key={list}>Item {list}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Favorite

import React,{useState} from 'react'
import {MenuList} from './MenuList'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
const [clicked,setClicked]=useState(false)
    const List = MenuList.map(({url,title},index)=>{
        return(
            <li key={index}>
                <NavLink exact to={url} activeClassName="active" onClick={()=>setClicked(!clicked)}>{title}</NavLink>
            </li>
        )

    })
    return (
       <nav>
           <div className="logo">
               VPN <font>Lab</font>
           </div>
           <div className="menu_icon" onClick={()=>setClicked(!clicked)}>
               <i className={clicked ? "fas fa-times":"fa fa-bars"}/>
           </div>
           <ul className={clicked ? "Menu_List":"Menu_List close"}>
               {List}
           </ul>
       </nav>
    )
}

export default Navbar

import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./widgetSm.css";

export default function WidgetSm() {
  
  const dispatch = useDispatch();
  const allUsers = useSelector((state)=> state.users);
  const [firtUsers, setFirtUsers] = useState([]);
  useEffect (()=>{
    setFirtUsers(allUsers.slice(allUsers.length-5))
  },[dispatch])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Miembros</span>
      <ul className="widgetSmList">

      {
             firtUsers?.map(u =>{
                return (
                   <li className="widgetSmListItem">
                     <img
                       src="https://img2.freepng.es/20180430/oqw/kisspng-job-computer-icons-profession-5ae6a6e1d01463.1695692215250654418523.jpg"
                       alt=""
                       className="widgetSmImg"
                     />
                     <div className="widgetSmUser">
                       <span className="widgetSmUsername">{u.nickname}</span>
                     </div>
                     <div className="widgetSmUser">
                       <span className="widgetSmUsername">{u.createdAt}</span>
                     </div>
                     
                   </li>
                )
             })
      }


        <li className="widgetSmListItem">
        </li>
        <li className="widgetSmListItem">
        </li>
        <li className="widgetSmListItem">
        </li>


    
        <li className="widgetSmListItem">
          <img
            src="https://img2.freepng.es/20180430/oqw/kisspng-job-computer-icons-profession-5ae6a6e1d01463.1695692215250654418523.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Frida Kahlo</span>
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://img2.freepng.es/20180430/oqw/kisspng-job-computer-icons-profession-5ae6a6e1d01463.1695692215250654418523.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Frida Kahlo</span>
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://img2.freepng.es/20180430/oqw/kisspng-job-computer-icons-profession-5ae6a6e1d01463.1695692215250654418523.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Frida Kahlo</span>
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://img2.freepng.es/20180430/oqw/kisspng-job-computer-icons-profession-5ae6a6e1d01463.1695692215250654418523.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Frida Kahlo</span>
          </div>
          
        </li>
      </ul>
    </div>
  );
}

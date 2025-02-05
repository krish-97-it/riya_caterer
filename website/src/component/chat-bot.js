import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/images/icons8-user-default-96.png';
import { HashLink } from 'react-router-hash-link';


export default function CustomChatBot({showChatBox, closeChatBox, openBookingModal, msgInputChange, sendUserMsgInput, msgInput, chat, doTask, lastMsg}){
    return(
        <div className='chatbot-expand-section' show-chatbox={showChatBox}>
            <div className="chatbot-wrap">
                <div className="container">
                    <div className="msg-header">
                        <div className="header-container">
                            <img src="https://img.perceptpixel.com/pykhlszs/dp_girl_four.webp" className="msgimg"/>
                            <div className="active">
                                <p className="mb-0 user-name">Riya</p>
                                {/* <button type="button" className="chat-bot-close" onClick={closeChatBox}>X</button> */}
                            <button type="button" className="chat-bot-close" onClick={closeChatBox}><i className='fa fa-chevron-down'></i></button> 
                            </div>
                        </div>
                    </div> 
                    <div className="chat-page">
                        <div className="msg-inbox">
                            <div className="chats">
                                <div className="autoscrollable-wrapper">
                                    <div className="autoscrollable-content">
                                        {
                                            chat.map((msg,index)=>{
                                                return(
                                                    (msg.isUser === true)?
                                                    <div className="outgoing-chats" key={index}>
                                                        {
                                                            (msg.lastMsg === 'user')?
                                                            <div className="outgoing-msg-inbox">
                                                                <div className="outgoing-msg">
                                                                    <p>{msg.msg_text}</p>
                                                                    {/* <span className="time">18:30 PM | July 24 </span> */}
                                                                </div>
                                                            </div>
                                                            :
                                                            <>
                                                                <div className="outgoing-chats-img">
                                                                    <img src={userIcon} alt='profile pic'/>
                                                                </div>
                                                                <div className="outgoing-msg-inbox">
                                                                    <div className="outgoing-msg">
                                                                        <p>{msg.msg_text}</p>
                                                                        {/* <span className="time">18:30 PM | July 24 </span> */}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                        
                                                    </div>
                                                    :
                                                    <div className="received-chats" key={index}>
                                                        {
                                                            (msg.lastMsg === 'bot')?
                                                            <div className="received-msg-inbox">
                                                                <div className="received-msg">
                                                                    <p>{msg.msg_text}</p>
                                                                    {
                                                                            (msg.lists.length > 0)?
                                                                            <div className="chat-msg-buttons">
                                                                                <ul>
                                                                                {
                                                                                    msg.lists.map((list,i)=>{
                                                                                        return(
                                                                                            <li>{list}</li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                                </ul>
                                                                            </div>
                                                                            :
                                                                            <></>
                                                                    }
                                                                    {
                                                                        <div className="chat-msg-buttons">
                                                                            {
                                                                                (msg.buttons.length > 0)?
                                                                                    msg.buttons.map((btn,i)=>{
                                                                                        return(
                                                                                            <button className="btn btn-primary" onClick={(e)=>{doTask(e,btn.value)}} key={i}>{btn.name}</button>
                                                                                        )
                                                                                    })
                                                                                :
                                                                                <></>
                                                                            }
                                                                            {
                                                                                (msg.links.length > 0)?    
                                                                                    msg.links.map((link,i)=>{
                                                                                        return(
                                                                                            <HashLink to={link.href} type="button" className="btn btn-primary" key={i}>
                                                                                                <span>
                                                                                                    {link.name}
                                                                                                </span>
                                                                                            </HashLink>
                                                                                        )
                                                                                    })  
                                                                                :
                                                                                <></>
                                                                            }
                                                                        </div>
                                                                        
                                                                    }
                                                                    {/* <span className="time">18:06 PM | July 24 </span> */}
                                                                </div>
                                                            </div>
                                                            :
                                                            <>
                                                                <div className="received-chats-img">
                                                                    <img src="https://img.perceptpixel.com/pykhlszs/dp_girl_four.webp" alt='profile pic'/>
                                                                </div>
                                                                <div className="received-msg-inbox">
                                                                    <div className="received-msg">
                                                                        <p>{msg.msg_text}</p>
                                                                        {
                                                                            (msg.lists.length > 0)?
                                                                            <div className="chat-msg-buttons">
                                                                                <ul>
                                                                                {
                                                                                    msg.lists.map((list,i)=>{
                                                                                        return(
                                                                                            <li>{list}</li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                                </ul>
                                                                            </div>
                                                                            :
                                                                            <></>
                                                                        }
                                                                        {
                                                                            <div className="chat-msg-buttons">
                                                                                {
                                                                                    (msg.buttons.length > 0)?
                                                                                        msg.buttons.map((btn,i)=>{
                                                                                            return(
                                                                                                <button className="btn btn-primary" onClick={(e)=>{doTask(e,btn.value)}} key={i}>{btn.name}</button>
                                                                                            )
                                                                                        })
                                                                                    :
                                                                                    <></>
                                                                                }
                                                                                {
                                                                                    (msg.links.length > 0)?    
                                                                                        msg.links.map((link,i)=>{
                                                                                            return(
                                                                                                <HashLink to={link.href} type="button" className="btn btn-primary" key={i}>
                                                                                                    <span>
                                                                                                        {link.name}
                                                                                                    </span>
                                                                                                </HashLink>
                                                                                            )
                                                                                        })  
                                                                                    :
                                                                                    <></>
                                                                                }
                                                                            </div>
                                                                        }
                                                                        {/* <span className="time">18:06 PM | July 24 </span> */}
                                                                    </div>
                                                                </div>
                                                            </>

                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="msg-bottom">    
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Write a message..." onChange={msgInputChange} value={msgInput}/>
                                    <button className='btn' onClick={sendUserMsgInput}><i className="fa fa-send-o" style={{fontSize:"22px"}}></i></button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
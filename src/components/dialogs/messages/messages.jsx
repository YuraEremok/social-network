import React from 'react';
import Message from "./message";


const Messages = ({dialogs}) => {
     // let messages = props.dialogs.messagesTexts.map(el => {
     //
     //    return <Message dialogs ={props.dialogs} text ={el.text} name ={el.name} id ={el.id} url={el.imageUrl}/>
     // });
     return  <Message dialogs ={dialogs} />







}

export default Messages;



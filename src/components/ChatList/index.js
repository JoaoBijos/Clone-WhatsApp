import React from 'react';
import './style.css';

export default () => {
  return(
    <div className='chatListItem'>
      <img className='chatListItem' src='https://www.w3schools.com/howto/img_avatar2.png' alt=''/>
      <div className='chatListItem--lines'>
        <div className='chatListsItem-line'>
          <div className='chatListItem--name'>João Pedro</div>
          <div className='chatListItem--date'>19:00h</div>
        </div>
        <div className='chatListsItem-line'>
          <div className='chatListItem--lastMsg'>
            <p>Eai, só o ouro?</p>
          </div>
        </div>
      </div>
    </div> 
  )
}
import { useState } from 'react';
import axios from 'axios';

import logo from 'images/logo.png';
import answer from 'images/answer.png';
import css from './UserCard.module.css';



export const UserCard = ({ user: { user, id, avatar, followers, tweets } }) => {
  const [follower, setFollower] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`isFollowing${id}`))
  );

  const following = async () => {
    const changeFollower = isFollowing ? follower - 1 : follower + 1;
    try {
      await axios.put(
        `https://6454d767f803f3457632bc22.mockapi.io/usercard/${id}`,
        { followers: changeFollower }
      );
      setFollower(changeFollower);
      localStorage.setItem(`isFollowing${id}`, JSON.stringify(!isFollowing));
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.log(error);
    
    } 
  };

  return (
    <li key={id} className={css.container}>
      <img src={logo} alt="logo" className={css.logo} />
      
      <img src={answer} alt="" className={css.answer} />
      <div className={css.avatarWrapper}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={css.stick}></div>
      <div className={css.userWrapper}>
        <p className={css.title}>{user} </p>
        <p className={css.title}>{tweets} TWEETS</p>
        <p className={css.title}>
          {follower.toLocaleString('en-US')} FOLLOWERS
        </p>
        {/* {!isFollowing ? (
        <button type="button" className={css.followBtn} onClick={following}>
            follow
          </button>
        ) : (
          <button
            type="button"
            className={css.followBtnActive}
            onClick={following}
          >
            following
          </button>
        )} */}

        <button
          onClick={following}
          className={!isFollowing ? css.followBtn : css.followBtnActive}
        >
          {!isFollowing && <>follow</>}
          {isFollowing && <>following</>}
        </button>
      </div>
    </li>
  );
};

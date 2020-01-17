import React, { useState, useEffect } from 'react';
import api from './utils/api';
import styled from 'styled-components';

const Friends = () => {

  const [friends, setFriends] = useState();

  useEffect(() => {
    api().get('/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">
      { friends
        ?
        <>
          <h1>Friends</h1>
          <FriendsTable>
            <thead>
              <tr>
                <FriendsTh>Name</FriendsTh>
                <FriendsTh>Age</FriendsTh>
                <FriendsTh>Email</FriendsTh>
              </tr>
            </thead>
            <tbody>
            {friends && friends.map(friend => {
              return <tr key={friend.name}><FriendsTd>{friend.name}</FriendsTd><FriendsTd>{friend.age}</FriendsTd><FriendsTd>{friend.email}</FriendsTd></tr>
            })}
            </tbody>
          </FriendsTable>
        </>
        : <div>Loading friends...</div>
      }
    </div>
  );
}

const FriendsTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`

const FriendsTh = styled.th`
  text-align: left;
  padding: 20px 16px;
`

const FriendsTd = styled.td`
  border: 1px solid black;
  padding: 16px;
`

export default Friends;

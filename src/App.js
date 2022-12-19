import React from "react";
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import Transactions from './components/Transactions';


const App = ()=> {

    return (
<div className='App'>
    <Profile user = {user} />
    <Statistics stats = {data} />
    <FriendList friends = {friends}/>
    <Transactions transactions = {transactions}/> 
</div>
    );
};

export default App;
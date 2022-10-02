import React from "react";

import Profile from './components/Profile';

const App = ()=> {

    const user = {
        "username": "Jacques Gluke",
        "tag": "jgluke",
        "location": "Ocho Rios, Jamaica",
        "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
        "stats": {
            "followers": 5603,
            "views": 4827,
            "likes": 1308
        }
    }


    return (
<div className='App'>
    <Profile user = {user}/>

</div>
    );
};

export default App;
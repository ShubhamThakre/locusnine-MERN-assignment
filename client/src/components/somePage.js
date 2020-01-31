import React from 'react';


class SomePage extends React.Component{
    render(){
        return(
            <div>
                <h1>About</h1>
                <p>Hello All, Welcome to the simple MERN stack appliation. My name is Shubham Thakre, I created this small appliation.</p>
                <p>This is simple appliation demonstrate the adding set of users and perform some CURD operation on the same. 
                Technologies included are React JS, Node JS, Express JS and Mongo DB with some UI libraries like Ant Design.</p>
                <p>The appliation can show the user list on User List tab. The add icon button can add the user of your choice.
                 It will save the users in Mongo Db. The key shoud be identical than another key, else the user will not save in database. 
                 Only this validation is provided, period. We can do much more thins on this but due to limited time I have created this much. 
                 May be soon in future I'll work on it. </p>
                <p>I create this appliation, for learning purpose and as a assignment too.</p>
                <p>If you like my work please connect me on @gmail- shhubhamthackery@gmail.com</p>
                <p>Thanks!</p>
            </div>
        );
    }
}

export default SomePage;
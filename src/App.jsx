import React, { useState } from 'react';

const App = () => {
    const [username, setUsername] = setUsername("");
    const [message, setMessage] = setMessage("");
    const [chirps, setChirps] = useState([
        {
            username: "Nick",
            message: "Hello There my Friend"
        },
        {
            username: "Garrett",
            message: "Hello There my Friend"
        },
        {
            username: "Joseph",
            message: "Hello There my Friend"
        }

    ]);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
    const handleClick = () => {
        const newChirp = {
            username: username,
            message: message
        };
        setChirps([...chirps, newChirp])

    };

    return (
        <>
            <h1>Chirper</h1>
            <label htmlFor="username-input">Who you?</label>
            <input type="text" className="username-input" value={username} onChange={handleUsernameChange} />
            <label htmlFor="message-input">What Say?</label>
            <textarea name="message-input" cols="30" rows="10" value={message} onChange={handleMessageChange}></textarea>
            <button>Submit</button>

            <div id="timeline-container">
                {chirps.map(chirps, index => (
                    <>
                        <div key={index}>
                            <div>{chirps.username}</div>
                            <p>{chirps.message}</p>
                        </div>
                    </>

                ))};
            </div>
        </>
    )

};



export default App
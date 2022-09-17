import './Content.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

function Content() {
    const url = "http://localhost:3300/lib";
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json()).then(json => {
                setNotes(json)
            })
            .catch(e => {
                console.log("error:", e.message)
            })
    }, []);
    return <>
        <div className="content">
            <h1>Here are your Notes</h1>
            <div className="cont">
                {notes.map(item => {
                    return (
                        <p>Content: {item.content}</p>
                    )
                })
                }

                <Link to="/"> Back to Library </Link>
            </div>
        </div>
    </>

}

export default Content;
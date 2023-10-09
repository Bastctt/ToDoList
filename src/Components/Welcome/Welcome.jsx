import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import '../animations.css';

function Welcome() {
    const navigate = useNavigate();

    const handleClick = () => {
        document.querySelector('.title').classList.add('slide-out-left');
        setTimeout(() => {
            navigate('/General');
        }, 500); 
    };

    return (
        <div className="title">
            <h1 className="welcome">Welcome to ToDoList.App !</h1>
            <button className="start" onClick={handleClick}>
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Start using</span>
            </button>
        </div>
    );
}

export default Welcome;


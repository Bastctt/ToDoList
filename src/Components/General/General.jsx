import React, { useState, useEffect } from 'react';
import './General.css';
import List from '../List/List';
import { useNavigate } from 'react-router-dom';
import '../animations.css';
import { v4 as uuidv4 } from 'uuid';

function General() {
    const navigate = useNavigate();
    const [isArchiveClicked, setIsArchiveClicked] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleClick = () => {
        setIsArchiveClicked(true);
        document.querySelector('.buttonAdd').classList.add('slide-out-left');
        document.querySelector('.deleteButton').classList.add('slide-out-left');
        document.querySelector('.archiveButton').classList.add('slide-out-left');
    
        setTimeout(() => {
            navigate('/Archive');
        }, 500);
    };

    const [lists, setLists] = useState([]);
    const [listNumber, setListNumber] = useState(1);

    const addList = () => {
        const newList = {
            id: uuidv4(),
            number: listNumber,
            listItems: []
        };
        setLists(prevLists => [...prevLists, newList]);
        setListNumber(listNumber + 1);
        localStorage.setItem(`listData-${newList.id}`, JSON.stringify(newList)); // Assurez-vous de stocker la nouvelle liste correctement
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('listData')) || {};
        const listsData = Object.values(storedData);
        if (listsData.length > 0) {
            setLists(listsData);
        }
    }, []);

    const deleteList = (id) => {
        setLists(lists.filter((list) => list.id !== id));
        if (lists.length === 1) {
            setListNumber(1);
        }
        // Supprimez également la liste correspondante du localStorage
        localStorage.removeItem(`listData-${id}`);
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        setLists([]);
        setListNumber(1);
        setNotification('Lists deleted successfully !');
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    return (
        <div>
            <button className="buttonAdd buttonContainer" onClick={addList}>
                <span className="icon">
                    <i className="fa-solid fa-plus" alt="Add Icon"></i>
                </span>
            </button>

            {lists.map((list) => (
                <List
                    key={list.id}
                    id={list.id}
                    listNumber={list.number}
                    onClose={deleteList}
                    isArchiveClicked={isArchiveClicked}
                />
            ))}

            <div className="buttonContainer">
                <button className="deleteButton" onClick={clearLocalStorage}>
                    <span className="iconD">
                        <i className="fa-solid fa-trash"></i>
                    </span>
                </button>
                <button className="archiveButton" onClick={handleClick}>
                    <span>
                        <i className="fa-solid fa-box-archive"></i>
                    </span>
                </button>
            </div>
            {notification && <div className="notification">{notification}</div>}
        </div>
    );
}

export default General;



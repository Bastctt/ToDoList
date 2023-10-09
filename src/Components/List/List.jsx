import React, { useState, useEffect, useRef } from 'react';
import './List.css';

function List(props) {
    const { id, onClose, listNumber, isArchiveClicked } = props;
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [inputText, setInputText] = useState('');
    const [listItems, setListItems] = useState([]);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [listTitle, setListTitle] = useState(`List #${listNumber}`);
    const listRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const listWidth = listRef.current.offsetWidth;
        const listHeight = listRef.current.offsetHeight;

        const initialX = (windowWidth - listWidth) / 2;
        const initialY = (windowHeight - listHeight) / 2;

        setPosition({ x: initialX, y: initialY });
    }, [listRef]);

    useEffect(() => {
        const storedListData = JSON.parse(localStorage.getItem(`listData-${id}`)) || { listItems: [] };
        setListItems(storedListData.listItems);
    }, [id]);
    

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            const updatedListItems = [...listItems, inputText];
            setListItems(updatedListItems);
    
            // Mettez à jour la liste spécifique dans le localStorage
            localStorage.setItem(`listData-${id}`, JSON.stringify({
                id: id,
                number: listNumber,
                listTitle: listTitle,
                listItems: updatedListItems
            }));
    
            setInputText('');
        }
    };
    
    const handleItemClick = (index) => {
        const updatedListItems = [...listItems];
        updatedListItems[index] = <s>{updatedListItems[index]}</s>;
        setListItems(updatedListItems);
    };

    const handleTitleClick = () => {
        setIsEditingTitle(true);
    };

    const handleTitleChange = (e) => {
        setListTitle(e.target.value);
    };

    const handleTitleBlur = () => {
        setIsEditingTitle(false);
    };

    return (
        <div
            key={id}
            ref={listRef}
            className={`list-container ${isArchiveClicked ? 'slide-out-left' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                position: 'absolute'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <button className="closeButton" onClick={() => onClose(id)}>
                <span>
                    <i className="fa-solid fa-xmark"></i>
                </span>
            </button>
            {isEditingTitle ? (
                <input className="modifTitle"
                    type="text"
                    value={listTitle}
                    onChange={handleTitleChange}
                    onBlur={handleTitleBlur}
                    autoFocus
                />
            ) : (
                <h2 className="listTitle" onClick={handleTitleClick}>{listTitle}</h2>
            )}
            <form className="list-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    required
                    placeholder="Enter a task" 
                    value={inputText} 
                    onChange={handleInputChange} 
                />
                <button className="submitButton" type="submit">OK</button>
            </form>
            <ul className="list-items">
                {listItems.map((item, index) => (
                    <li className="item" key={index} onClick={() => handleItemClick(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;



import React, { useState, useEffect } from 'react';
import './Archive.css';

function Archive() {
    const [archiveData, setArchiveData] = useState([]);

    useEffect(() => {
        const storedData = Object.keys(localStorage)
            .filter(key => key.startsWith('listData-'))
            .map(key => JSON.parse(localStorage.getItem(key)));
        console.log(storedData); // Vérifiez les données extraites du localStorage
        setArchiveData(storedData);
    }, []);

    return (
        <div>
            <h2 className="archives">Archived Lists</h2>
            <ul className="listes">
                {archiveData.map(item => (
                    <li key={item.id}>
                        <strong>List # {item.number}</strong>
                        <ul>
                            {item.listItems.map((task, index) => (
                                <li key={index}>
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Archive;










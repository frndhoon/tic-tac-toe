import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>


    if (isEditing) {
        playerName = <input type="text" required />;

    }

    return (
        <li>
            <span className="player">
                {playerName}
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
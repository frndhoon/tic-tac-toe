import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);


    return (
        <li>
            <span className="player">
                {!isEditing && <span className="player-name">{name}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </li>
    )
}
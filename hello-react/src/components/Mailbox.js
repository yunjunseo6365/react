import React from "react";

function Mailbox({unreadMessage}) {
    return (
        <div>
            <h1>메시지의 내용은</h1>
            {unreadMessage.length > 0 && 
                <h2>{unreadMessage}</h2>
            } 
        </div>
    );
}

export default Mailbox;
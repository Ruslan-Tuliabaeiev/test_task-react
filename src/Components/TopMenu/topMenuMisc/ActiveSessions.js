import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const ActiveSessions = () => {
    const [activeSessions, setActiveSessions] = useState(0);

    useEffect(() => {
        socket.on('activeSessions', (count) => {
            setActiveSessions(count);
        });

        return () => {
            socket.off('activeSessions');
        };
    }, []);

    return (
        <div>
            <p>Active Sessions: {activeSessions}</p>
        </div>
    );
};

export default ActiveSessions;

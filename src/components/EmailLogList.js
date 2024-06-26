import React, { useEffect, useState } from 'react';
import axios from 'axios';


const EmailLogList = () => {
    const [logs, setLogs] = useState([]);

    // useEffect(() => {
    //     fetch('/api/emails')
    //         .then(response => response.json())
    //         .then(data => setLogs(data));
    // }, []);

    useEffect(() => {
        const fetchEmailLogs = async () => {
            const response = await axios.get('http://localhost:8080/api/emails');
            setLogs(response.data);
        };

        fetchEmailLogs();
    }, []);

    return (
        <div>
            <h2>Email Log</h2>
            <ul>
                {logs.map(log => (
                    <li key={log.id}>{log.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmailLogList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const EmployList = () => {
    const [employees, setEmployees] = useState([]);

    // useEffect(() => {
    //     fetch('/api/employees')
    //         .then(response => response.json())
    //         .then(data => setEmployees(data));
    // }, []);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await axios.get('http://localhost:8080/api/employees');
            setEmployees(response.data);
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.email}>{employee.name} - {employee.designation} - {employee.ctc} - {employee.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployList;

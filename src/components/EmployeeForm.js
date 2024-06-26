import React, { useState } from 'react';
import axios from 'axios'; 

const EmployeeForm = ({ onSave }) => {
    const [employee, setEmployee] = useState({ name: '', designation: '', ctc: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    }; 

    // const handleSubmit = (e)=> {
    //     e.preventDefault();
    //     onSave(employee);
    //     setEmployee({ name: '', designation: '', ctc: '', email: '' });
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/employees', employee);
            setEmployee({ name: '', designation: '', ctc: '', email: '' });
        } catch (error) {
            console.error("There was an error creating the employee!", error);
        }
    };

    return (
        <div>
        <h2>Employee</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" required />
            <input type="number" name="ctc" value={employee.ctc} onChange={handleChange} placeholder="CTC" required />
            <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Save Employee</button>
        </form>
        </div>
    );
};

export default EmployeeForm;

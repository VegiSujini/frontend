import React, { useState, useEffect } from 'react';
import axios from 'axios';


const EmailForm = ({ onSend }) => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);

    // useEffect(() => {
    //     fetch('/api/vendors')
    //         .then(response => response.json())
    //         .then(data => setVendors(data));
    // }, []);

    useEffect(() => {
        const fetchVendors = async () => {
            const response = await axios.get('http://localhost:8080/api/vendors');
            setVendors(response.data);
        };

        fetchVendors();
    }, []);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedVendors([...selectedVendors, value]);
        } else {
            setSelectedVendors(selectedVendors.filter(email => email !== value));
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSend(selectedVendors);
    //     setSelectedVendors([]);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/emails/send', selectedVendors);
            setSelectedVendors([]);
        } catch (error) {
            console.error("There was an error sending the emails!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Select Vendors to Send Email</h3>
            {vendors.map(vendor => (
                <div key={vendor.email}>
                     <label>
                    <input
                        type="checkbox"
                        value={vendor.email}
                        onChange={handleChange}
                    />
                    {vendor.name} ({vendor.email})
                    </label>
                </div>
            ))}
            <button type="submit">Send Emails</button>
        </form>
    );
};

export default EmailForm;

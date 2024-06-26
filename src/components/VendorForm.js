import React, { useState } from 'react';
import axios from 'axios';


const VendorForm = ({ onSave }) => {
    const [vendor, setVendor] = useState({ name: '', email: '', upi: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendor({ ...vendor, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSave(vendor);
    //     setVendor({ name: '', email: '', upi: '' });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/vendors', vendor);
            setVendor({ name: '', email: '', upi: '' });
        } catch (error) {
            console.error("There was an error creating the vendor!", error);
        }
    };

    return (
        <div>
        <h2>Vendor</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={vendor.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={vendor.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="upi" value={vendor.upi} onChange={handleChange} placeholder="UPI" required />
            <button type="submit">Save Vendor</button>
        </form>
        </div>
    );
};

export default VendorForm;

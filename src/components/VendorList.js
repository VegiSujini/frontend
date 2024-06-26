import React, { useEffect, useState } from 'react';
import axios from 'axios';



const VendorList = () => {
    const [vendors, setVendors] = useState([]);

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

    return (
        <div>
            <h2>Vendor List</h2>
            <ul>
                {vendors.map(vendor => (
                    <li key={vendor.email}>{vendor.name} - {vendor.email} - {vendor.upi}</li>
                ))}
            </ul>
        </div>
    );
};

export default VendorList;

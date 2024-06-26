import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployList from './components/EmployList';
import VendorForm from './components/VendorForm';
import VendorList from './components/VendorList';
import EmailForm from './components/EmailForm';
import EmailLogList from './components/EmailLogList';

const App = () => {

    const saveEmployee = (employee) => {
        fetch('/api/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        });
    };

    const saveVendor = (vendor) => {
        fetch('/api/vendors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vendor)
        });
    };

    const sendEmails = (vendorEmails) => {
        fetch('/api/emails/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vendorEmails)
        });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <EmployeeForm onSave={saveEmployee} />
            <EmployList />
            <VendorForm onSave={saveVendor} />
            <VendorList />
            <EmailForm onSend={sendEmails} />
            <EmailLogList />
        </div>
    );
};

export default App;

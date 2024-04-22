import React from 'react';
import './CustomerDetail.css'; // Import the custom CSS file

function CustomerDetail() {
  // Dummy customer data
  const customers = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', phone: '555-123-4567', email: 'alice@example.com' },
    { id: 4, name: 'Bob Williams', phone: '555-987-6543', email: 'bob@example.com' },
    { id: 5, name: 'Ella Davis', phone: '555-789-1234', email: 'ella@example.com' },
    { id: 6, name: 'Mike Brown', phone: '555-321-9876', email: 'mike@example.com' },
  ];

  return (
    <div className="container">
      <h1>Customer Detail</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <th scope="row">{customer.id}</th>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerDetail;

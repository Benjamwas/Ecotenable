import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
const socket = io('http://localhost:5001');

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/booking');
        const data = Array.isArray(res.data) ? res.data : [];
        setBookings(data);
        setFilteredData(data);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
        setBookings([]);
        setFilteredData([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    socket.on('bookingCreated', (newBooking) => {
      setBookings(prev => [newBooking, ...prev]);
      setFilteredData(prev => [newBooking, ...prev]);
    });
    return () => {
      socket.off('bookingCreated');
    };
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = bookings.filter(emp =>
      emp.name.toLowerCase().includes(term) || String(emp.id).includes(term)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, bookings]);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Bookings & Appointments</h2>
      <input
        type="text"
        placeholder="Search by Name "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-4 py-2 w-full max-w-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b">
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Service</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((emp) => (
            <tr key={emp.id} className="border-b text-sm">
              <td className="py-2">{emp.name}</td>
              <td className="py-2">{emp.email}</td>
              <td className="py-2">{emp.service}</td>
              <td className="py-2">{emp.booking_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end gap-2 text-sm">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookingsList;
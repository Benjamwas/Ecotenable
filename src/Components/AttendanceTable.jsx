import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceList = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('/api/attendance');
      const data = Array.isArray(res.data) ? res.data : [];
      setAttendanceData(data);
      setFilteredData(data);
    } catch (err) {
      console.error('Failed to fetch attendance:', err);
      setAttendanceData([]);
      setFilteredData([]);
    }
  };

  fetchData();
}, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = attendanceData.filter(emp =>
      emp.name.toLowerCase().includes(term) || emp.id.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, attendanceData]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Time': return 'text-green-600';
      case 'Late': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Bookings & Appointments </h2>

      <input
        type="text"
        placeholder="Search by name or ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-4 py-2 w-full max-w-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b">
            <th className="py-2">Name</th>
            <th className="py-2">E-mail</th>
            <th className="py-2">Service</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((emp) => (
            <tr key={emp.id} className="border-b text-sm">
              <td className="py-2 flex items-center gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}&background=0D8ABC&color=fff`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium">{emp.name}</p>
                  <p className="text-xs text-gray-500">{emp.id}</p>
                </div>
              </td>
              <td className="py-2">{emp.clockIn}</td>
              <td className="py-2">{emp.clockOut}</td>
              <td className={`py-2 font-semibold ${getStatusColor(emp.status)}`}>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
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

export default AttendanceList; 

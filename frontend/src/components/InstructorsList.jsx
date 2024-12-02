import React, { useEffect, useState } from "react";
import API from "../utils/api";

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const { data } = await API.get("/api/instructors");
        setInstructors(data);
      } catch (err) {
        setMessage("Error fetching instructors");
        console.error("Error fetching instructors", err);
      }
    };
    fetchInstructors();
  }, []);

  const handleApproveInstructor = async (instructorId) => {
    try {
      await API.patch(`/api/instructors/${instructorId}`, {
        status: "approved",
      });
      setInstructors(
        instructors.map((instructor) =>
          instructor._id === instructorId
            ? { ...instructor, status: "approved" }
            : instructor
        )
      );
    } catch (err) {
      setMessage("Error approving instructor");
      console.error("Error approving instructor", err);
    }
  };

  const handleRemoveInstructor = async (instructorId) => {
    try {
      await API.delete(`/api/instructors/${instructorId}`);
      setInstructors(
        instructors.filter((instructor) => instructor._id !== instructorId)
      );
    } catch (err) {
      setMessage("Error removing instructor");
      console.error("Error removing instructor", err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Instructors</h1>
      {message && <p className="text-red-500">{message}</p>}
      <table className="min-w-full bg-white rounded shadow-md">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Email</th>
            <th className="border-b p-2">Status</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor._id}>
              <td className="border-b p-2">{instructor.name}</td>
              <td className="border-b p-2">{instructor.email}</td>
              <td className="border-b p-2">{instructor.status}</td>
              <td className="border-b p-2">
                <button
                  onClick={() => handleApproveInstructor(instructor._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleRemoveInstructor(instructor._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded ml-2"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstructorsList;

import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import "./styles/admin.css";

const AdminPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = complaints.filter((_, i) => i !== index);
    localStorage.setItem("complaints", JSON.stringify(updated));
    setComplaints(updated);
  };

  const toggleStatus = (index) => {
    const updated = [...complaints];
    updated[index].status =
      updated[index].status === "Resolved" ? "Pending" : "Resolved";
    localStorage.setItem("complaints", JSON.stringify(updated));
    setComplaints(updated);
  };

  const filteredComplaints = complaints.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || c.status === filterStatus;
    const matchesType = filterType === "" || c.type === filterType; // 🔹 Added this line
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="admin_page">
      <Navbar />

      <h1 className="heading">Admin Dashboard</h1>

      <div className="status_filter">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className=" "
        >
          <option value="all">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {filteredComplaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <ol className="complaint_list">
          {filteredComplaints.map((c, index) => (
            <li key={index} className="list">
              <h2 className=" ">{c.title}</h2>
              <p>
                <b>Type:</b> {c.type}
              </p>
              <p>{c.description}</p>

              <p>
                <b>Status:</b>{" "}
                <span
                  className={c.status === "Resolved" ? " status1" : "status2"}
                >
                  {c.status}
                </span>
              </p>
              <p><b>Submitted:</b> {c.date}</p>
              {c.updatedAt && (
                <p>
                  <b>Last Updated:</b> {c.updatedAt}
                </p>
              )}

              <div className="button_s">
                <button
                  onClick={() => toggleStatus(index)}
                  className="button_toggle"
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="button_delete"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default AdminPage;

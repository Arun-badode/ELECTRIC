import React from "react";
import { useState } from "react";

const Users = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 8;

    // Sample user data
    const users = [
        {
            id: 1,
            name: "John Smith",
            email: "john.smith@example.com",
            role: "Admin",
            status: "Active",
            lastLogin: "2023-05-15 09:30",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            email: "sarah.j@example.com",
            role: "Editor",
            status: "Active",
            lastLogin: "2023-05-14 14:45",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 3,
            name: "Michael Brown",
            email: "michael.b@example.com",
            role: "Viewer",
            status: "Inactive",
            lastLogin: "2023-05-10 11:20",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        },
        {
            id: 4,
            name: "Emily Davis",
            email: "emily.d@example.com",
            role: "Editor",
            status: "Active",
            lastLogin: "2023-05-15 08:15",
            avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        },
        {
            id: 5,
            name: "Robert Wilson",
            email: "robert.w@example.com",
            role: "Viewer",
            status: "Active",
            lastLogin: "2023-05-13 16:30",
            avatar: "https://randomuser.me/api/portraits/men/19.jpg",
        },
        {
            id: 6,
            name: "Jennifer Lee",
            email: "jennifer.l@example.com",
            role: "Admin",
            status: "Active",
            lastLogin: "2023-05-15 10:10",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            id: 7,
            name: "David Miller",
            email: "david.m@example.com",
            role: "Viewer",
            status: "Inactive",
            lastLogin: "2023-05-08 13:25",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
            id: 8,
            name: "Lisa Taylor",
            email: "lisa.t@example.com",
            role: "Editor",
            status: "Active",
            lastLogin: "2023-05-14 17:50",
            avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        {
            id: 9,
            name: "James Anderson",
            email: "james.a@example.com",
            role: "Viewer",
            status: "Active",
            lastLogin: "2023-05-12 12:15",
            avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        },
        {
            id: 10,
            name: "Patricia White",
            email: "patricia.w@example.com",
            role: "Editor",
            status: "Inactive",
            lastLogin: "2023-05-09 10:40",
            avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        },
    ];

    // Filter users based on search term
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-3">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="">
                        <div className="">
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                                <div className="mb-3 mb-md-0">
                                    <h2 className="h4 fw-bold mb-1">User Management</h2>
                                    <p className="text-muted mb-0">
                                        Manage all registered users in the system
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <button className="btn btn-primary me-2">
                                        <i className="bi bi-plus-circle me-2"></i>Add New User
                                    </button>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-outline-secondary dropdown-toggle"
                                            type="button"
                                            id="exportDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-download me-2"></i>Export
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="exportDropdown">
                                            <li>
                                                <button className="dropdown-item">CSV</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">Excel</button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">PDF</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="input-group">
                                        <span className="input-group-text bg-white">
                                            <i className="bi bi-search"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search users..."
                                            value={searchTerm}
                                            onChange={(e) => {
                                                setSearchTerm(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex justify-content-md-end">
                                        <div className="dropdown me-2">
                                            <button
                                                className="btn btn-outline-secondary dropdown-toggle"
                                                type="button"
                                                id="filterDropdown"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="bi bi-funnel me-2"></i>Filter
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                                                <li>
                                                    <button className="dropdown-item">All Users</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Active</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Inactive</button>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Admins</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Editors</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Viewers</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-outline-secondary dropdown-toggle"
                                                type="button"
                                                id="sortDropdown"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="bi bi-arrow-down-up me-2"></i>Sort
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                                                <li>
                                                    <button className="dropdown-item">Name (A-Z)</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Name (Z-A)</button>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Recent Activity</button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item">Oldest Activity</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive bg-white">
                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" style={{ width: "5%" }}></th>
                                            <th scope="col" style={{ width: "25%" }}>
                                                User
                                            </th>
                                            <th scope="col" style={{ width: "25%" }}>
                                                Email
                                            </th>
                                            <th scope="col" style={{ width: "15%" }}>
                                                Role
                                            </th>
                                            <th scope="col" style={{ width: "15%" }}>
                                                Status
                                            </th>
                                            <th scope="col" style={{ width: "15%" }}>
                                                Last Login
                                            </th>
                                            <th scope="col" style={{ width: "10%" }}>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentUsers.length > 0 ? (
                                            currentUsers.map((user) => (
                                                <tr key={user.id}>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id={`user-${user.id}`}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src={user.avatar}
                                                                className="rounded-circle me-3"
                                                                width="40"
                                                                height="40"
                                                                alt={user.name}
                                                            />
                                                            <div>
                                                                <h6 className="mb-0">{user.name}</h6>
                                                                <small className="text-muted">ID: {user.id}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href={`mailto:${user.email}`} className="text-primary">
                                                            {user.email}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span
                                                            className={`badge ${user.role === "Admin"
                                                                ? "bg-primary"
                                                                : user.role === "Editor"
                                                                    ? "bg-info"
                                                                    : "bg-secondary"
                                                                } text-white`}
                                                        >
                                                            {user.role}
                                                        </span>

                                                    </td>
                                                    <td>
                                                        <span
                                                            className={`badge rounded-pill ${user.status === "Active"
                                                                ? "bg-success bg-opacity-10 text-white"
                                                                : "bg-danger bg-opacity-10 text-white"
                                                                }`}
                                                        >
                                                            <i
                                                                className={`bi ${user.status === "Active"
                                                                    ? "bi-check-circle-fill"
                                                                    : "bi-x-circle-fill"
                                                                    } me-1`}
                                                            ></i>
                                                            {user.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">{user.lastLogin}</small>
                                                    </td>
                                                    <td>
                                                        <div className="dropdown">
                                                            <button
                                                                className="btn btn-sm btn-white p-2"
                                                                type="button"
                                                                id={`actionDropdown-${user.id}`}
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                                style={{ fontSize: "18px", color: "#000", lineHeight: "1" }}
                                                            >
                                                                &#x22EE; {/* Unicode vertical ellipsis */}
                                                            </button>


                                                            <ul
                                                                className="dropdown-menu dropdown-menu-end shadow-sm"
                                                                aria-labelledby={`actionDropdown-${user.id}`}
                                                            >
                                                                <li>
                                                                    <button className="dropdown-item d-flex align-items-center gap-2">
                                                                        <i className="bi bi-eye"></i> View
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item d-flex align-items-center gap-2">
                                                                        <i className="bi bi-pencil"></i> Edit
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item d-flex align-items-center gap-2">
                                                                        <i className="bi bi-person-check"></i> Reset Password
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item d-flex align-items-center gap-2 text-danger">
                                                                        <i className="bi bi-trash"></i> Delete
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="text-center py-4">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <i className="bi bi-people fs-1 text-muted mb-2"></i>
                                                        <h5 className="text-muted">No users found</h5>
                                                        <p className="text-muted mb-0">
                                                            Try adjusting your search or filter
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {filteredUsers.length > 0 && (
                                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
                                    <div className="mb-3 mb-md-0">
                                        <p className="mb-0 text-muted">
                                            Showing <span className="fw-bold">{indexOfFirstUser + 1}</span>{" "}
                                            to{" "}
                                            <span className="fw-bold">
                                                {Math.min(indexOfLastUser, filteredUsers.length)}
                                            </span>{" "}
                                            of <span className="fw-bold">{filteredUsers.length}</span>{" "}
                                            users
                                        </p>
                                    </div>
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination mb-0">
                                            <li
                                                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() => paginate(currentPage - 1)}
                                                >
                                                    Previous
                                                </button>
                                            </li>
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <li
                                                    key={i}
                                                    className={`page-item ${currentPage === i + 1 ? "active" : ""
                                                        }`}
                                                >
                                                    <button
                                                        className="page-link"
                                                        onClick={() => paginate(i + 1)}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                </li>
                                            ))}
                                            <li
                                                className={`page-item ${currentPage === totalPages ? "disabled" : ""
                                                    }`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() => paginate(currentPage + 1)}
                                                >
                                                    Next
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
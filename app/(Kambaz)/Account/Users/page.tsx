"use client";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import PeopleTable from "../../Courses/[cid]/People/Table";
import * as client from "../client";
import {FormControl} from "react-bootstrap";
import {FaPlus} from "react-icons/fa6";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Users() {
    const {uid} = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");

    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${users.length + 1}@neu.edu`,
            section: "S101",
            role: "STUDENT",
        });
        setUsers([...users, user]);
    };

    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await client.findUsersByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    const filterUsersByRole = async (role: string) => {
        console.log("Selected role:", role);  // Add this
        setRole(role);
        if (role) {
            const users = await client.findUsersByRole(role);
            console.log("Filtered users:", users);  // Add this
            setUsers(users);
        } else {
            console.log("Fetching all users");  // Add this
            fetchUsers();
        }
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, [uid]);

    return (
        <div>
            <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
                <FaPlus className="me-2"/>
                Users
            </button>
            <h3>Users</h3>
            <FormControl onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                         className="float-start w-25 me-2 wd-filter-by-name"/>
            <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
                    className="form-select float-start w-25 wd-select-role">
                <option value="">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
            </select>
            <PeopleTable users={users} fetchUsers={fetchUsers}/>
        </div>
    );
}

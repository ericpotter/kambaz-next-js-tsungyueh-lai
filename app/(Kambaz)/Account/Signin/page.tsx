"use client"
import Link from "next/link";
import { Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import { setCurrentUser } from "../reducer";

export default function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const dispatch = useDispatch();
    const router = useRouter();

    const signin = () => {
        const user = db.users.find(
            (u) =>
                u.username === credentials.username &&
                u.password === credentials.password
        );

        if (!user) {
            alert("Invalid username or password");
            return;
        }

        dispatch(setCurrentUser(user));
        router.push("/Dashboard");
    };

    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <FormControl
                id="wd-username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="username"
                className="mb-2"
            />
            <FormControl
                id="wd-password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="password"
                type="password"
                className="mb-2"
            />
            <Button
                onClick={signin}
                id="wd-signin-btn"
                className="btn btn-primary w-100 mb-2">
                Sign in
            </Button>
            <Link id="wd-signup-link" href="/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
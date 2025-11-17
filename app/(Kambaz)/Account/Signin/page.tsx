"use client"
import Link from "next/link";
import {Button, FormControl} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "../reducer";
import * as client from "../client";
import {redirect} from "next/dist/client/components/navigation";

export default function Signin() {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const dispatch = useDispatch();

    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        redirect("/Dashboard");
    };

    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <FormControl
                id="wd-username"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                placeholder="username"
                className="mb-2"
            />
            <FormControl
                id="wd-password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
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
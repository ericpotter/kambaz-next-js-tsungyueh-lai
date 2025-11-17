"use client";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {setCurrentUser} from "../reducer";
import {RootState} from "../../store";
import {Button, FormControl, FormSelect} from "react-bootstrap";
import * as client from "../client";
import {redirect} from "next/dist/client/components/navigation";

export default function Profile() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const router = useRouter();
    const {currentUser} = useSelector((state: RootState) => state.accountReducer);
    const updateProfile = async () => {
        const updatedProfile = await client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
    };

    useEffect(() => {
        if (!currentUser) {
            router.push("/Account/Signin");
        } else {
            setProfile(currentUser);
        }
    }, [currentUser, router]);

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        redirect("/Account/Signin");
    };

    if (!currentUser) {
        return null;
    }

    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <FormControl
                value={profile.username || ""}
                onChange={(e) => setProfile({...profile, username: e.target.value})}
                placeholder="username"
                className="wd-username mb-2"
            />
            <FormControl
                value={profile.password || ""}
                onChange={(e) => setProfile({...profile, password: e.target.value})}
                placeholder="password"
                type="password"
                className="wd-password mb-2"
            />
            <FormControl
                value={profile.firstName || ""}
                onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                placeholder="First Name"
                id="wd-firstname"
                className="mb-2"
            />
            <FormControl
                value={profile.lastName || ""}
                onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                placeholder="Last Name"
                id="wd-lastname"
                className="mb-2"
            />
            <FormControl
                value={profile.dob || ""}
                onChange={(e) => setProfile({...profile, dob: e.target.value})}
                type="date"
                id="wd-dob"
                className="mb-2"
            />
            <FormControl
                value={profile.email || ""}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                type="email"
                id="wd-email"
                className="mb-2"
            />
            <FormSelect
                value={profile.role || "STUDENT"}
                id="wd-role"
                className="mb-2"
                onChange={(e) => setProfile({...profile, role: e.target.value})}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </FormSelect>
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update</button>
            <Button
                onClick={signout}
                className="btn btn-danger w-100 mb-2">
                Sign out
            </Button>
        </div>
    );
}
"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import { Button, FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const router = useRouter();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);

    useEffect(() => {
        if (!currentUser) {
            router.push("/Account/Signin");
        } else {
            setProfile(currentUser);
        }
    }, [currentUser, router]);

    const signout = () => {
        dispatch(setCurrentUser(null));
        router.push("/Account/Signin");
    };

    if (!currentUser) {
        return null;
    }

    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <FormControl
                value={profile.username || ""}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                placeholder="username"
                className="wd-username mb-2"
            />
            <FormControl
                value={profile.password || ""}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                placeholder="password"
                type="password"
                className="wd-password mb-2"
            />
            <FormControl
                value={profile.firstName || ""}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                placeholder="First Name"
                id="wd-firstname"
                className="mb-2"
            />
            <FormControl
                value={profile.lastName || ""}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                placeholder="Last Name"
                id="wd-lastname"
                className="mb-2"
            />
            <FormControl
                value={profile.dob || ""}
                onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                type="date"
                id="wd-dob"
                className="mb-2"
            />
            <FormControl
                value={profile.email || ""}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                type="email"
                id="wd-email"
                className="mb-2"
            />
            <FormSelect
                value={profile.role || "STUDENT"}
                id="wd-role"
                className="mb-2"
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </FormSelect>
            <Button
                onClick={signout}
                className="btn btn-danger w-100 mb-2">
                Sign out
            </Button>
        </div>
    );
}
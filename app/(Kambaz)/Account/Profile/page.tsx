import Link from "next/link";
import {Form, FormControl, FormSelect} from "react-bootstrap";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <FormControl defaultValue="ericpotter" placeholder="username" className="wd-username mb-2"/>
            <FormControl defaultValue="123456"   placeholder="password" type="password" className="wd-password mb-2" />
            <FormControl defaultValue="Tsung-Yueh" placeholder="First Name" id="wd-firstname" className="mb-2"/>
            <FormControl defaultValue="Lai" placeholder="Last Name" id="wd-lastname" className="mb-2"/>
            <FormControl defaultValue="2002-01-13" type="date" id="wd-dob" className="mb-2"/>
            <FormControl defaultValue="lai.ts@northeastern.edu" type="email" id="wd-email" className="mb-2"/>
            <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2">
                <option value="USER">User</option>       <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
            </FormSelect>
            <Link href="Signin" className="btn btn-danger w-100 mb-2" > Sign out </Link>
        </div>
    );
}
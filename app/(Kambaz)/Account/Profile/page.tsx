import Link from "next/link";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input defaultValue="ericpotter" placeholder="username" className="wd-username"/><br/>
            <input defaultValue="123456"   placeholder="password" type="password"
                   className="wd-password" /><br/>
            <input defaultValue="Tsung-Yueh" placeholder="First Name" id="wd-firstname" /><br/>
            <input defaultValue="Lai" placeholder="Last Name" id="wd-lastname" /><br/>
            <input defaultValue="2002-01-13" type="date" id="wd-dob" /><br/>
            <input defaultValue="lai.ts@northeastern.edu" type="email" id="wd-email" /><br/>
            <select defaultValue="FACULTY" id="wd-role">
                <option value="USER">User</option>       <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
            </select><br/>
            <Link href="Signin" > Sign out </Link>
        </div>
    );
}
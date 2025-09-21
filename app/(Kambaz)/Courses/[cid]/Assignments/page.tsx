import Link from "next/link";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"
                   id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/123456/Assignments/123"
                          className="wd-assignment-link" >
                        A1 - GIT BASICS + REPOSITORY SETUP
                    </Link>
                    <span className="wd-assignment-content">
                        <p>Multiple Modules | <b>Not available until</b> September 19 at 12:00am | <br/> <b>Due</b> September 26 at 11:59pm | 100 pts</p>
                    </span>
                </li>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/123456/Assignments/234"
                          className="wd-assignment-link" >
                        A2 - BRANCHING + COLLABORATION
                    </Link>
                    <span className="wd-assignment-content">
                        <p>Multiple Modules | <b>Not available until</b> September 26 at 12:00am | <br/> <b>Due</b> October 3 at 11:59pm | 100 pts</p>
                    </span>
                </li>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/123456/Assignments/345"
                          className="wd-assignment-link" >
                        A3 - PULL REQUESTS + ISSUES
                    </Link>
                    <span className="wd-assignment-content">
                        <p>Multiple Modules | <b>Not available until</b> October 3 at 12:00am | <br/> <b>Due</b> October 10 at 11:59pm | 100 pts</p>
                    </span>
                </li>
            </ul>
        </div>
    );}

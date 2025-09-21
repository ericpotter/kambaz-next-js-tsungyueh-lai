export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h2>Assignment Name</h2></label>
            <input id="wd-name" defaultValue="A1 - GIT BASICS + REPOSITORY SETUP" /><br /><br />
            <textarea id="wd-description" rows={10} cols={50}>
                This assignment is available online. Submit a link to your GitHub repository containing your personal profile setup. The repository should include the following: Your complete README.md file with professional introduction, technical skills list, education background, and contact information. At least 5 meaningful commits showing progression of work. Professional profile picture uploaded. Repository must be public with proper naming conventions. Include .gitignore file appropriate for your project type. Add MIT license file. Create proper folder structure with src/, docs/, and assets/ directories. All commit messages must follow conventional commit format. Repository description should be concise and professional.
            </textarea>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" defaultValue={100} />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group" defaultValue="Assignment">
                                <option value="Assignment">Assignment</option>
                                <option value="Project">Project</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as" defaultValue="Percentage">
                                <option value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type" defaultValue="Online">
                                <option value="Online">Online</option>
                                <option value="File">File</option>
                            </select><br/>
                            <div id="wd-submission-type-online">
                                <label htmlFor="wd-submission-type-options">Online Entry Options</label><br/>
                                <input type="checkbox" name="check-online-entry" id="wd-text-entry"/>
                                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                                <input type="checkbox" name="check-online-entry" id="wd-website-url"/>
                                <label htmlFor="wd-website-url">Website URL</label><br/>

                                <input type="checkbox" name="check-online-entry" id="wd-media-recordings"/>
                                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                                <input type="checkbox" name="check-online-entry" id="wd-student-annotation"/>
                                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                                <input type="checkbox" name="check-online-entry" id="wd-file-upload"/>
                                <label htmlFor="wd-file-upload">File Uploads</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign">Assign</label>
                        </td>
                        <td>
                            <div id="wd-assign">
                                <label htmlFor="wd-assign-to">Assign To</label><br/>
                                <input id="wd-assign-t" defaultValue="Everyone" /><br/>

                                <label htmlFor="wd-due-date">Due</label><br/>
                                <input type="date" id="wd-due-date" defaultValue="2023-09-26" /><br/>

                                <table>
                                    <tbody>
                                        <tr>
                                            <td align="left" valign="top">
                                                <label htmlFor="wd-available-from">Available From</label><br/>
                                                <input type="date" id="wd-available-from" defaultValue="2023-09-19" /><br/>
                                            </td>
                                            <td >
                                                <label htmlFor="wd-available-until">Until</label><br/>
                                                <input type="date" id="wd-available-until" defaultValue="2023-10-03" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <hr/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top" colSpan={2}>
                            <button id="wd-cancel">Cancel</button>
                            <button id="wd-save">Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );}

export default function Modules() {
    return (
        <div>
            <div id="wd-module-buttons">
                <button>Collapse All</button>
                <button>View Progress</button>
                <select defaultValue="Publish All" id="wd-publish">
                    <option value="Publish All">Publish All</option>
                </select>
                <button>+ Module</button>
            </div>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">Getting Started</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">What is GitHub? Create account</li>
                                <li className="wd-content-item">Install Git, basic setup</li>
                                <li className="wd-content-item">Create first repository</li>
                                <li className="wd-content-item">Learn basic commands (add, commit, push)</li>
                                <li className="wd-content-item">Practice with simple project</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">Branching & Collaboration</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Create and switch branches</li>
                                <li className="wd-content-item">Merge branches, resolve conflicts</li>
                                <li className="wd-content-item">Pull requests basics</li>
                                <li className="wd-content-item">Issues and project management</li>
                                <li className="wd-content-item">Team collaboration exercise</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">Advanced Features</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Fork repositories, contribute to others</li>
                                <li className="wd-content-item">GitHub Pages for websites</li>
                                <li className="wd-content-item">GitHub Actions introduction</li>
                                <li className="wd-content-item">Advanced Git commands</li>
                                <li className="wd-content-item">Build complete project</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 4</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">Professional Use</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Security best practices</li>
                                <li className="wd-content-item">Code reviews and quality</li>
                                <li className="wd-content-item">Team workflows</li>
                                <li className="wd-content-item">Build professional profile</li>
                                <li className="wd-content-item">Final project presentation</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

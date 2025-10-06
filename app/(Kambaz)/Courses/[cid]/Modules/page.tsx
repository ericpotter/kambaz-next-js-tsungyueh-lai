import ModulesControls from "./ModulesControls";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> WHAT IS GITHUB? CREATE ACCOUNT <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> INSTALL GIT, BASIC SETUP <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> CREATE FIRST REPOSITORY <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LEARN BASIC COMMANDS (ADD, COMMIT, PUSH) <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> PRACTICE WITH SIMPLE PROJECT <LessonControlButtons />
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> CREATE AND SWITCH BRANCHES <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> MERGE BRANCHES, RESOLVE CONFLICTS <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> PULL REQUESTS BASICS <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> ISSUES AND PROJECT MANAGEMENT <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> TEAM COLLABORATION EXERCISE <LessonControlButtons />
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> FORK REPOSITORIES, CONTRIBUTE TO OTHERS <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> GITHUB PAGES FOR WEBSITES <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> GITHUB ACTIONS INTRODUCTION <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> ADVANCED GIT COMMANDS <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> BUILD COMPLETE PROJECT <LessonControlButtons />
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 4 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> SECURITY BEST PRACTICES <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> CODE REVIEWS AND QUALITY <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> TEAM WORKFLOWS <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> BUILD PROFESSIONAL PROFILE <LessonControlButtons />
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> FINAL PROJECT PRESENTATION <LessonControlButtons />
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

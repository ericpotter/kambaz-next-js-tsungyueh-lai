import Link from "next/link";
import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import AssignmentsControlButton from "./AssignmentsControlButtons";
import {MdAssignment} from "react-icons/md";
import ControlButtons from "./ControlButtons";
import AssignmentsControl from "./AssignmentsControl";


export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentsControl /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">

                    <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
                        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentsControlButton />
                    </div>

                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <Container fluid className="wd-assignment-container p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <BsGripVertical className="me-2 fs-3" />
                                    </Col>
                                    <Col xs="auto">
                                        <MdAssignment className="me-2 fs-3 text-success" />
                                    </Col>
                                    <Col>
                                        <Link href="/Courses/123456/Assignments/123" className="wd-assignment-link text-decoration-none text-dark">
                                            <div className="wd-assignment-title fw-bold">A1 - GIT BASICS + REPOSITORY SETUP</div>
                                        </Link>
                                        <Row className="wd-assignment-row small text-muted">
                                            <Col xs={12} md="auto" className="wd-assignment-col text-danger">
                                                Multiple Modules
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                <b>Not available until</b> September 19 at 12:00am
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                <b>Due</b> September 26 at 11:59pm
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                100 pts
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs="auto">
                                        <ControlButtons />
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <Container fluid className="wd-assignment-container p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <BsGripVertical className="me-2 fs-3" />
                                    </Col>
                                    <Col xs="auto">
                                        <MdAssignment className="me-2 fs-3 text-success" />
                                    </Col>
                                    <Col>
                                        <Link href="/Courses/123456/Assignments/234" className="wd-assignment-link text-decoration-none text-dark">
                                            <div className="wd-assignment-title fw-bold">A2 - BRANCHING + COLLABORATION</div>
                                        </Link>
                                        <Row className="wd-assignment-row small text-muted">
                                            <Col xs={12} md="auto" className="wd-assignment-col text-danger">
                                                Multiple Modules
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                <b>Not available until</b> September 26 at 12:00am
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                <b>Due</b> October 3 at 11:59pm
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                100 pts
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs="auto">
                                        <ControlButtons />
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <Container fluid className="wd-assignment-container p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <BsGripVertical className="me-2 fs-3" />
                                    </Col>
                                    <Col xs="auto">
                                        <MdAssignment className="me-2 fs-3 text-success" />
                                    </Col>
                                    <Col>
                                        <Link href="/Courses/123456/Assignments/345" className="wd-assignment-link text-decoration-none text-dark">
                                            <div className="wd-assignment-title fw-bold">A3 - PULL REQUESTS + ISSUES</div>
                                        </Link>
                                        <Row className="wd-assignment-row small text-muted">
                                            <Col xs={12} md="auto" className="wd-assignment-col text-danger">
                                                Multiple Modules
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                <b>Not available until</b> October 3 at 12:00am
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                <b>Due</b> October 10 at 11:59pm
                                            </Col>
                                            <Col xs={12} md="auto" className="wd-assignment-col">
                                                100 pts
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs="auto">
                                        <ControlButtons />
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    );}

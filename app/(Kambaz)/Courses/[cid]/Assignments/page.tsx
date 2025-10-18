"use client"
import Link from "next/link";
import * as db from "../../../Database";
import { useParams, usePathname } from "next/navigation";
import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import AssignmentsControlButton from "./AssignmentsControlButtons";
import {MdAssignment} from "react-icons/md";
import ControlButtons from "./ControlButtons";
import AssignmentsControl from "./AssignmentsControl";
import { format } from 'date-fns';


export default function Assignments() {
    const pathname = usePathname();
    const { cid } = useParams();
    const { assignments } = db;

    return (
        <div id="wd-assignments">
            <AssignmentsControl /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">

                    <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
                        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentsControlButton />
                    </div>

                    <ListGroup className="wd-lessons rounded-0">
                        {assignments.filter(assignment => assignment.course === cid)
                            .map(assignment => (
                                <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1 list-group-item-action">
                                    <Container fluid className="wd-assignment-container p-0">
                                        <Row className="align-items-center">
                                            <Col xs="auto">
                                                <BsGripVertical className="me-2 fs-3" />
                                            </Col>
                                            <Col xs="auto">
                                                <MdAssignment className="me-2 fs-3 text-success" />
                                            </Col>
                                            <Col>
                                                <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link text-decoration-none text-dark">
                                                    <div className="wd-assignment-title fw-bold">
                                                        {assignment._id} {assignment.title}
                                                    </div>
                                                </Link>
                                                <Row className="wd-assignment-row small text-muted">
                                                    <Col xs={12} md="auto" className="wd-assignment-col text-danger">
                                                        Multiple Modules
                                                    </Col>

                                                    <Col xs={12} md="auto" className="wd-assignment-col">
                                                        <b>Not available until</b> {format(new Date(assignment.available), "MMM d 'at' h:mmaaa")}
                                                    </Col>
                                                    <Col xs={12} md="auto" className="wd-assignment-col">
                                                        <b>Due</b> {format(new Date(assignment.due), "MMM d 'at' h:mmaaa")}
                                                    </Col>
                                                    <Col xs={12} md="auto" className="wd-assignment-col">
                                                        {assignment.points} pts
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs="auto">
                                                <ControlButtons />
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroupItem>
                            ))}

                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    );}

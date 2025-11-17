"use client"
import * as client from "../../client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Col, Container, ListGroup, ListGroupItem, Row, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButton from "./AssignmentsControlButtons";
import { MdAssignment } from "react-icons/md";
import ControlButtons from "./ControlButtons";
import AssignmentsControl from "./AssignmentsControl";
import { format } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { RootState } from "../../../store";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const dispatch = useDispatch();

    const isFaculty = (currentUser as any)?.role === "FACULTY";

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    const onRemoveAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
    };

    const handleDelete = (assignmentId: string, assignmentTitle: string) => {
        const confirmed = window.confirm(
            `Are you sure you want to remove "${assignmentTitle}"?`
        );
        if (confirmed) {
            onRemoveAssignment(assignmentId);
        }
    };

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return "No date";
            }
            return format(date, "MMM d 'at' h:mmaaa");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return "Invalid date";
        }
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    return (
        <div id="wd-assignments">
            {isFaculty && <AssignmentsControl />}
            <br/><br/><br/><br/>

            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
                        <BsGripVertical className="me-2 fs-3"/>
                        ASSIGNMENTS
                        {isFaculty && <AssignmentsControlButton/>}
                    </div>

                    <ListGroup className="wd-lessons rounded-0">
                        {assignments.map((assignment: any) => (
                            <ListGroupItem
                                key={assignment._id}
                                className="wd-lesson p-3 ps-1 list-group-item-action">
                                <Container fluid className="wd-assignment-container p-0">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <BsGripVertical className="me-2 fs-3"/>
                                        </Col>
                                        <Col xs="auto">
                                            <MdAssignment className="me-2 fs-3 text-success"/>
                                        </Col>
                                        <Col>
                                            <Link
                                                href={`/Courses/${cid}/Assignments/${assignment._id}`}
                                                className="wd-assignment-link text-decoration-none text-dark">
                                                <div className="wd-assignment-title fw-bold">
                                                    {assignment.title}
                                                </div>
                                            </Link>
                                            <Row className="wd-assignment-row small text-muted">
                                                <Col xs={12} md="auto" className="wd-assignment-col text-danger">
                                                    Multiple Modules
                                                </Col>
                                                <Col xs={12} md="auto" className="wd-assignment-col">
                                                    <b>Not available until</b> {formatDate(assignment.available)}
                                                </Col>
                                                <Col xs={12} md="auto" className="wd-assignment-col">
                                                    <b>Due</b> {formatDate(assignment.due)}
                                                </Col>
                                                <Col xs={12} md="auto" className="wd-assignment-col">
                                                    {assignment.points} pts
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs="auto">
                                            <div className="d-flex gap-2 align-items-center">
                                                {isFaculty && (
                                                    <>
                                                        <ControlButtons/>
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => handleDelete(assignment._id, assignment.title)}>
                                                            <FaTrash />
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}
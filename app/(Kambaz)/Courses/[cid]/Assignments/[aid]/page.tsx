"use client"
import * as client from "../../../client";
import { Button, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, setAssignments } from "../reducer";
import { RootState } from "../../../../store";
import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const router = useRouter();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

    const isEditMode = aid !== "new";

    const [assignment, setAssignment] = useState({
        _id: "",
        title: "",
        description: "",
        points: 100,
        due: "",
        available: "",
        until: "",
        course: cid as string
    });

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    useEffect(() => {
        if (isEditMode) {
            const existingAssignment = assignments.find((a: any) => a._id === aid);
            if (existingAssignment) {
                setAssignment({
                    _id: existingAssignment._id,
                    title: existingAssignment.title,
                    description: existingAssignment.description || "",
                    points: existingAssignment.points,
                    due: existingAssignment.due,
                    available: existingAssignment.available,
                    until: existingAssignment.until || "",
                    course: cid as string
                });
            }
        }
    }, [assignments, aid, isEditMode, cid]);

    const handleSave = async () => {
        try {
            if (isEditMode) {
                await client.updateAssignment(assignment);
                dispatch(setAssignments(assignments.map((a: any) =>
                    a._id === assignment._id ? assignment : a
                )));
            } else {
                const newAssignment = await client.createAssignmentForCourse(cid as string, assignment);
                dispatch(setAssignments([...assignments, newAssignment]));
            }
            router.push(`/Courses/${cid}/Assignments`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        router.push(`/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <h2>{isEditMode ? "Edit Assignment" : "New Assignment"}</h2>

            <Form>
                <FormLabel>Assignment Name</FormLabel>
                <FormControl
                    type="text"
                    id="wd-name"
                    value={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                    className="mb-3"
                />

                <FormLabel>Description</FormLabel>
                <FormControl
                    as="textarea"
                    id="wd-description"
                    rows={10}
                    value={assignment.description}
                    onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                    className="mb-3"
                />

                <Row className="mb-3">
                    <FormLabel column sm={2} className="text-end">Points</FormLabel>
                    <Col sm={10}>
                        <FormControl
                            type="number"
                            id="wd-points"
                            value={assignment.points}
                            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <FormLabel column sm={2} className="text-end">Assignment Group</FormLabel>
                    <Col sm={10}>
                        <FormSelect id="wd-group" defaultValue="Assignment">
                            <option value="Assignment">ASSIGNMENTS</option>
                            <option value="Project">PROJECTS</option>
                        </FormSelect>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <FormLabel column sm={2} className="text-end">Display Grade as</FormLabel>
                    <Col sm={10}>
                        <FormSelect id="wd-display-grade-as" defaultValue="Percentage">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </FormSelect>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <FormLabel column sm={2} className="text-end">Submission Type</FormLabel>
                    <Col sm={10}>
                        <fieldset className="border rounded p-3">
                            <FormSelect id="wd-submission-type" defaultValue="Online" className="mb-3">
                                <option value="Online">Online</option>
                                <option value="File">File</option>
                            </FormSelect>

                            <div id="wd-submission-type-online">
                                <FormLabel className="fw-bold">Online Entry Options</FormLabel>
                                <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" name="check-online-entry"/>
                                <FormCheck type="checkbox" id="wd-website-url" label="Website URL" name="check-online-entry"/>
                                <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" name="check-online-entry"/>
                                <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" name="check-online-entry"/>
                                <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" name="check-online-entry"/>
                            </div>
                        </fieldset>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <FormLabel column sm={2} className="text-end">Assign</FormLabel>
                    <Col sm={10}>
                        <fieldset id="wd-assign" className="border rounded p-3">
                            <FormLabel>Assign to</FormLabel>
                            <div className="border rounded p-2 mb-3 d-flex flex-wrap gap-2">
                                <span className="badge bg-light text-dark border gap-1">
                                    Everyone
                                    <button type="button" className="btn-close fs-7" aria-label="Remove"></button>
                                </span>
                            </div>

                            <FormLabel>Due</FormLabel>
                            <FormControl
                                type="datetime-local"
                                id="wd-due-date"
                                value={assignment.due}
                                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                                className="mb-3"
                            />

                            <Row>
                                <Col md={6}>
                                    <FormLabel>Available From</FormLabel>
                                    <FormControl
                                        type="datetime-local"
                                        id="wd-available-from"
                                        value={assignment.available}
                                        onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                                        className="mb-3"
                                    />
                                </Col>
                                <Col md={6}>
                                    <FormLabel>Until</FormLabel>
                                    <FormControl
                                        type="datetime-local"
                                        id="wd-available-until"
                                        value={assignment.until}
                                        onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
                                        className="mb-3"
                                    />
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>

                <hr/>

                <div className="text-end">
                    <Button
                        variant="secondary"
                        id="wd-cancel"
                        className="me-2"
                        onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        id="wd-save"
                        onClick={handleSave}>
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    );
}
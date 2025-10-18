"use client"
import {Button, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, Row} from "react-bootstrap";
import { assignments } from "../../../../Database";
import { useParams } from "next/navigation";

export default function AssignmentEditor() {
    const { aid } = useParams();
    return (
        <div id="wd-assignments-editor">
            <h2>Assignment Name</h2>
            {assignments.filter(assignment => assignment._id === aid)
                .map(assignment => (
                    <Form key={assignment._id}>
                        <FormControl type="text" id="wd-name" defaultValue={`${assignment._id} - ${assignment.title}`} className="mb-3"/>
                        <FormControl as="textarea" id="wd-description" rows={10}
                                     defaultValue={assignment.description}
                                     className="mb-3"
                        />
                        <Row className="mb-3">
                            <FormLabel column sm={2} className="text-end">Points</FormLabel>
                            <Col sm={10}>
                                <FormControl type="number" id="wd-points" defaultValue={assignment.points} />
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
                                    <FormControl type="datetime-local" id="wd-due-date" defaultValue={assignment.due} className="mb-3"/>
                                    <Row>
                                        <Col md={6}>
                                            <FormLabel>Available From</FormLabel>
                                            <FormControl type="datetime-local" id="wd-available-from" defaultValue={assignment.available} className="mb-3"
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormLabel>Until</FormLabel>
                                            <FormControl type="datetime-local" id="wd-available-until" defaultValue={assignment.due} className="mb-3"
                                            />
                                        </Col>
                                    </Row>
                                </fieldset>
                            </Col>
                        </Row>
                        <hr />
                        <div className="text-end">
                            <Button variant="secondary" id="wd-cancel" className="me-2" href={`/Courses/${assignment.course}/Assignments`}>
                                Cancel
                            </Button>
                            <Button variant="danger" id="wd-save" href={`/Courses/${assignment.course}/Assignments`}>
                                Save
                            </Button>
                        </div>
                    </Form>
                ))}

        </div>
    );}

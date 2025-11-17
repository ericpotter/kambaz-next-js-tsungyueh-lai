"use client"
import * as client from "../Courses/client";
import {useEffect, useState} from "react";
import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "./enrollmentsReducer";
import { RootState } from "../store";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
    const dispatch = useDispatch();

    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });

    const [showAllCourses, setShowAllCourses] = useState(false);

    const isFaculty = (currentUser as any)?.role === "FACULTY";

    const isEnrolled = (courseId: string) => {
        if (!currentUser) return false;
        return enrollments.some(
            (enrollment) =>
                enrollment.user === (currentUser as any)._id &&
                enrollment.course === courseId
        );
    };

    const handleEnroll = async (courseId: string) => {
        if (!currentUser) return;
        try {
            await client.enrollCourse((currentUser as any)._id, courseId);
            dispatch(enrollCourse({ userId: (currentUser as any)._id, courseId }));
        } catch (error) {
            console.error(error);
        }
    };

    const handleUnenroll = async (courseId: string) => {
        if (!currentUser) return;
        try {
            await client.unenrollCourse((currentUser as any)._id, courseId);
            dispatch(unenrollCourse({ userId: (currentUser as any)._id, courseId }));
        } catch (error) {
            console.error(error);
        }
    };

    const fetchCourses = async () => {
        try {
            if (showAllCourses) {
                const allCourses = await client.fetchAllCourses();
                dispatch(setCourses(allCourses));
            } else {
                if (currentUser) {
                    const myCourses = await client.findMyCourses();
                    dispatch(setCourses(myCourses));
                } else {
                    const allCourses = await client.fetchAllCourses();
                    dispatch(setCourses(allCourses));
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([ ...courses, newCourse ]));
    };

    const onDeleteCourse = async (courseId: string) => {
        const status = await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
    };

    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((course: any) => {
            if (course._id === course._id) { return course; }
            else { return course; }
        })));
    };

    useEffect(() => {
        fetchCourses();
    }, [currentUser, showAllCourses]);


    return (
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                {!isFaculty && currentUser && (
                    <Button
                        variant="primary"
                        onClick={() => setShowAllCourses(!showAllCourses)}>
                        {showAllCourses ? "My Courses" : "All Courses"}
                    </Button>
                )}
            </div>
            <hr/>

            {isFaculty && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">New Course</h5>
                        <div>
                            <Button
                                variant="warning"
                                className="me-2"
                                onClick={onUpdateCourse}
                                id="wd-update-course-click">
                                Update
                            </Button>
                            <Button
                                variant="primary"
                                id="wd-add-new-course-click"
                                onClick={onAddNewCourse}>
                                Add
                            </Button>
                        </div>
                    </div>

                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <FormControl
                        as="textarea"
                        value={course.description}
                        rows={3}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </>
            )}

            <h2 id="wd-dashboard-published" className="mt-4">
                Published Courses ({courses.length})
            </h2>
            <hr/>

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses
                        .map((course: any) => {
                        const enrolled = isEnrolled(course._id);
                        return (
                            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link
                                        href={`/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160}/>
                                        <CardBody className="card-body">
                                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name}
                                            </CardTitle>
                                            <CardText
                                                className="wd-dashboard-course-description overflow-hidden"
                                                style={{ height: "100px" }}>
                                                {course.description}
                                            </CardText>

                                            <Button variant="primary">Go</Button>

                                            {isFaculty ? (
                                                <>
                                                    <Button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            onDeleteCourse(course._id);
                                                        }}
                                                        className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                        Delete
                                                    </Button>
                                                    <Button
                                                        id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end">
                                                        Edit
                                                    </Button>
                                                </>
                                            ) : (
                                                enrolled ? (
                                                    <Button
                                                        variant="danger"
                                                        className="float-end"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleUnenroll(course._id);
                                                        }}>
                                                        Unenroll
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="success"
                                                        className="float-end"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleEnroll(course._id);
                                                        }}>
                                                        Enroll
                                                    </Button>
                                                )
                                            )}
                                        </CardBody>
                                    </Link>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}
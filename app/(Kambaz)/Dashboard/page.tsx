import Link from "next/link";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md="auto" className="g-3">
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link href="/Courses/123456" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/github.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1111 Github</CardTitle>
                                    <CardText  className="wd-dashboard-course-description overflow-hidden">
                                        Github</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link href="/Courses/234567" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                                    <CardText  className="wd-dashboard-course-description overflow-hidden">
                                        React JS</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link href="/Courses/345678" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/python.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2222 Python</CardTitle>
                                    <CardText  className="wd-dashboard-course-description overflow-hidden">
                                        Python</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link href="/Courses/111111" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/c.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3333 C</CardTitle>
                                    <CardText  className="wd-dashboard-course-description overflow-hidden">
                                        C Language</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link href="/Courses/222222" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/c++.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4444 C++</CardTitle>
                                    <CardText  className="wd-dashboard-course-description overflow-hidden">
                                        C++</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link href="/Courses/333333" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/java.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5555 Java</CardTitle>
                                    <CardText  className="wd-dashboard-course-description overflow-hidden">
                                        Java</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link href="/Courses/444444" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/c_sharp.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6666 C#</CardTitle>
                                    <CardText  className="wd-dashboard-course-description overflow-hidden">
                                        C#</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
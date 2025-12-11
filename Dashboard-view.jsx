import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEdit3 } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./page.module.css";
export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Dashboard</h3>
          <div>
            <img src="/appicon.png" alt="" />
          </div>
        </div>

        <Row>
          {/* First column */}
          <Col md={4}>
            <Card className={styles.card1}>
              <CardBody>
                <Row className={styles.header}>
                  <Col>
                    <CardTitle className={styles.CardTitle}>
                      Profile Details
                    </CardTitle>
                  </Col>
                  <Col>
                    <button className={styles.edit_icon}>
                      Edit <FiEdit3 />
                    </button>
                  </Col>
                </Row>
                <br />

                <CardText>
                  <Row className={styles.rowGap}>
                    <Col>
                      <div className={styles.infoGroup}>
                        <p className={styles.label}>Name</p>
                        <p className={styles.text}>Lorem Ipsum</p>
                        <p className={styles.label}>Phone Number</p>
                        <p className={styles.text}>+91 678900978</p>
                        <p className={styles.label}>Age</p>
                        <p className={styles.text}>26</p>
                      </div>
                    </Col>
                    <Col>
                      <div className={styles.infoGroup}>
                        <p className={styles.label}>Date Of Birth</p>
                        <p className={styles.text}>07/01/2004</p>
                        <p className={styles.label}>Email Address</p>
                        <p className={styles.text}>Lorem.Ipsum@gmail.com</p>
                        <p className={styles.label}>Blood Type</p>
                        <p className={styles.text}>O+</p>
                      </div>
                    </Col>
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </Col>


          {/* Second Column */}
          <Col md={4}>
            <Card className={styles.card}>
              <CardBody>
                <div className={styles.heading2}>
                  <img src="/vaccine.png" alt="" />
                  <CardTitle className={styles.CardTitle}>
                    Vaccination Info
                  </CardTitle>
                </div>
                <CardText className={styles.card_text}>
                  <Row>
                    <Col> Vaccine Name: </Col> 
                    <Col> COVID Vaccine </Col>
                  </Row>
                  <Row>
                    <Col> Personnel 1: </Col> 
                    <Col> Lorem Ipsum </Col>
                  </Row>
                  <Row>
                    <Col> 1st dose: </Col> 
                    <Col> 03/11/2024 </Col>
                  </Row>
                  <Row>
                    <Col> Personnel 2:</Col> 
                    <Col> Lorem Ipsum </Col>
                  </Row>
                  <Row>
                    <Col> 2nd dose: </Col> 
                    <Col> 03/11/2024 </Col>
                  </Row>
                  <Row>
                    <Col>
                      Upcoming Vaccine <br /> Reminders
                    </Col>
                    <Col> Lorem Ipsum </Col>
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          {/* third column */}
          <Col md={4}>
            <Card className={styles.card}>
              <CardBody>
                <div className={styles.heading2}>
                  <img src="/Vector.png" alt="" />
                  <CardTitle className={styles.CardTitle}>
                    Lab Reports
                  </CardTitle>
                </div>
                <CardText className={styles.card_text}>
                  <Row>
                    <Col> Report ID </Col>
                    <Col> Lorem Ipsum </Col>
                  </Row>
                  <Row>
                    <Col> Test Name </Col>
                    <Col> COVID Vaccine </Col>
                  </Row>
                  <Row>
                    <Col> Administered By</Col>
                    <Col> Lorem Ipsum </Col>
                  </Row>

                  <Row>
                    <Col> Doctor Contact </Col>
                    <Col> 36646763452 </Col>
                  </Row>
                  <Row>
                    <Col> Sample Collection Date </Col>
                    <Col> 03/11/2024 </Col>
                  </Row>
                  <Row>
                    <Col className={styles.col1}> Report Status </Col>
                    <Col className={styles.col2}>
                      <p className={styles.green}>Completed </p>
                      <p className={styles.red}>Pending</p>
                      <p className={styles.blue}>Requires Review</p>
                    </Col>
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className={styles.row2}>
          {/* column 4 */}
          <Col md={4}>
            <Card className={styles.card}>
              <CardBody>
                <div className={styles.heading2}>
                  <img src="/growth.png" alt="" />
                  <CardTitle className={styles.CardTitle}>
                    Growth Chart
                  </CardTitle>
                </div>
                <CardText className={styles.card_text}>
                  <Row>
                    <Col> Age: </Col>
                    <Col> 2 yrs 6 months </Col>
                  </Row>
                  <Row>
                    <Col> Height: </Col>
                    <Col> 92cm (65th percentile) </Col>
                  </Row>
                  <Row>
                    <Col> Weight: </Col>
                    <Col> 12.5kg </Col>
                  </Row>
                  <Row>
                    <Col> Status: </Col>
                    <Col> Normal Growth </Col>
                  </Row>
                  <a href="" className={styles.Icon}>
                    Open Chart <FaArrowRight />
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          {/* Column 5 */}
          <Col md={4}>
            <Card className={styles.card}>
              <CardBody>
                <div className={styles.heading2}>
                  <img src="/consultimg.png" alt="" />
                  <CardTitle className={styles.CardTitle}>
                    Consultation History
                  </CardTitle>
                </div>
                <CardText className={styles.card_text}>
                  <Row>
                    <Col> Recent Appointment: </Col>
                    <Col> 10 Feb 2025 </Col>
                  </Row>
                  <Row>
                    <Col> Type: </Col> 
                    <Col> In-person </Col>
                  </Row>

                  <Row>
                    <Col> Doctor: </Col> 
                    <Col> Lorem Ipsum </Col>
                  </Row>
                  <Row>
                    <Col> Total Consultations: </Col>
                    <Col> 06 </Col>
                  </Row>
                  <Row>
                    <Col> Status: </Col>
                    <Col> Follow-up suggested </Col>
                  </Row>
                  <a href="" className={styles.Icon}>
                    Open Records <FaArrowRight />
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          {/* column 6 */}
          <Col md={4}>
            <Card className={styles.card}>
              <CardBody>
                <div className={styles.heading2}>
                  <img src="/bill.png" alt="" />
                  <CardTitle className={styles.CardTitle}>
                    Previous Bill
                  </CardTitle>
                </div>
                <CardText className={styles.card_text}>
                  <Row>
                    <Col> Last Invoice Date: </Col> 
                    <Col> 12 Feb 2025 </Col>
                  </Row>
                  <Row>
                    <Col> Amount Paid: </Col>
                    <Col> ₹1,450 </Col>
                  </Row>
                  <Row>
                    <Col> Payment Mode: </Col> 
                    <Col> UPI </Col>
                  </Row>
                  <Row>
                    <Col> Status: </Col>
                    
                    <Col> Paid </Col>
                  </Row>
                  <a href="" className={styles.Icon}>
                    Download Invoice <FaArrowRight />
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className={styles.btnWrapper}>

          <button className={styles.book_btn}>
            Book Appointment
          </button>

        </div>
      </div>
    </>
  );
}

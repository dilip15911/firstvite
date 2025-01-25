import React from 'react';
import '../assets/css/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Program = () => {
    return (
        <>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img
                    variant="top"
                    src="../src/assets/Images/plain image-programe-card-harizontal.jpg"
                    style={{ height: '9em' }}
                />
                <Card.Body>
                    <div className="card-overlap">
                        <Card.Title ><h6 style={{ textAlign: 'center' }}>Project Management Institute</h6></Card.Title>
                    </div>
                    <Card.Text style={{ textAlign: 'left', backgroundColor: 'white' }}>
                        <h5 style={{ textAlign: 'center' }}>PMP Certification Training</h5>
                        <ul style={{ fontSize: '1rem', color: '#007bff', listStyleType: 'none', paddingLeft: '20px' }}>
                            <li>
                                <FontAwesomeIcon icon={faCheck} style={{ color: '#007bff', marginRight: '10px' }} />
                                35 Contact Hours
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} style={{ color: '#007bff', marginRight: '10px' }} />
                                Industry expert trainers
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} style={{ color: '#007bff', marginRight: '10px' }} />
                                10 Industry case studies
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} style={{ color: '#007bff', marginRight: '10px' }} />
                                10 Industry base scenario
                            </li>
                        </ul>
                    </Card.Text>

                    <Card.Text style={{ textAlign: 'center', backgroundColor: 'white', display: 'flex', fontSize: '13px', justifyContent: 'space-between', alignItems: 'center', }} >

                        <div className="duration" >
                            <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: '10px' }} />
                            <span>4 Weeks</span>
                        </div>

                        <div className="date">
                            Batch Start: 25th Jan '25'
                        </div>

                    </Card.Text>

                    <div className="fee" style={{ textAlign: 'center', backgroundColor: 'white', display: 'flex', fontSize: '13px', justifyContent: 'space-between', alignItems: 'center', }}>
                        Course Fees- Rs 20000/- 
                    </div>

                    <div className='know-button' style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', height: '35px' }}>
                        <Button variant="primary" style={{ fontSize: '12px' }}>Know More</Button>
                    </div>


                    {/* <div className='know Button'> <Button variant="primary">know more</Button> </div>  */}

                </Card.Body>
                {/* <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', fontSize: '.8rem' }}>
                    <div><span className="months">
                        The ::before content would typically be added via CSS
                        Duration: 4 weeks
                    </span>
                    </div>
                    <div><span className="cohort">
                        cohort starts <b>25 Jan 2025</b>
                    </span>
                    </div>

                </div> */}



            </Card>




        </>
    );
}

export default Program;     
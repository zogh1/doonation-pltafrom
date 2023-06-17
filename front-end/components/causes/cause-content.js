import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage1 from "../../assets/images/causes/cause-d-1-1.jpg";
import comment1 from "../../assets/images/blog/comment-1-1.jpg";
import comment2 from "../../assets/images/blog/comment-1-2.jpg";
import organizer1 from "../../assets/images/causes/organizer-1-1.jpg";
import donor1 from "../../assets/images/causes/donor-1-1.jpg";
import donor2 from "../../assets/images/causes/donor-1-2.jpg";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";

const CauseContent = ({ id, show }) => {
  console.log("aaaaaaaa   ", id, "  ", show);
  const [donation, setDonation] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("bbbbbbbbbb   ", id, "  ", show);
      const user = JSON.parse(sessionStorage.getItem("user"));
      let userId = user._id;
      console.log(`http://localhost:8000/donation/donate/${id}/50/${show}`);
      const response = await axios.get(
        `http://localhost:8000/donation/donate/${id}/${userId}/50/${show}`);
      console.log(response.data);
      alert("Donation added successfully!");
    } catch (error) {
      console.log(error);
      alert("Error adding donation. Please try again later.");
    }
    router.push("/causes");

  };

  const fetchDonation = async () => {
    try {

      const response = await fetch(`http://localhost:8000/donation/donations/${id}`);
      const data = await response.json();
      setDonation(data.donation);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {


    if (id !== undefined) {
      fetchDonation();
    }

  }, [id]);


  if (!donation) {
    return <div>Loading...</div>;
  }

  return (
    <section className="cause-details blog-details  pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div className="cause-details__content">
              <div className="cause-card">
                <div className="cause-card__inner">
                  <div className="cause-card__image">
                    {donation && donation.media && <img src={donation.media} alt="" />}
                  </div>
                  <div className="cause-card__content">
                    <div className="cause-card__top">
                      <div className="cause-card__progress">
                        <span
                          style={{ width: `${donation.progress}%` }}
                          className=" cardProgress"
                        >
                          <b>
                            <i>{donation.progress}</i>%
                          </b>
                        </span>
                      </div>
                      <div className="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> {donation.raised}
                        </p>
                        <p>
                          <strong>Goal:</strong> {donation.goal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2>{donation.title}</h2>
              <p>{donation.description}</p>
              <div className="cause-card__bottom">
                <button
                  className="thm-btn dynamic-radius"
                  onClick={(event) => {
                    handleSubmit(event);
                  }}
                >
                  Donate Now
                </button>
              </div>

              <div className="cause-details__presentations">
                <i className="fa fa-file-pdf"></i>

                <h3>Our Presentation</h3>
                <a href="#" className="thm-btn dynamic-radius">
                  Download
                </a>
              </div>
            </div>
            <h3 className="blog-details__title">Comments</h3>
            <div className="comment-one">
              <div className="comment-one__single">
                <img src={comment1} alt="" />
                <h3>Jessica Brown</h3>
                <p className="comment-one__date">20 May, 2020 . 4:00 pm</p>
                <p>
                  Lorem Ipsum is simply dummy free text of the available
                  printing and typesetting been the industry standard dummy text
                  ever sincer condimentum purus.
                </p>
                <a href="#" className="thm-btn dynamic-radius">
                  Reply
                </a>
              </div>
              <div className="comment-one__single">
                <img src={comment2} alt="" />
                <h3>Jessica Brown</h3>
                <p className="comment-one__date">20 May, 2020 . 4:00 pm</p>
                <p>
                  Lorem Ipsum is simply dummy free text of the available
                  printing and typesetting been the industry standard dummy text
                  ever sincer condimentum purus.
                </p>
                <a href="#" className="thm-btn dynamic-radius">
                  Reply
                </a>
              </div>
            </div>
            <h3 className="blog-details__title">Leave a comment</h3>
            <form
              action="#"
              className="contact-form-validated contact-page__form form-one mb-80"
            >
              <div className="form-group">
                <div className="form-control">
                  <input type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="form-control">
                  <input type="text" name="email" placeholder="Email Address" />
                </div>
                <div className="form-control">
                  <input type="text" name="phone" placeholder="Phone Number" />
                </div>
                <div className="form-control">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="form-control form-control-full">
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn dynamic-radius">
                    Submit Comment
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
          <Col md={12} lg={4}>
            <div className="cause-details__sidebar">
              <div className="cause-details__organizer">
                <img src={organizer1} alt="" />
                <p>Created {donation.createdAt}</p>
                <h3>
                  Organizer: <strong>{donation.user.firstNa}</strong>
                </h3>
                <ul className="list-unstyled cause-details__organizer-list">
                  <li>
                    <i className="fa fa-tag"></i>
                    <a href="#">{donation.type}</a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    <a href="#">New York, USA</a>
                  </li>
                </ul>
              </div>
              <div className="cause-details__donations">
                <h4 className="cause-details__donations-title">Donations  ByMatching</h4>
                <ul className="list-unstyled cause-details__donations-list">
                  <li>
                    <img src={donor1} alt="" />
                    <p>$20</p>
                    <h3>
                      <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                  <li>
                    <img src={donor2} alt="" />
                    <p>$20</p>
                    <h3>
                      David Marks <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                  <li>
                    <img src={donor1} className="anonymus" alt="" />
                    <p>$20</p>
                    <h3>
                      Anonymus <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CauseContent;

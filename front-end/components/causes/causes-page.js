import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import PostPaginations from "../post-paginations";
import axios from "axios";



const CausesPage = () => {
  const [CAUSES_DATA, setCAUSES_DATA] = useState([]);
  function redirectToDetailsPage(id) {
    console.log(id);
    window.location.href = `/details?id=${id}`;
  }




  useEffect(() => {
    axios.get('http://localhost:8000/donation/donations')
      .then(response => {
        setCAUSES_DATA(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(CAUSES_DATA)

  return (
    <section className="causes-page pt-120 pb-120">
      <Container>
        <div className="causes-col__3">
          {CAUSES_DATA.map((cause, index) => (

            <div className="cause-card" key={`cause-card-key-${index}`}>
              <div className="cause-card__inner">
                <div className="cause-card__image">
                  <img src={cause.media} alt="" width="500px"
                    height="300px" />
                </div>
                <div className="cause-card__content">
                  <div className="cause-card__top">
                    <div className="cause-card__progress">
                      <span
                        style={{ width: "50%" }}
                        className="wow cardProgress"
                        data-wow-duration="1500ms"
                      >
                        <b>
                          <i>50</i>%
                        </b>
                      </span>
                    </div>
                    <div className="cause-card__goals">
                      <p>
                        <strong>Raised:</strong> $100
                      </p>
                      <p>
                        <strong>Goal:<a>{cause.amount}</a> </strong>
                      </p>
                    </div>
                  </div>
                  <h3>
                    <Link href="">
                      <a>{cause.title}</a>
                    </Link>
                  </h3>
                  <p>{cause.description}</p>
                  <div className="cause-card__bottom">
                    <Link href="">
                      <a className="thm-btn ">Donate Now</a>
                    </Link>
                    <Link href='/cause-details/[id]/false' as={`/cause-details/${cause._id}/false`}>

                      <a
                        className="cause-card__share"
                        aria-label="share postr" >

                        <i className="azino-icon-share"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
        <PostPaginations />
      </Container>
    </section>
  );
};

export default CausesPage;

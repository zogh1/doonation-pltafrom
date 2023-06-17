import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import { useEffect, useState } from "react";
import api from "../../api";
import axios from 'axios'
import Apis from '../../api'
import image from '../../assets/images/welcome2.jpg';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useRouter, } from 'next/router';



const LoginForm = () => {
  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioa414d");
  }, []);

  const router = useRouter();

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      }).then(userInfo => {
        axios.post('http://localhost:8000/user/signinWithFaceId', { faceId: userInfo.facialId }).then((res) => {
          console.log(res);
          if (res.data.user) {

            sessionStorage.setItem('user', JSON.stringify(res.data.user));
            router.push('/editprofile')
          }
        })
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = data;

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(email + '/' + password);

  const userObject = {
    email: email,
    password: password
  };
  const login = (event) => {



    if (!password) {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter your Password!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter your verified Email!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else {

        event.preventDefault();
        axios.post('http://localhost:8000/user/signin', userObject).then((res) => {
          console.log(res);
          if (res) {
            if (res.data.auth) {
              sessionStorage.setItem("user", JSON.stringify(res.data.user));
              sessionStorage.setItem("token", JSON.stringify(res.data.accessToken));
              Swal.fire({
                title: 'Succes!',
                text: 'Welcome to our donation plateforme',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
              router.push('/editprofile')
              /*
              if(res.data.user.verified==true){
                verifiedPerCent=verifiedPerCent+30;
              }
              if(res.data.user.idFaceId!=""){
                verifiedPerCent=verifiedPerCent+30
              }
              if(res.data.user.cin ){
                verifiedPerCent=verifiedPerCent+40
              }*/

              // console.log('percent : '+verifiedPerCent+'%')
              console.log('fama data')

            } else {
              Swal.fire({
                title: 'Error!',
                text: res.data,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            }
          }
        })


      }
    }

    console.log(email + '/' + password);
    event.preventDefault();

  }

  const forgetPass = (event) => {
    console.log("helo")
    event.preventDefault();
    Apis.forgotPassword(email)


  }
  return (
    <><><section className="become-volunteer pt-120 pb-80">
      <Container>


        <div className="become-volunteer__content mb-40">
          <div className="block-title">

            <h3>
              Sign Up yourself
            </h3>
          </div>

        </div>
        <Row className='mt-5'>
          <Col className='col-lg-10 mt-2'>
            <p>Access your personal account and check your latest donations,
              your email and keep your personal data.</p>
            <p className="mt-2">  If you don't have an account,<a href="/signup"><strong>Create one.
            </strong></a></p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <form className="contact-form-validated become-volunteer__form form-one mb-40" onSubmit={login} autoComplete="off">
              <div className="">
                <br></br>
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    name
                  </label>
                  <input
                    onChange={(e) => onValueChange(e)}
                    value={email}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email" />
                </div><br></br>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    onChange={(e) => onValueChange(e)}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password" />

                </div>
                <div className="forgetpassword ">
                  <a href="" className="text-end" onClick={forgetPass}> Forgot password</a>
                </div>
                <br></br>

                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn">
                    Sign in Now
                  </button>
                  <span className="mx-2"><strong>OR</strong></span>
                  <button type="button" onClick={handleLogIn} className="mx-2 thm-btn">
                    Face Id
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
          <Col lg={6}>
            <img
              src={image}

              className="img-fluid"
              alt="Sign In INTER DONATION" />

          </Col>
        </Row>
      </Container>
    </section></></>
  );
};

export default LoginForm;

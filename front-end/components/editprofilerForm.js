import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import edit from "../assets/images/edit.png";
import { useEffect, useState } from "react";
import axios from 'axios'

import useFormInput from "../hooks/form-input";

import Swal from 'sweetalert2';


const EditprofileForm = () => {
let user;
let res;

const {
  value: firstName,
  setValue: setFirstName,
  inputChangeHandler: firstNameChangeHandler,
  inputBlurHandler: firstNameBlurHandler,
  hasError: firstNameHasError,
} = useFormInput((value) => value.trim() !== "");

const {
  value: lastName,
  setValue: setlastName,
  inputChangeHandler: lastNameChangeHandler,
  inputBlurHandler: lastNameBlurHandler,
  hasError: lastNameHasError,
} = useFormInput((value) => value.trim() !== "");

const {
  value: email,
  setValue: setEmail,
  inputChangeHandler: emailChangeHandler,

} = useFormInput((value) => value.trim() !== "");

const[actualPass,setactualPass]=useState('')

const[newPass,setNewPass]=useState('')



  useEffect(() => {
    const getData = () => {
  
   const  auth=sessionStorage.getItem('user');
     console.log(auth)
     
    user= JSON.parse(auth)
    console.log(user)
    }
  
    getData();
  
  }, []);


  useEffect(() => {
    axios.get('http://localhost:8000/user/'+user._id).then((res1) => {
      
      res=res1.data;
      console.log(res.firstName);
      setFirstName(res.firstName)
      setlastName(res.lastName)
      setEmail(res.email)
      setactualPass(res.password)


    })
  
  }, []);

 const editSubmit=(event)=>{
  event.preventDefault();
  const  auth=sessionStorage.getItem('user');
  console.log(auth)
  
 user= JSON.parse(auth)
 console.log(user)
  const dataModified=user;
  dataModified.firstName=firstName;
  dataModified.lastName=lastName;
  dataModified.password=actualPass
  dataModified.newPass=newPass
console.log(dataModified)
if(actualPass==newPass){
  Swal.fire({
    title: 'Error!',
    text: 'You must be enter a new password',
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}else{
  axios.put('http://localhost:8000/user/editProfile',dataModified).then((res2) => {
      
 console.log(res2)
 if(res2.data.success){
  Swal.fire({
    title: 'Success!',
    text: 'Account updated succesfuly',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
 }else{
  Swal.fire({
    title: 'Error!',
    text: res2.data,
    icon: 'error',
    confirmButtonText: 'Ok'
  })
 }

})
}

 }


    return (
        <section className="become-volunteer pt-120 pb-80">
          <Container>
            
              
              <Row>
                <Col lg={7}>
                <div className="become-volunteer__content mb-40">
                  <div className="block-title">
                 
                    <h3>
                    <img src={edit} width="150" alt="" />
 Edit Your Profile <br />
                    </h3>
                  </div>
                        <p>You can change your personal data.</p>
    
                </div>
                </Col>
                <Col lg={5}>
<div className="mt-5 imgedit">
                    <img src={edit} alt="image" width="100px" className="img-fluid rounded"></img>
                    <p className="mt-4" htmlFor="Progress">60% Profile</p>
                    </div>
                </Col>
                </Row>
              <Row className="mt-5">
              <Col lg={12}>
                <form className="contact-form-validated become-volunteer__form form-one mb-40" onSubmit={editSubmit}>
                  <div className="form-group">
                    <div className="form-control">
                      <label htmlFor="name"  className="mx-3">
                        FirstName
                      </label>
                      <input
                      value={firstName}
                      onChange={firstNameChangeHandler}
                        type="text"
                        name="firstName"
                        id="firstname"
                        placeholder="Your FirstName"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="name"  className="mx-3">
                        LastName
                      </label>
                      <input
                      value={lastName}
                      onChange={lastNameChangeHandler}
                        type="text"
                        name="lastName"
                        id="lastname"
                        placeholder="Your LastName"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="email"  className="mx-3">
                        email
                      </label>
                      <input
                      value={email}
                      onChange={emailChangeHandler}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        readOnly
                  
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="phone"  className="mx-3">
                       Actual Password
                      </label>
                      <input
                      onChange={(val) => setactualPass(val.target.value)}
                        type="password"
                        name="password"
                        id="psw"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="phone"  className="mx-3">
                        Confirm Password
                      </label>
                      <input
                      onChange={(val) => setNewPass(val.target.value)}
                        type="password"
                        name="confirm_password"
                        id="cpsw"
                        placeholder="Confirm Password"
                      />
                    </div>
                  
                   
                {/*    <div className="form-control">
                      <label htmlFor="date-of-birth" className="sr-only">
                        date of birth
                      </label>
                      <input
                        type="text"
                        name="date"
                        id="date-of-birth"
                        placeholder="Date of Birth"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="address" className="sr-only">
                        address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="occupation" className="sr-only">
                        occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        id="occupation"
                        placeholder="Occupation"
                      />
                    </div>
               /     <div className="form-control form-control-full">
                      <label htmlFor="message" className="sr-only">
                        message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Write a Message"
                      ></textarea>
                    </div> */}
                    <div className="form-control form-control-full">
                      <button type="submit" className="thm-btn " >
                       Edit Now
                      </button>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
    
              </Col>
            </Row>
          </Container>
        </section>
      );


}

export default EditprofileForm;
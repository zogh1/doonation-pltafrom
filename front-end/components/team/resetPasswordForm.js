import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';


const ResetPasswordForm = ({ match }) => {
  const router = useRouter()


  console.log('match', match)
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axios.post(`http://localhost:8000/user/reset-password/${match}`, {
          password: values.password,
        });

        if (res.data.success) {
          toast.success(res.data.message);
          formik.resetForm();
          router.push('/login')

        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error('Failed to reset password');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Reset Password</h3></div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    placeholder="Enter your password"
                    {...formik.getFieldProps('password')}
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    {...formik.getFieldProps('confirmPassword')}
                  />

                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ResetPasswordForm;

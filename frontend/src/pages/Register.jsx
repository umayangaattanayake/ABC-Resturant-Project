import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { register } from "../api/userApi";
import Alert from "../components/Alert";
import { UniversalContext } from '../context/UniversalContext';
import { barrier } from "../middleware/securityMiddleware";

const Register = () => {
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await register(values.email, values.password);
        if (response.ok) {
          setValue("AlertType", "primary");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
          barrier(setValue, navigate);
        } else {
          setValue("AlertType", "danger");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
        }
      } catch (error) {
        setValue("AlertType", "danger");
        setValue("AlertMessage", error.response?.data?.message || "An error occurred");
        setValue("AlertVisibility", true);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Alert />
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: '400px' }}>
        <h4 className="card-title text-center mb-4">Sign Up</h4>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailaddress" className="form-label">Email address</label>
            <input
              className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
              type="email"
              id="emailaddress"
              {...formik.getFieldProps('email')}
              placeholder="Enter your email"
            />
            {formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
              type="password"
              id="password"
              {...formik.getFieldProps('password')}
              placeholder="Enter your password"
            />
            {formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              className={`form-control ${formik.errors.confirmPassword ? 'is-invalid' : ''}`}
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps('confirmPassword')}
              placeholder="Confirm your password"
            />
            {formik.errors.confirmPassword ? (
              <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="checkbox-signup" />
              <label className="form-check-label" htmlFor="checkbox-signup">
                I accept <Link to="#" className="text-muted">Terms and Conditions</Link>
              </label>
            </div>
          </div>
          <div className="d-grid mb-4">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Sign Up
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

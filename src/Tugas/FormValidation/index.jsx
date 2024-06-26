import { useFormik } from "formik";
import * as yup from "yup";

export default function FormValidation() {
  function registerUser() {
    alert(
      `email : ${formik.values.email} \n password: ${formik.values.password}`
    );
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      email: yup.string().required("email required").email("invalid email"),
      password: yup
        .string()
        .required("password required")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center">Login</h2>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={handleForm}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger" style={{ marginLeft: "5px" }}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={handleForm}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger" style={{ marginLeft: "5px" }}>
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

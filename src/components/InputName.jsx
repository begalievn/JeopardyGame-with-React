import { useFormik } from "formik";
import classes from "./InputName.module.css";
import { login } from "../features/game/loggedSlice";
import { useDispatch } from "react-redux";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  } else if (values.name.length < 2) {
    errors.name = "Must be more than 2 characters";
  }

  return errors;
};

function InputName() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: "" },
    validate,
    onSubmit: (values) => {
      console.log(values.name);
      dispatch(login());
    },
  });
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="email">What is your name?</label>
        <div className={classes.inputContainer}>
          <input
            className={classes.input}
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className={classes.errorMessageDiv}>{formik.errors.name}</div>
          ) : null}
        </div>

        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputName;

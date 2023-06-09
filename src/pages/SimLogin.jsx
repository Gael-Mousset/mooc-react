import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

function SimLogin({ setUser }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-4">
        <h1 className="text-center">Connexion</h1>
        <Formik
          initialValues={{ login: "", password: "" }}
          validationSchema={Yup.object({
            login: Yup.string()
              .required("Un identifiant est nécessaire")
              .min(2, "Votre identifiant doit comporter au moin 2 caractères")
              .max(50, "Votre identifiant ne doit pas dépasser 50 caractère "),

            password: Yup.string()
              .required("Un mot de passe est nécessaire")
              .min(8, "Le mot de passe doit comporter au moin 8 carractère"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const { login } = values;
            setUser(login);
            navigate("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="login" className="form-label">
                  Identifiant
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="login"
                  name="login"
                />
                <ErrorMessage
                  name="login"
                  component="div"
                  className="alert alert-warning"
                ></ErrorMessage>
                <label htmlFor="password" className="form-label">
                  Mot de passe
                </label>
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-warning"
                ></ErrorMessage>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-expand"
                  disabled={isSubmitting}
                >
                  Valider
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
SimLogin.propTypes = {
  setUser: PropTypes.func.isRequired,
};
export default SimLogin;

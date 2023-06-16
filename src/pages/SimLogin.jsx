import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

const fakeAxios = {
  post: (url, data) => {
    if (url === "/api/login") {
      if (data.login === "MONLOGIN" && data.password === "MONPASSWORD") {
        return Promise.resolve({
          status: 200,
          data: { token: "xxx.yyy.zzz", user: { name: data.login } },
        });
      } else {
        return Promise.reject({
          status: 401,
        });
      }
    } else {
      return axios.post(url, data);
    }
  },
};

function SimLogin() {
  const [authError, setAuthError] = useState("");
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-4">
        <h1 className="text-center">Connexion</h1>
        {authError && <div className="alert alert-danger">{authError}</div>}
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
          onSubmit={async ({ login, password }) => {
            try {
              const response = await fakeAxios.post("/api/login", {
                login,
                password,
              });
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer: ${response.data.token}`;
              dispatch({
                type: "setUser",
                payload: response.data.user,
              });
              navigate("/");
            } catch (error) {
              if (error.status === 401) {
                setAuthError("Login ou mot de passe incorrect");
                console.error(error);
              } else {
                console.error(error);
                setAuthError(error.message);
              }
            }
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

import React, { useState } from "react";
import "./RegisterForm.scss";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserAddOutlined, LockOutlined } from "@ant-design/icons";
import {
  emailValidation,
  minLenghtValidation,
} from "../../../utils/formValidation";
import { signUpApi } from '../../../api/user';

export default function RegisterForm() {
  //useState para capturar los valores del formulario
  const [input, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  //useState para validaciones
  const [formValid, setFormvalid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  //capturar eventos dependiendo de input o checkbox
  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...input,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };
  //validacion de inputs
  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (type === "email") {
      setFormvalid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormvalid({ ...formValid, [name]: minLenghtValidation(e.target, 6) });
    }
    if (type === "checkbox") {
      setFormvalid({ ...formValid, [name]: e.target.checked });
    }
  };
  //funcion de registro
  const register = async e => {
    e.preventDefault();

    const emailVal = input.email;
    const passwordVal = input.password;
    const repeatPasswordVal = input.repeatPassword;
    const privacyPolicyVal = input.privacyPolicy;
//Verificación y conexión con la base de datos
    if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales.",
        });
      } else {
        const result = await signUpApi(input);
        if (!result.ok) {
          notification["error"] ({
            message: result.message
          });
        } else {
          notification["success"] ({
            message: result.message
          });
          resetForm();
        }
      }
    }
  };
  //reseteo del formulario
  const resetForm = () => {
    const input = document.getElementsByClassName('input');

    for(let i = 0; i < input.length; i++) {
        input[i].classList.remove("success");
        input[i].classList.remove("error");
    }
    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });
    setFormvalid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });

  };
  //Diseño del formulario
  return (
    <Form
      className="register-form"
      onSubmitCapture={register}
      onChange={changeForm}
    >
      <Form.Item>
        <Input
          prefix={<UserAddOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="register-form__input"
          onChange={inputValidation}
          value={input.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={input.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={input.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={input.privacyPolicy}
        >
          He leído y acepto la politica de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}

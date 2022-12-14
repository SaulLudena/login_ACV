import React from "react";
import fondo from "../assets/img/fondo.jpg";
import logo from "../assets/img/logo.png";

import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Login() {
  const backgroundImageStyle = {
    backgroundImage: `url("${fondo}")`,
    bgNoRepeat: "bg-no-repeat",
    bgCover: "bg-cover",
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const rucValue = document.getElementById("rucValue").value;
    const passValue = document.getElementById("passValue").value;
    const loginMessage = document.getElementById("loginMessage");
    loginMessage.innerHTML = "";
    /*Estado para disminuir intentos*/
    const [attemps, setAttemps] = useState(3);
    const decreaseAttemps = () => {
      setAttemps((attemps) => attemps - 1);
    };

    if (rucValue.trim().length !== 0 && passValue.trim().length !== 0) {
      console.log("datos ingresados correctamente");
      if (rucValue !== "20515290142" && passValue !== "123") {
        loginMessage.innerHTML = `intentos disponibles ${attemps}`;
      }
    } else {
      loginMessage.innerText = "Ingrese todos los campos";
    }
  };

  return (
    <div className="flex justify-center h-screen " style={backgroundImageStyle}>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex justify-center p-4 backdrop-blur-sm bg-black/30 rounded-2xl">
            <div className="p-2 px-8 pt-8 bg-white h-3/4 rounded-2xl">
              <div className="flex justify-center h-16 w-22 ">
                <img src={logo} alt="Logo" />
              </div>
              <h1 className="pt-4 font-sans text-4xl font-extrabold text-center ">
                LOGIN
              </h1>
              <form className="grid justify-center" onSubmit={HandleSubmit}>
                <div className="pt-8">
                  <Input color="teal" label="RUC" type="number" id="rucValue" />
                </div>
                <div className="pt-8 ">
                  <Input
                    color="teal"
                    label="CONTRASE??A"
                    type="password"
                    id="passValue"
                  />
                </div>
                <span className="text-right text-[#2F9B86]">
                  Recuperar Acceso
                </span>
                <div className="grid justify-center pt-8 pb-7">
                  <Button
                    className="w-72 bg-[#2F9B86]"
                    value="INGRESAR"
                    type="submit"
                    id="btnIngresar"
                  >
                    Ingresar
                  </Button>
                </div>
                <div
                  className="grid justify-center py-3 mb-3 text-red-700"
                  id="loginMessage"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

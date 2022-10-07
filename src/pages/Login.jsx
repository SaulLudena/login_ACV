import React from "react";
// import fondo from "../assets/img/fondo.jpg";
import logo from "../assets/img/logo.png";

import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Login() {
  // const backgroundImageStyle = {
  //   backgroundImage: `url("${fondo}")`,
  //   bgNoRepeat: "bg-no-repeat",
  //   bgCover: "bg-cover",
  // };
  const [attemps, setAttemps] = useState(3);
  const decreaseAttemps = () => {
    setAttemps((attemps) => attemps - 1);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const rucValue = document.getElementById("rucValue").value;
    const passValue = document.getElementById("passValue").value;
    const loginMessage = document.getElementById("loginMessage");
    loginMessage.innerHTML = "";
    /*Estado para disminuir intentos*/
    if (rucValue.trim().length !== 0 && passValue.trim().length !== 0) {
      console.log("datos ingresados correctamente");
      if(rucValue.trim().length === 11){
        if (rucValue !== "20515290142" && passValue !== "123") {
          if(attemps === 0){
            loginMessage.innerText = `Ha superado la cantidad de intentos espere 10 s`;
            setTimeout(()=>{
              setAttemps(3);
            },10000);
          }else{
            loginMessage.innerText = `intentos disponibles ${attemps}`;
            decreaseAttemps();
          }
        }else{
          loginMessage.innerText = "ACCEDIO";
        }
      }else{
        loginMessage.innerText = "El ruc debe contener 11 caracteres";
        
      }
      
    } else {
      loginMessage.innerText = "Ingrese todos los campos";
    }
  };

  return (
    <div className="flex justify-center  h-screen bg-gradient-to-r  from-[#26306A] via-[#2B657F] to-[#2F9B86] overscroll-contain overflow-y-visible">
    
      <div className="flex items-center justify-center">
        <div className="flex justify-center backdrop-blur-sm bg-black/30 p-4 rounded-2xl">
          <div className="bg-white py-8 px-4 rounded-2xl">
            <div className="flex flex-col justify-center ">
              <div className="flex justify-center h-32 w-[100%] " >
                <img src={logo} alt="Logo" />
              </div>
              <h1 className="pt-4 font-sans text-4xl font-bold text-center">
                LOGIN
              </h1>
              <form  className="flex flex-col justify-center" onSubmit={HandleSubmit}>
                <div className="p-2">
                  <Input color="teal" label="RUC" type="number" id="rucValue"/>
                </div>
                <div className="p-2">
                  <Input
                    color="teal"
                    label="CONTRASEÑA"
                    type="password"
                    id="passValue"
                  />
                </div>
                <span className="text-right text-[#2F9B86]">
                  Recuperar Acceso
                </span>
                <div className="flex justify-center p-2">
                  <Button
                    className="w-[80%] bg-[#2F9B86]"
                    value="INGRESAR"
                    type="submit"
                    id="btnIngresar"
                  >
                    Ingresar
                  </Button>
                </div>
                <div
                  className="flex justify-center p-3 m-2 text-red-700"
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

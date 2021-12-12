      let registrarse = document.getElementById('registrarse')
      let inputs = document.querySelectorAll('input');
      let form = document.getElementById('formRegister')
      let email = document.getElementById('emailRegister')
      let password = document.getElementById('password')
      let passwordConfirmar = document.getElementById('passwordConfirmar')
      let foto = document.getElementById('foto')


      let regexEmail = /\S+@\S+\.\S+/;
      let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/;


      let arrayCheck = [false, false, false, false, false, false, false, false, false, false, false, false, false, false]

      const newToast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          position: 'top',
      })


      foto.onchange = function checkFoto(e) {

          if (foto.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Foto de perfil </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[0] = false;
          } else {
              if (!foto.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
                  newToast.fire({
                      title: 'La foto de perfil deberá ser de formato JPG, JPEG, PNG o GIF',
                      timer: 3000,
                      width: '28vw',
                      icon: 'warning',
                  })
                  return arrayCheck[0] = false;
              } else {
                  newToast.fire({
                      title: 'Foto de perfil válida',
                      timer: 1500,
                      width: '18vw',
                      icon: 'success',
                  })
                  return arrayCheck[0] = true;
              }
          }
      }


      email.onblur = function onblurEmail() {
          if (email.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Email </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[1] = false;
          } else {

              return arrayCheck[1] = true;
          }
      }
      email.onchange = function onchangeEmail(e) {

          if (regexEmail.test(email.value) == false) {
              newToast.fire({
                  title: 'Debes completar el campo con un email válido',
                  timer: 1500,
                  width: '28vw',
                  icon: 'warning',
              })
              return arrayCheck[2] = false;
          } else {
              newToast.fire({
                  title: 'Email válido',
                  timer: 1500,
                  width: '13vw',
                  icon: 'success',
              })
              return arrayCheck[2] = true;
          }
      }

      inputs[1].onblur = function onblurNombre(e) {
          if (inputs[1].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Nombre </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[3] = false;
          } else {
              return arrayCheck[3] = true;
          }
      }

      inputs[1].onchange = function onchangeNombre(e) {


          if (inputs[1].value.length < 2) {
              newToast.fire({
                  title: 'El campo de nombre debe tener al menos 2 caracteres',
                  timer: 1500,
                  width: '28vw',
                  icon: 'warning',
              })
              return arrayCheck[4] = false;
          } else {
              newToast.fire({
                  title: 'Nombre válido',
                  timer: 1500,
                  width: '15vw',
                  icon: 'success',
              })
              return arrayCheck[4] = true;
          }
      }

      inputs[2].onblur = function onblurApellido(e) {
          if (inputs[2].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Apellido </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[5] = false;
          } else {
              return arrayCheck[5] = true;
          }
      }


      inputs[2].onchange = function onchangeApellido(e) {

          if (inputs[2].value.length < 2) {
              newToast.fire({
                  title: 'El campo de apellido debe tener al menos 2 caracteres',
                  timer: 1500,
                  width: '28vw',
                  icon: 'warning',
              })
              return arrayCheck[6] = false;
          } else {
              newToast.fire({
                  title: 'Apellido válido',
                  timer: 1500,
                  width: '15vw',
                  icon: 'success',
              })
              return arrayCheck[6] = true;
          }
      }


      inputs[3].onblur = function onblurUsuario(e) {
          if (inputs[3].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Usuario </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[7] = false;
          } else {
              return arrayCheck[7] = true;
          }
      }

      inputs[5].onblur = function onblurDomicilio(e) {
          if (inputs[5].value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Domicilio </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[8] = false;
          } else {
              return arrayCheck[8] = true;
          }
      }



      password.onblur = function onblurPassword(e) {
          if (password.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> contraseña </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[9] = false;
          } else {
              return arrayCheck[9] = true;
          }
      }
      password.onchange = function onchangePassword(e) {

          if (regexPass.test(password.value) == false || password.value.length < 8) {
              newToast.fire({
                  title: 'La contraseña debe ser o tener más de 8 carácteres y al menos un carácter especial, una letra mayúscula y una letra minúscula',
                  icon: 'warning',
                  timer: 3000,
                  width: '32vw',
              })
              return arrayCheck[10] = false;
          } else {
              newToast.fire({
                  title: 'Contraseña válida',
                  timer: 1500,
                  width: '15vw',
                  icon: 'success',
              })
              return arrayCheck[10] = true;
          }
      }


      passwordConfirmar.onblur = function onblurConfirmarPassword(e) {
          if (passwordConfirmar.value.length == 0) {
              newToast.fire({
                  title: "Atención",
                  html: 'Debes completar el campo de <b style="color:#ab191f"> Repetir contraseña </b>',
                  icon: "error",
                  position: 'top',
                  timer: 1500
              })
              return arrayCheck[11] = false;
          } else {
              return arrayCheck[11] = true;
          }
      }

      passwordConfirmar.onchange = function onchangeConfirmarPassword(e) {

          if (passwordConfirmar.value != password.value) {
              newToast.fire({
                  title: 'Las contraseñas no coinciden',
                  icon: 'warning',
                  timer: 3000,
                  width: '20vw',
              })
              return arrayCheck[12] = false;
          } else {
              newToast.fire({
                  title: 'Las contraseñas coinciden',
                  icon: 'success',
                  timer: 3000,
                  width: '20vw',
              })
              return arrayCheck[12] = true;
          }
      }




      registrarse.onmousedown = function (e) {
          e.preventDefault();


          let arrayValidado = true


          for (let i = 1; i < inputs.length; i++) {
              if (inputs[i].value.length == 0) {
                  Swal.fire({
                      title: "Error",
                      html: 'Debes completar todos los campos',
                      icon: "error",
                      confirmButtonColor: '#ab191f'
                  })
              } else {
                  for (let j = 0; j < arrayCheck.length; j++) {

                      if (arrayCheck[j] == false) {
                          arrayValidado = false
                      }

                  }

                  if (arrayValidado == true) {
                      Swal.fire({
                          title: "Confirmar datos",
                          icon: "info",
                          cancelButtonText: 'Cancelar',
                          cancelButtonColor: 'black',
                          confirmButtonColor: '#ab191f',
                          confirmButtonText: 'Continuar',
                          showCancelButton: true,
                      }).then(function (result) {
                          if (result.isConfirmed) {
                              form.submit();
                          }

                      })
                  } else if (arrayValidado == false) {
                      Swal.fire({
                          title: "Error",
                          text: "Revisa los datos e intenta nuevamente",
                          icon: "error",
                          confirmButtonColor: '#ab191f',
                          confirmButtonText: 'OK',
                      })
                  }

              }
          }




      }
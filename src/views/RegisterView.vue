<template>
    <div class="loginContainer">
        <div
        class="container form-width margin-bottom-30 alert alert-danger alert-dismissible fade show"
        role="alert"
        v-if="errorMessage"
      >
          {{ errorMessage }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="container form-width" id="loginForm">
          <h1>Regisztráció</h1>
          <form @submit.prevent="register">
            <div class="mb-3">
              <label for="regUsername" class="form-label">Felhasználónév</label>
              <input type="text" class="form-control" name="regUsername" v-model="regUsername"/>
            </div>
            <div class="mb-3">
              <label for="regEmail1" class="form-label">Email cím</label>
              <input
                type="email"
                class="form-control"
                name="regEmail1"
                v-model="regEmail1"
                placeholder="email@email.com"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                Nem osztjuk meg az email címed harmadik féllel.
              </div>
            </div>
            <div class="mb-3">
              <label for="regPassword1" class="form-label">Jelszó</label>
              <input type="password" class="form-control" name="regPassword1"
            placeholder="password123" v-model="regPassword1" />
            </div>
            <div class="mb-3">
            <label for="repeatPassword1" class="form-label"
              >Jelszó mégegyszer</label
            >
            <input type="password" class="form-control" name="repeatPassword1"
            placeholder="password123" v-model="repeatPassword1" />
          </div>
            <div class="mb-3">
              <button type="submit" class="normalbtn" id="submitButton">
                Belépés
              </button>
              <button type="button" class="normalbtn" id="switch-register" @click="moveToLogin">
                Van már felhasználói fiókod? Belépés
              </button>
            </div>
          </form>
        </div>
      </div>
  </template>
  
  <script>
      import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
      import { firebase } from '../composables/firebaseapikey'
  
      export default {
          data() {
              return {
                  regUsername: '',
                  regEmail1: '',
                  regPassword1: '',
                  repeatPassword1: '',
                  errorMessage: null
              }
          },
          methods: {
              register() {
                  const auth = getAuth(firebase);
                
                  if (this.regPassword1 === this.repeatPassword1) {
                    createUserWithEmailAndPassword(auth, this.regEmail1, this.regPassword1)
                      .then(() => {
                          updateProfile(auth.currentUser, {
                            displayName: this.regUsername
                          })
                          this.$router.push("/home")
                      })
                      .catch((error) => {
                          this.errorMessage = error.message;
                          console.log(error.message)
                      })
                  } else {
                    this.errorMessage = 'A két jelszó nem egyezik meg!';
                  }
              },
              moveToLogin() {
                  this.$router.push("/");
              }
          }
      }
  
  </script>
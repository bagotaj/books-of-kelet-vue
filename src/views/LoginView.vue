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
        <h1>Belépés</h1>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="inputUsername" class="form-label">Felhasználónév</label>
            <input type="text" class="form-control" name="inputUsername" v-model="inputUsername"/>
          </div>
          <div class="mb-3">
            <label for="inputEmail1" class="form-label">Email cím</label>
            <input
              type="email"
              class="form-control"
              name="inputEmail1"
              v-model="inputEmail1"
              placeholder="email@email.com"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Nem osztjuk meg az email címed harmadik féllel.
            </div>
          </div>
          <div class="mb-3">
            <label for="inputPassword1" class="form-label">Jelszó</label>
            <input type="password" class="form-control" name="inputPassword1"
          placeholder="password123" v-model="inputPassword1" />
          </div>
          <div class="mb-3">
            <button type="submit" class="normalbtn" id="submitButton">
              Belépés
            </button>
            <button type="button" class="normalbtn" id="switch-register" @click="moveToRegister">
              Regisztráció
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
  import { firebase } from '../composables/firebaseapikey'
  import { store } from '../composables/store.js'

    export default {
      data() {
          return {
              store,
              inputUsername: "",
              inputEmail1: "",
              inputPassword1: "",
              errorMessage: null,
          };
      },
      methods: {
          login() {
              const auth = getAuth(firebase);
              signInWithEmailAndPassword(auth, this.inputEmail1, this.inputPassword1)
                  .then(() => {
                  let user = auth.currentUser;
                  if (user.displayName !== this.inputUsername) {
                      updateProfile(auth.currentUser, {
                          displayName: this.inputUsername
                      });
                  }
                  store.set();
                  this.$router.push("/home");
              })
                  .catch((error) => {
                  this.errorMessage = error.message;
                  console.log(error.message);
              });
          },
          moveToRegister() {
              this.$router.push("/register");
          }
      }
}
</script>
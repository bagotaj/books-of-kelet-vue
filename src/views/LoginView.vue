<template>
  <div class="loginContainer">
      <div
        class="container form-width alert alert-danger margin-bottom-30 displaynone"
        id="errorMessage"
      >
        {{ errorMessage }}
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

    export default {
        data() {
            return {
                inputUsername: '',
                inputEmail1: '',
                inputPassword1: '',
                errorMessage: `Nézd meg a postafiókod és igazold vissza az emailcímed!
        ${<span>"Nem jött email?"</span>}`
            }
        },
        methods: {
            login() {
                const auth = getAuth(firebase);
                signInWithEmailAndPassword(auth, this.inputEmail1, this.inputPassword1)
                .then(() => {
                    updateProfile(auth.currentUser, {
                      displayName: this.inputUsername
                    })
                    this.$router.push("/home")
                })
                .catch((error) => {
                    const errorMessage = document.querySelector('#errorMessage');
                    errorMessage.classList.remove('displaynone');
                    errorMessage.innerHTML = error.message;
                    console.log(error.message)
                })
            },
            moveToRegister() {
                this.$route.push("/register");
            }

        }
    }

</script>

<style>

</style>
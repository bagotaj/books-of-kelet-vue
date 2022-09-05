<template>
  <div class="loginContainer displaynone">
      <div
        class="container form-width alert alert-danger margin-bottom-30 displaynone"
        id="emailVerificationMessage"
      >
        Nézd meg a postafiókod és igazold vissza az emailcímed!
        <span>Nem jött email?</span>
      </div>
      <div class="container form-width" id="loginForm">
        <h1>Belépés</h1>
        <form>
          <div class="mb-3">
            <label for="inputUsername" class="form-label">Felhasználónév</label>
            <input type="text" class="form-control" id="inputUsername" />
          </div>
          <div class="mb-3">
            <label for="inputEmail1" class="form-label">Email cím</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Nem osztjuk meg az email címed harmadik féllel.
            </div>
          </div>
          <div class="mb-3">
            <label for="inputPassword1" class="form-label">Jelszó</label>
            <input type="password" class="form-control" id="inputPassword1" />
          </div>
          <div class="mb-3">
            <button type="submit" class="normalbtn" id="submitButton">
              Belépés
            </button>
            <button type="button" class="normalbtn" id="switch-register">
              Regisztráció
            </button>
          </div>
        </form>
      </div>
      <div class="container form-width displaynone" id="registrationForm">
        <h1>Regisztráció</h1>
        <form>
          <div class="mb-3">
            <label for="regUsername" class="form-label">Felhasználónév</label>
            <input type="text" class="form-control" id="regUsername" />
          </div>
          <div class="mb-3">
            <label for="regEmail1" class="form-label">Email cím</label>
            <input
              type="regemail"
              class="form-control"
              id="regEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Nem osztjuk meg az email címed harmadik féllel.
            </div>
          </div>
          <div class="mb-3">
            <label for="regPassword1" class="form-label">Jelszó</label>
            <input type="password" class="form-control" id="regPassword1" />
          </div>
          <div class="mb-3">
            <label for="repeatPassword1" class="form-label"
              >Jelszó mégegyszer</label
            >
            <input type="password" class="form-control" id="repeatPassword1" />
          </div>
          <div class="mb-3">
            <button type="submit" class="normalbtn" id="regSubmitButton">
              Regisztráció
            </button>
            <button type="button" class="normalbtn" id="switch-login">
              Van már felhasználói fiókod? Belépés
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
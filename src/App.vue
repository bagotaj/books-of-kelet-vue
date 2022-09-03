<template>
  <header>

    <nav class="menu">
      <ul>
        <li>A KELET KÖNYVEI</li>
        <li class="loggedinContainer displaynone">
              <div id="navbarLi2">
                <div class="form-check">
                  <p class="content"></p>
                  <button
                    type="button"
                    class="normalbtn"
                    value="logout"
                    id="logoutButton"
                  >
                    Kilépés
                  </button>
                </div>
              </div>
            </li>
      </ul>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
  </header>
  <router-view/>
</template>

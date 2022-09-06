<template>
  <header>
    <nav class="menu">
      <ul>
        <li>A KELET KÖNYVEI</li>
        <li class="loggedinContainer" v-if="store.display">
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
    </nav>
  </header>
</template>

<script>
    import { store } from '../composables/store.js';

    export default {
        data() {
            return {
                store
            }
        }
    }
</script>
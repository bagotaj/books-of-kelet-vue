<template>
    <div class="loggedinContentContainer">
      <div class="canvas-wrapper-index">
        <canvas id="canvas"></canvas>
        <div>
          <p id="canvas-wrapper-label" v-if="store.display">
            Kattints egy könyv címére, és megmutatjuk, melyik polcon találod.
          </p>
        </div>
      </div>
      <div id="canvas-label" v-if="!store.display">
        <p class="canvas-label center">
          Kérlek, pontosan ugyanoda tedd vissza a könyvet, ahonnan elvetted,
          hogy mások is megtalálják. <br />
          Az app segít neked ebben. :-).
        </p>
      </div>
      <div id="book-shelves-id" class="book-shelves">
        <canvas id="canvasBookTitles"></canvas>
      </div>
      <div class="container">
        <nav class="menu-books">
          <ul>
            <li><h1>Könyvek</h1></li>
            <li class="form-check">
              <input type="text" class="searchinput" id="searchinput" /><button
                type="button"
                class="searchbtn"
                id="searchButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
        <table>
          <thead>
            <tr id="theadABC"></tr>
          </thead>
          <tbody id="tableBody"></tbody>
          <tfoot id="tableFooter"></tfoot>
        </table>
      </div>
    </div>
</template>

<script>
  import { store } from '@/composables/store.js'
  import { initializeSite } from '@/composables/index.js'

  export default {
    name: 'HomeView',
    data() {
      return {
        store,
        backgroundShelvesTitle: 'kelet-header'
      }
    },
    mounted() {
      initializeSite(this.backgroundShelvesTitle);
    }
  }
</script>

import { reactive } from 'vue';

export const store = reactive({
  display: false,
  set() {
    this.display = !this.display;
  },
});

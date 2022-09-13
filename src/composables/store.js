import { reactive } from 'vue';

export const store = reactive({
  display: false,
  savedBasicsShelvesData: [],
  dataOfImageToFirebase: {},
  resizedLocalImageFile: null,
  setClickCanvas: null,
  setUploadImageupload: null,
  clickedShelfBoxKeyNumber: null,
  booksFromLocalStorageBoolean: false,
  maxBackgroundShelfWidth: 1359,
  maxBackgroundShelfHeight: 500,
  backgroundShelvesWidth: 1359,
  backgroundShelvesHeight: 500,
  backgroundShelvesTitle: 'kelet-header',
  backgroundBasicShelfImage: {},
  backgroundBookShelfImage: {},
  shelfCoordsObj: null,
  imgNewSizeRatio: 6.048,
  imgSizeRatioBookTitle: 0,
  shelvesCoordsRatio: 1,
  set() {
    this.display = !this.display;
  },
});

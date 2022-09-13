import { getImage } from './getDB';
import { setCanvasWrapperIndex, setCanvasHeightIndex } from './setCanvas';
import { store } from '@/composables/store';

export function initializeSite(backgroundShelvesTitle) {
  const canvas = createCanvas();
  let ctx = canvas.getContext('2d');

  function createCanvas() {
    const result = document.getElementById('canvas');
    result.width = window.visualViewport.width;
    if (backgroundShelvesTitle) {
      let imgDataObj = {
        mainCanvas: result,
        ImgName: backgroundShelvesTitle,
        argFunction: setCanvasWrapperIndex,
      };

      getImage(imgDataObj);
    }

    return result;
  }

  window.addEventListener('resize', function () {
    // canvas.width = window.innerWidth;
    canvas.width = window.visualViewport.width;

    const isEmptyBasic =
      Object.keys(store.backgroundBasicShelfImage).length === 0;
    if (!isEmptyBasic) {
      setCanvasWrapperIndex(
        backgroundBasicShelfImage.canvasDOM,
        backgroundBasicShelfImage.imageURL,
        backgroundBasicShelfImage.ImgName
      );
    }

    const isEmptyBook =
      Object.keys(store.backgroundBookShelfImage).length === 0;
    if (!isEmptyBook) {
      setCanvasWrapperIndex(
        backgroundBookShelfImage.canvasDOM,
        backgroundBookShelfImage.imageURL,
        backgroundBookShelfImage.ImgName
      );
    }
  });

  return { canvas, ctx };
}

export function setBookShelvesClassIndex() {
  const bookShelvesClass = document.querySelectorAll('.book-shelves');

  let canvasHeight = setCanvasHeightIndex();

  bookShelvesClass[0].style.height = canvasHeight * 0.8;
}

export function setSearchField() {
  let searchButton = document.querySelector('#searchButton');
  let searchInputField = document.querySelector('#searchinput');

  searchButton.addEventListener('click', () => {
    let text = searchInputField.value;
    searchData(text);
  });

  searchInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchButton.click();
    }
  });
}

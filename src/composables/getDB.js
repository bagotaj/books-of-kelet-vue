import { storageconnection } from './firebaseapikey';
import { ref, getDownloadURL } from 'firebase/storage';

export function getImage(imgDataObj) {
  const imageRef = ref(
    storageconnection,
    `assets/img/${imgDataObj.ImgName}.jpeg`
  );
  getDownloadURL(imageRef)
    .then((url) => {
      console.log(url);
      imgDataObj.argFunction(imgDataObj.mainCanvas, url, imgDataObj.ImgName);
    })
    .catch((error) => {
      // Handle any errors
      alert('error in downloading the image');
      console.log(error.message);
    });
}

export function checkUsersData(userId) {
  let admin;

  booksRef = dbconnection.collection('users').where('admin', '==', true);

  booksRef
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((user) => {
        if (user.data()['UID'] === userId) {
          admin = true;
        }
      });
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      // alert('Error adding document: ', error.message);
    });

  return admin;
}

export function searchData(text) {
  let lowercaseText = text.toLowerCase();

  dbconnection
    .collection('books')
    .orderBy('searchparagraph')
    .startAt(lowercaseText)
    .endAt(lowercaseText + '~')
    .get()
    .then((querySnapshot) => {
      let books = [];

      querySnapshot.forEach((book) => {
        if (book.data()['display'] === 'on') {
          books.push(book.data());
        }
      });

      return books;
    })
    .then((books) => {
      createMainBookTitlesTable(books);
      let searchInputField = document.querySelector('#searchinput');
      searchInputField.value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      // alert('Error adding document: ', error.message);
    });
}

export function getBasicsShelvesData() {
  dbconnection
    .collection('basics')
    .get()
    .then((doc) => {
      doc.forEach((basicShelf) => {
        makeStartPageButtonsImageUpload(basicShelf.data());
        savedBasicsShelvesData.push(basicShelf.data());
      });
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      // alert('Error adding document: ', error.message);
    });
}

export function getShelvesData(mainCanvas, url, ImgName) {
  let shelfData = dbconnection
    .collection('shelves')
    .where('imageTitle', '==', ImgName);

  shelfData
    .get()
    .then((doc) => {
      doc.forEach((querySnapshot) => {
        if (!querySnapshot.exists) {
          throw 'Document does not exist!';
        }

        if (mainCanvas.id === 'canvasEdit') {
          imgNewSizeRatio = querySnapshot.data().imgNewSizeRatio;

          dataOfImageToFirebase = {
            basicShelf: querySnapshot.data().basicShelf,
            imageTitle: querySnapshot.data().imageTitle,
            shelfCoords: querySnapshot.data().shelfCoords,
            shelfName: querySnapshot.data().shelfName,
            imgNewSizeRatio: imgNewSizeRatio,
          };

          let imgDataObj = {
            mainCanvas: canvasEdit,
            ImgName: ImgName,
            argFunction: setCanvasWrapperIndex,
          };

          getImage(imgDataObj);
        }

        if (mainCanvas.id === 'canvasBookTitles') {
          let basicShelfTitle;

          basicShelfTitle = querySnapshot.data().basicShelf;

          if (backgroundShelvesTitle !== basicShelfTitle) {
            let imgDataObj = {
              mainCanvas: canvas,
              ImgName: querySnapshot.data().basicShelf,
              argFunction: setCanvasWrapperIndex,
            };

            getImage(imgDataObj);
          }

          let img = makeImage({
            src: url,
            function: function () {
              let dataObj = {
                basicShelfTitle: basicShelfTitle,
                basicShelfParams: {
                  x: img.width,
                  y: img.height,
                },
              };

              setBackgroundShelvesVariables(dataObj);
            },
          });
        }
      });
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      // alert('Error adding document: ', error.message);
    });
}

export function getImageNameFromBasicsShelfBoxCoords(searchingImageKeyValue) {
  let basicShelf = dbconnection
    .collection('basics')
    .where('basicShelfTitle', '==', backgroundShelvesTitle);

  basicShelf
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((shelf) => {
        if (!shelf.exists) {
          throw 'Document does not exist!';
        }

        for (const key in shelf.data().shelfBoxCoords) {
          if (key === searchingImageKeyValue) {
            let imageName = shelf.data().shelfBoxCoords[key][4];

            if (imageName === undefined) {
              alert('Shelf does not exist');
            } else {
              booksFromLocalStorageBoolean = true;
              setClickCanvas = 'books';

              getBooks(imageName);
              getShelvesData(canvasEdit, 'url', imageName);
            }
          }
        }
      });
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      alert('Error adding document: ', error.message);
    });
}

export function getBooks(imageTitle) {
  let books = dbconnection
    .collection('books')
    .where('imageTitle', '==', imageTitle);

  books
    .get()
    .then((querySnapshot) => {
      let books = [];

      querySnapshot.forEach((book) => {
        if (!book.exists) {
          throw 'Book does not exist!';
        }

        if (book.data()['display'] === 'on') {
          let bookData = book.data();
          bookData.id = book.id;

          books.push(bookData);
        }
      });

      if (books.length !== 0) {
        saveItemToLocalStorage('bookTitles', books);
      } else {
        throw 'This shelf does not have books!';
      }
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      // alert('Error adding document: ', error.message);
    });
}

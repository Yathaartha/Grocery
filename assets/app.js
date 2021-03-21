const inputItem = document.getElementById("groceryItem");
const submitBtn = document.getElementById("submitBtn");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clear");
const listItems = document.querySelector("ul");

// let editFlag = false;

groceryList = [];

// class GroceryItem {
//   constructor(listItem) {
//     this.listItems = document.querySelector("ul");
//     this.listItem = listItem;
//     // this.groceryList = [];
//     this.addToList();
//     // console.log(listItem);
//     // this.renderList();
//   }

//   addToList() {
//     groceryList.push(this.listItem);
//     console.log(groceryList);
//   }

//   render() {
//     for (const grcyItem in groceryList) {
//       listItem.innerHTML = `
//       <li>
//         <span>${groceryList[grcyItem]}</span><button class= "edit"><i class="far fa-edit"></i></button>
//         <button class = "delete"><i class="far fa-trash-alt"></i></button>
//       </li>
//       `;
//       this.listItems.append(listItem);
//     }
//   }

//   List() {
//     const listItem = document.createElement("li");
//     let index;
//     for (const grcyItem in groceryList) {
//       listItem.innerHTML = `
//       <li>
//         <span>${groceryList[grcyItem]}</span><button class= "edit"><i class="far fa-edit"></i></button>
//         <button class = "delete"><i class="far fa-trash-alt"></i></button>
//       </li>
//       `;
//       index = grcyItem;
//       this.listItems.append(listItem);
//       this.listItems.style.visibility = "visible";
//       this.checkLength();
//       const editBtn = listItem.querySelector(".edit");
//       const deleteBtn = listItem.querySelector(".delete");
//       editBtn.addEventListener("click", this.editHandler);
//       deleteBtn.addEventListener("click", () => {
//         groceryList.splice(grcyItem, 1);
//       });
//       clearBtn.addEventListener("click", this.clearHandler.bind(this));
//     }
//   }

//   checkLength() {
//     if (groceryList.length > 0) {
//       clearBtn.className = "visible";
//     } else {
//       clearBtn.className = "invisible";
//     }
//   }

//   editHandler() {
//     console.log(this.listItem);
//   }

//   clearHandler() {
//     this.listItems.style.visibility = "hidden";
//     this.listItems.textContent = "";
//     groceryList = [];
//     this.checkLength();
//   }
// }

function submitHandler() {
  // if (editFlag === false) {
  if (inputItem.value) {
    groceryList.push(inputItem.value);
    console.log(groceryList);
  } else {
    alert("Enter a value to get started!");
  }
  render(groceryList);
  // } else {
  //   const editItem = currentItem.querySelector("span");
  //   editItem.textContent = `${inputItem.value}`;
  //   editFlag = false;
  // }
}

function render(groceryList) {
  const listItem = document.createElement("li");
  for (const grcyItem in groceryList) {
    listItem.innerHTML = `
      <li id="${grcyItem}">
      <div>
        <span>${groceryList[grcyItem]}</span><span class="buttons"><button class= "edit"><i class="far fa-edit fa-2x"></i></button>
        <button class = "delete"><i class="far fa-trash-alt fa-2x"></i></button><span>
      </div>
      </li>
      `;
    listItems.append(listItem);
    idTracker(grcyItem);
  }
  checkLength();
}

function idTracker(id) {
  const currentItem = document.getElementById(`${id}`);
  const deleteBtn = currentItem.querySelector(".delete");
  const editBtn = currentItem.querySelector(".edit");
  deleteBtn.addEventListener("click", () => {
    groceryList.splice(id, 1);
    currentItem.remove();
    // render(groceryList);
    checkLength();
  });
  editBtn.addEventListener("click", () => {
    editFlag = true;
    submitBtn.style.display = "none";
    saveBtn.style.display = "initial";
    saveBtn.addEventListener("click", () => {
      const editItem = currentItem.querySelector("span");
      editItem.textContent = `${inputItem.value}`;
      submitBtn.style.display = "initial";
      saveBtn.style.display = "none";
    });
  });
}

function checkLength() {
  if (groceryList.length > 0) {
    clearBtn.className = "visible";
  } else {
    clearBtn.className = "invisible";
  }
}

function clearHandler() {
  groceryList = [];
  listItems.textContent = "";
  render();
}

submitBtn.addEventListener("click", submitHandler);
clearBtn.addEventListener("click", clearHandler);

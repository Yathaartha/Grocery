const inputItem = document.getElementById("groceryItem");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clear");
groceryList = [];

class GroceryItem {
  constructor(listItem) {
    this.listItems = document.querySelector("ul");
    this.listItem = listItem;
    // this.groceryList = [];
    this.addToList();
    // console.log(listItem);
    this.renderList();
  }

  addToList() {
    groceryList.push(this.listItem);
    console.log(groceryList);
  }

  renderList() {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <li>
      <span>${this.listItem}</span><button class= "edit"><i class="far fa-edit"></i></button>
      <button class = "delete"><i class="far fa-trash-alt"></i></button>
    </li>
    `;
    this.listItems.append(listItem);
    this.listItems.style.visibility = "visible";
    this.checkLength();
    const editBtn = listItem.querySelector(".edit");
    const deleteBtn = listItem.querySelector(".delete");
    editBtn.addEventListener("click", this.editHandler);
    deleteBtn.addEventListener("click", this.deleteHandler);
    clearBtn.addEventListener("click", this.clearHandler.bind(this));
  }

  checkLength() {
    if (groceryList.length > 0) {
      clearBtn.className = "visible";
    } else {
      clearBtn.className = "invisible";
    }
  }

  editHandler() {
    console.log(this.listItem);
  }

  deleteHandler() {
    console.log(this.listItem);
  }

  clearHandler() {
    this.listItems.style.visibility = "hidden";
    this.listItems.textContent = "";
    groceryList = [];
    this.checkLength();
  }
}

function submitHandler() {
  const grocery = new GroceryItem(inputItem.value);
}

submitBtn.addEventListener("click", submitHandler);

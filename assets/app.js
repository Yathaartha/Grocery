const inputItem = document.getElementById("groceryItem");
const submitBtn = document.getElementById("submitBtn");
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
    this.listItems.innerHTML = `
    <li>
      <span>${this.listItem}</span><button><i class="far fa-edit"></i></button>
      <button><i class="far fa-trash-alt"></i></button>
    </li>
    `;
  }
}

function submitHandler() {
  const grocery = new GroceryItem(inputItem.value);
}

submitBtn.addEventListener("click", submitHandler);

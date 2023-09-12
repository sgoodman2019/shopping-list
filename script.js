const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem.value === "") {
    alert("Please add an item");
    return;
  }

  // Create list item
  const li = `<li>
    ${newItem}
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
    </button>
    </li>`;

  // add to list of items
  itemList.innerHTML += li;
};

// Event Listeners
itemForm.addEventListener("submit", addItem);

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const itemFilter = document.getElementById("filter");
const clearBtn = document.getElementById("clear");
let items = document.querySelectorAll("li");

// Function to add an item to the list
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

  items = document.querySelectorAll("li");
  itemInput.value = "";

  checkUI();
};

// Function to remove an item from the list
const removeItem = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
};

// Function to clear all items off the list
const clearItems = (e) => {
  itemList.innerHTML = "";

  items = document.querySelectorAll("li");
  checkUI();
};

// function to filter li items
const filterItems = () => {
  console.log(itemFilter.value);
  items = document.querySelectorAll("li");
  items.forEach((i) => {
    console.log(i.innerText.startsWith(itemFilter.value));
    if (i.innerText.toLowerCase().startsWith(itemFilter.value.toLowerCase())) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  });
};

// function to check if there are list items
const checkUI = () => {
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
};

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
itemInput.addEventListener("oninput", filterItems);

checkUI();

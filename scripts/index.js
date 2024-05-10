let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

const categoryList = document.getElementById("categoryList");
const menuList = document.getElementById("menuList");

window.onload = function () {
  categoryList.onchange = displayCategory;
};

function displayCategory() {
  menuList.options.length = 0;

  if (categoryList.value !== "") {
    for (const menuItem of menu[categoryList.value]) {
      let menuOption = new Option(menuItem);

      menuList.appendChild(menuOption);
    }
  } else {
    let menuOption = new Option("Choose category");

    menuList.appendChild(menuOption);
  }
}

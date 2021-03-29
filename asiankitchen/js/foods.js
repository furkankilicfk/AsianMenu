const menu = [
    {
      id: 1,
      title: "food1",
      category: "Korea",
      price: 15.99,
      img: "img/noodle-asya.jpg",
      desc: `Spicy rice cakes`,
    },
    {
      id: 2,
      title: "food2",
      category: "Japan",
      price: 7.99,
      img: "img/noodle-asya.jpg",     
      desc: `Chicken noodle soup`,
    },
    {
      id: 3,
      title: "food3",
      category: "Korea",
      price: 25.99,
      img: "img/noodle-asya.jpg",
      desc: `Boiling vegetables`,
    },
    {
      id: 4,
      title: "food4",
      category: "China",
      price: 10.99,
      img: "img/noodle-asya.jpg", 
      desc: `Dan dan noodle`,
    },
    {
      id: 5,
      title: "food5",
      category: "China",
      price: 7.99,
      img: "img/noodle-asya.jpg",
      desc: `Yangzhou style fried rice`,
    },
    {
      id: 6,
      title: "food6",
      category: "Japan",
      price: 19.99,
      img: "img/noodle-asya.jpg",
      desc: `Rice Sandwich`,
    },
    {
      id: 7,
      title: "food7",
      category: "Korea",
      price: 11.99,
      img: "img/noodle-asya.jpg",
      desc: `Black bean sauce noodle`,
    },
    {
      id: 8,
      title: "food8",
      category: "China",
      price: 18.99,
      img: "img/noodle-asya.jpg",
      desc: `Hot pepper sauce noodle`,
    },
    {
      id: 9,
      title: "food9",
      category: "Japan",
      price: 6.99,
      img: "img/noodle-asya.jpg",
      desc: `Red bean paste dessert`,
    },
  ];
  
  const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach(function (botton) {
        botton.addEventListener("click", function (e)  {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();
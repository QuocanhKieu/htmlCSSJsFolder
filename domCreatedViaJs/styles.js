const imgs_obj = {
  img_1: {
    price: 100,
    imgUrl: "./images/37df7c9c47bf8bbc77dfcf569ba3ea5a5af81eb6.jpg",
  },
  img_2: {
    price: 200,
    imgUrl: "./images/jonathan-done-girl-side-2.jpg",
  },
  img_3: {
    price: 300,
    imgUrl: "./images/maxresdefault.jpg",
  },
  img_4: {
    price: 400,
    imgUrl: "./images/moux-etamali-untitled-267-copy.jpg",
  },
  img_5: {
    price: 500,
    imgUrl: "./images/responsive points.png",
  },
};

const render = () => {
  const container = document.querySelector(".container");
  const menuList = document.createElement("ul");
  container.appendChild(menuList);
  for (let [key, value] of Object.entries(imgs_obj)) {
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");
    const para = document.createElement("p");
    const pForPrice = document.createElement("p");
    imgEl.src = value.imgUrl;
    imgEl.alt = key;
    para.textContent = `Name: ${key}`;

    pForPrice.textContent = `Price: ${value.price.toFixed(1)}`;

    liEl.append(imgEl, para, pForPrice);
    menuList.appendChild(liEl);
    container.appendChild(menuList);
  }
  console.log("here");
};

window.onload = render();

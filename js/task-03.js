const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

images.forEach(function (gallery) {
  const initLi = document.createElement("li");
  const urlImage = document.createElement("img");

  initLi.style.display = "flex";
  initLi.style.flexDirection = "column";
  initLi.style.justifyContent = "center";
  initLi.style.alignItems = "center";
  initLi.style.fontWeight = "800";

  initLi.append(urlImage);
  urlImage.src = gallery.url;
  urlImage.alt = gallery.alt;
  urlImage.style.cssText = "width: 90%; height: auto;";
  urlImage.style.borderRadius = "25px";
  urlImage.insertAdjacentHTML("afterend", gallery.alt);

  const imagesPrint = document.querySelector(".gallery");

  imagesPrint.append(initLi);
  imagesPrint.style.display = "flex";
});
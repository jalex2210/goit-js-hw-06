const categoriesList = document.querySelector('#categories');
const categoriesElements= categoriesList.querySelectorAll('.item');
const categoriesNumbers = categoriesElements.length;
console.log(`numero de categorias: ${categoriesNumbers}` );

categoriesElements.forEach(categoryItem => {
    const titleCategory = categoryItem.querySelector('h2').textContent;
    const elementCategory = categoryItem.querySelectorAll('ul > li').length;

    console.log(`Categoria: ${titleCategory}`);
    console.log(`numero de elementos: ${elementCategory}`);

});
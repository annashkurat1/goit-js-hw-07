const category = document.querySelectorAll('#categories .item');
console.log(`numbers category: ${category.length}`);
category.forEach((categ) => {
  const title = categ.querySelector(`h2`).textContent;
  const list = categ.querySelectorAll(`ul li`).length;
  console.log(`title: ${title}`);
  console.log(`elements: ${list}`);
});

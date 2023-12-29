let listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach(item => {
    let categoryName = item.querySelector('h2').textContent;
    let itemCount = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
})
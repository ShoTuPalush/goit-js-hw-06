const listCategories = document.querySelector('#categories')
const itemCategories = listCategories.querySelectorAll('li.item')
console.log(`Number of categories: ${itemCategories.length}`)

itemCategories.forEach(item => {
    const heading = item.querySelector('h2').textContent
    const subCategories = item.querySelectorAll('ul>li').length
    console.log(`Category: ${heading}`)
    console.log(`Elements: ${subCategories}`)
});
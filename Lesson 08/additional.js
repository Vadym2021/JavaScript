// написати рекурсивну функцію, яка збирає всі назви
// класів з файлу rules.html в окремий масив.
// масив вивести в консоль
let classmas = [];

function recursion(startElement) {
    // console.log(startElement.className);
    if (startElement.className) {

        classmas.push(startElement.className)
    }
    if (startElement.children.length) {
        for (const element of startElement.children) {
            recursion(element);

        }
    }

}

console.log(classmas)
recursion(document.body)
console.log(classmas)
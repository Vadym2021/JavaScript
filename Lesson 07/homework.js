// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

class User {
    constructor(id, name, surname, email, phone) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;

    }
}

let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let name = ['oleg', 'igor', 'svyat', 'lenya', 'yemelya', 'gena', 'jora', 'ostap', 'shurik', 'hariton'];
let surname = ['alpha', 'beta', 'gamma', 'kappa', 'iota', 'zeta', 'sigma', 'delta', 'omicron', 'omega'];
let email = ['alpha@gmail.com', 'beta@gmail.com', 'gamma@gmail.com', 'kappa@gmail.com', 'iota@gmail.com', 'zeta@gmail.com', 'sigma@gmail.com', 'delta@gmail.com', 'omicron@gmail.com', 'omega@gmail.com'];
let phone = [111, 222, 333, 444, 555, 666, 777, 888, 999, 101010];


let Users = [];
console.log(typeof name)
masscreator = (id, name) => {
    for (let i = 0; i < name.length; i++) {
        // debugger
        let user = new User(`${id[i]}`, name[i], surname[i], email[i], phone[i])
        // console.log(user)
        Users.push(user)
    }
    console.log(Users)
    // document.write(`${Users}`)
}

masscreator(id, name, surname, email, phone);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let pairusers = []
masfilter = (arr) => {

    return arr.filter(value => {
        if (value.id % 2 === 0) {
            pairusers.push(value)
            // console.log(value)
        }
        // console.log(pairusers);
    })

}

masfilter(Users);
console.log(pairusers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
sorter = (arr) => {
    return arr.sort((a, b) => a.id - b.id);
}
console.log(Users)
sorter(Users)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

let order = [['el', 'wiskey', 'meat'],
    ['beer', 'cola', 'soap'],
    ['beer', 'cola', 'soap', 'water'],
    ['beer', 'cola', 'soap', 'swith', 'book'],
    ['beer', 'cola', 'soap'],
    ['beer', 'cola', 'soap', 'led lamp'],
    ['beer', 'cola', 'soap', 'wiskey'],
    ['el', 'wiskey', 'meat', 'soap', 'apple', 'chicken', 'orange'],
    ['beer', 'cola', 'soap', 'brush', 'needle'],
    ['beer', 'cola', 'soap', 'cornflakes', 'drill', 'towel']];
console.log(order)

class Client extends User {

    order;

    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}


let Clients = []
clientcreator = (field) => {
    for (let i = 0; i < field.length; i++) {
        // debugger
        let client = new Client(`${id[i]}`, name[i], surname[i], email[i], phone[i], order[i])
        // console.log(user)
        Clients.push(client)
    }
    console.log(Users)
    // document.write(`${Users}`)
}

clientcreator(name);
Client = new Client(1, 'ard', 'twik', 'a@u.ua');
console.log(Clients)
// створити пустий масив, наповнити його 10 об'єктами Client

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

Clientsorter = (arr) => {
    return arr.sort((a, b) => b.order.length - a.order.length);
}
console.log('Clients FINAL TASK');
console.log(Clientsorter(Clients));
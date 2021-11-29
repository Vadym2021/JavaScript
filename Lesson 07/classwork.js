// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {

    constructor(model, marka, max_speed, manufacture_date, engine) {
        this.model = model;
        this.marka = marka;
        this.max_speed = max_speed;
        this.manufacture_date = manufacture_date;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)

    }

    info() {
        console.log(`model: ${this.model}`)
        console.log(`marka: ${this.marka}`)
        console.log(`max_speed: ${this.max_speed}`)
        console.log(`manufacture_date: ${this.manufacture_date}`)
        console.log(`engine: ${this.engine}`)

    }

    newSpeed(speed) {
        this.max_speed = this.max_speed + speed
        console.log(`Швидкість після чип тюнінгу ${this.max_speed} км на годину`)
    }

    newValue(value) {
        this.manufacture_date = value
        console.log(`Дата випуску ${this.manufacture_date}`)
        return this.manufacture_date

    }

    driver(name, age) {
        this.driver = {name, age}
        console.log(car)
    }
}

let car = new Car('Caddy', 'VW', 120, '22.12.2009', '1,6')
car.drive()
car.info()
car.newSpeed(50)
car.newValue(`23.12.2012`)
car.driver(`ivan`, 28)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Human {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human {


    constructor(name, age, shoe_size) {
        super(name, age);
        this.shoe_size = shoe_size;
    }
}

class Prince extends Human {

    constructor(name, age, found_shoe_size) {
        super(name, age);
        this.found_shoe_size = found_shoe_size;
    }
}

let Cinderellas = []
Cinderellaname = [`Cinderella01`,
    `Cinderella02`,
    `Cinderella03`,
    `Cinderella04`,
    `Cinderella05`,
    `Cinderella06`,
    `Cinderella07`,
    `Cinderella08`,
    `Cinderella09`,
    `Cinderella10`,
]
Cinderellaage = [23, 44, 56, 43, 19, 16, 17, 13, 22, 33]
Cinderellashoesize = [11, 12, 13, 14, 15, 16, 17, 14, 19, 20]

Cinderellacreator = (field) => {
    for (let i = 0; i < field.length; i++) {
        // debugger
        let cinderella = new Cinderella(`${Cinderellaname[i]}`,`${Cinderellaage[i]}`,Cinderellashoesize[i])
        // let cinderella = new Cinderella(`${Cinderellashoesize[i]}`)
        // console.log(user)
        Cinderellas.push(cinderella)
        // Cinderellas.push(human)
        // Cinderellas.push(cinderella)
    }
    console.log(Cinderellas)
    // document.write(`${Users}`)
}

Cinderellacreator(Cinderellaname);


// console.log(Cinderellas)

let prince = new Prince(`Ayk`, 24, 14)

Cinderella_search = (arr) => {
    let search_shoe_size = prince.found_shoe_size;
    for (i = 0; i < arr.length; i++) {

        if (search_shoe_size === arr[i].shoe_size) {
            // console.log(arr[i])

            console.log(arr[i].shoe_size)
            console.log(arr[i])
            console.log(`Принцу підходить принцесса ${arr[i].name} вік ${arr[i].age} розмір ноги ${arr[i].shoe_size}` )
        }
    }

}

Cinderella_search(Cinderellas)


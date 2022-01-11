let arr = [
    {day: 'Monday', workStatus: true},
    {day: 'Tuesday', workStatus: true},
    {day: 'Wednesday', workStatus: false},
    {day: 'Thursday', workStatus: true},
    {day: 'Friday', workStatus: true},
    {day: 'Saturday', workStatus: false},
    {day: 'Sunday', workStatus: false}
]

// let arr = [1,2,3,4,5]

let trigger = false

function findWorkDay(weekDay, index = 0) {
    if (index >= arr.length) {
        return findWorkDay(weekDay, 0);
    }

    if (weekDay === arr[index].day && arr[index].workStatus === true) {
        return console.log('You may visit us on' + ' ' + arr[index].day)
    }

    if (weekDay === arr[index].day && arr[index].workStatus === false) {
        trigger = true
        return findWorkDay(weekDay, ++index)
    }

    if (arr[index].workStatus === true && trigger === true) {
        console.log('Sorry, but ' + weekDay + ' is day off. You may visit us on' + ' ' + arr[index].day)
        return
    }
    findWorkDay(weekDay, ++index)
}


findWorkDay('Saturday')
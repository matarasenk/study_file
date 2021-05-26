const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');


function getFormattedDate(dateObject) {
    let options = { weekday: 'long' }



    let myDate = {
        year: dateObject.getFullYear(),
        month: dateObject.getMonth() + 1,
        date: dateObject.getDate(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        seconds: dateObject.getSeconds(),
        weekday: dateObject.toLocaleString("en-US", options)
    }

    function hour(a) {
        return String(a).length == 1 ? '0' + a : a
    }
    return `${myDate.date}.${myDate.month}.${myDate.year} ${hour(myDate.hours)}:${hour(myDate.minutes)} ${myDate.weekday}`
}

console.log(getFormattedDate(date0));
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));


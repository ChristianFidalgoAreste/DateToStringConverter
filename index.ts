import { DateToStringConverter } from "./models/DateToStringConverter";

const dateToStringConverter = new DateToStringConverter();
const date = new Date();
const date2 = new Date('01/01/23');
const date3 = new Date('07/28/14');

console.log (dateToStringConverter.transformDateToString(date));
console.log (dateToStringConverter.transformDateToString(date2));
console.log (dateToStringConverter.transformDateToString(date3));
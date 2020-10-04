export default function createDefaultCalendar() {
  return [
    {
      name: 'January',
      shortName: 'Jan',
      days: createArray(31)
    },
    {
      name: 'February',
      shortName: 'Feb',
      days: createArray(isLeapYear() ? 29 : 28)
    },
    {
      name: 'March',
      shortName: 'Mar',
      days: createArray(31)
    },
    {
      name: 'April',
      shortName: 'Apr',
      days: createArray(30)
    },
    {
      name: 'May',
      shortName: 'May',
      days: createArray(31)
    },
    {
      name: 'June',
      shortName: 'Jun',
      days: createArray(30)
    },
    {
      name: 'July',
      shortName: 'Jul',
      days: createArray(31)
    },
    {
      name: 'August',
      shortName: 'Aug',
      days: createArray(31)
    },
    {
      name: 'September',
      shortName: 'Sep',
      days: createArray(30)
    },
    {
      name: 'October',
      shortName: 'Oct',
      days: createArray(31)
    },
    {
      name: 'November',
      shortName: 'Nov',
      days: createArray(30)
    },
    {
      name: 'December',
      shortName: 'Dec',
      days: createArray(31)
    }
  ];
};
const createArray = (length) => Array.from({length}, () => false); 
const isLeapYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
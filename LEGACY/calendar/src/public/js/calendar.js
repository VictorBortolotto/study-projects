var month = 0
var year = 0

const nextButtonClick = () => {
  month += 1
  if(month > 11) {
    year += 1
    month = 0
  }

  buildCalendar(month, year)
}

const previousButtonClick = () => {
  month -= 1
  if(month < 0) {
    year -= 1
    month = 11
  }

  buildCalendar(month, year)
}

const onClickButtonDay = (id) => {
  let buttonDay = document.getElementById(id)
  let date = new Date(year, month, buttonDay.textContent);
  showToast(date.toLocaleDateString())
}

const buildCalendar = (month, year) => {
  let daysInWeeks = getAllDaysMonthInWeeks(year, month)

  let daysMappingPositions = getMappingOfCalendarDaysPositions()

  let logicalCalendar = createLogicalCalendar(daysMappingPositions, daysInWeeks)
  
  fillHTMLCalendar(month, year, logicalCalendar)
}

const fillHTMLCalendar = (month, year, logicalCalendar) => {
  for(let day = 0; day < logicalCalendar.length; day++){
    let daysInCalendar = document.getElementById("day-button-" + day)

    if(logicalCalendar[day].number > 0) {
      daysInCalendar.innerHTML = logicalCalendar[day].number
      daysInCalendar.style.display = 'flex'
    }else {
      daysInCalendar.innerHTML = ''
      daysInCalendar.style.display = 'none'
    }
  }

  getMonthName(month, year)
  this.month = month
  this.year = year
}


const createLogicalCalendar = (daysMappingPositions, daysInWeeks) => {
  let calendarIndex = 0
  for (let daysInCalendar = 0; daysInCalendar < daysMappingPositions.length; daysInCalendar++){
    if (daysMappingPositions[daysInCalendar].nameLowerCase === daysInWeeks[0].nameLowerCase && daysInCalendar <= calendarIndex) {
      for(let daysInWeek = 0; daysInWeek < daysInWeeks.length; daysInWeek++){
        if(calendarIndex < daysMappingPositions.length){
          daysMappingPositions[calendarIndex].name = daysInWeeks[daysInWeek].name
          daysMappingPositions[calendarIndex].nameLowerCase = daysInWeeks[daysInWeek].nameLowerCase + calendarIndex
          daysMappingPositions[calendarIndex].number = daysInWeeks[daysInWeek].number
        }
        calendarIndex += 1
      }
      daysInCalendar = calendarIndex 
      daysMappingPositions[daysInCalendar].nameLowerCase = daysMappingPositions[daysInCalendar].nameLowerCase + daysInCalendar
    }else{
      calendarIndex += 1
      daysMappingPositions[daysInCalendar].nameLowerCase = daysMappingPositions[daysInCalendar].nameLowerCase + daysInCalendar
    }
  }

  return daysMappingPositions
}

const getAllDaysMonthInWeeks = (year, month) => {
  let day = {
    name: "",
    number: 0,
    nameLowerCase: ""
  }

  let date = new Date(year, month, 1);
  const daysInWeek = []
  while(date.getMonth() === month){
    for(let i = 0; i < days().length; i++){
      if(date.toUTCString().indexOf(days()[i].dayUpperCase) === 0){
        day.name = days()[i].dayUpperCase
        day.number = date.getDate()
        day.nameLowerCase = days()[i].dayLowerCase
        daysInWeek.push(day)
      }
    }
    day = {}
    date.setDate(date.getDate() + 1)
  }

  return daysInWeek
}

const getMappingOfCalendarDaysPositions = () => {
  let day = {
    name: "",
    number: 0,
    nameLowerCase: ""
  }

  let countDays = 0
  let daysPositionsInCalendar = []
  for (let k = 0; k < 42; k++){
    if(countDays < 7){
      day.name = days()[countDays].dayUpperCase
      day.number = 0
      day.nameLowerCase = days()[countDays].dayLowerCase
      daysPositionsInCalendar.push(day)
    }else{
      countDays = 0
      day.name = days()[countDays].dayUpperCase
      day.number = 0
      day.nameLowerCase = days()[countDays].dayLowerCase
      daysPositionsInCalendar.push(day)
    }
    day = {}
    countDays += 1
  }
  return daysPositionsInCalendar
}

const days = () => {
  let days = [
    {dayLowerCase: "sun-", dayUpperCase: "Sun"},
    {dayLowerCase: "mon-", dayUpperCase: "Mon"},
    {dayLowerCase: "tue-", dayUpperCase: "Tue"},
    {dayLowerCase: "wed-", dayUpperCase: "Wed"},
    {dayLowerCase: "thu-", dayUpperCase: "Thu"},
    {dayLowerCase: "fri-", dayUpperCase: "Fri"},
    {dayLowerCase: "sat-", dayUpperCase: "Sat"}
  ]

  return days
}

const getMonthName = (month, year) => {

  let actualMonth = document.getElementById('actual-month')

  const monthNameList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  actualMonth.innerHTML = monthNameList[month] + ", " + year
}
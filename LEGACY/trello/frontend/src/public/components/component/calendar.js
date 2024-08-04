var month = 0
var year = 0
var calendarId = ""

const createCalendarComponent = () => {
  return `<div class="header-calendar">
            <button class="previous-button" onclick="previousButtonClick()"> <img src="../icons/caret-left-white.svg" alt="" srcset=""> </button>
            <h1 class="date" id="actual-month"></h1>
            <button class="next-button" onclick="nextButtonClick()"><img src="../icons/caret-right-white.svg" alt="" srcset=""></button>
          </div>
          <div class="content-calendar">
            <div class="names">
              <ul class="days-name">
                <li class="days-of-week">Sun</li>
                <li class="days-of-week">Mon</li>
                <li class="days-of-week">Tue</li>
                <li class="days-of-week">Wed</li>
                <li class="days-of-week">Thu</li>
                <li class="days-of-week">Fri</li>
                <li class="days-of-week">Sat</li>
              </ul>
            </div>
            <ul class="day-list">
              <li class="week-day" id="sun-0"><button class="day" id="day-button-0" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="mon-1"><button class="day" id="day-button-1" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="tus-2"><button class="day" id="day-button-2" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="wed-3"><button class="day" id="day-button-3" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="thu-4"><button class="day" id="day-button-4" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="fri-5"><button class="day" id="day-button-5" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="sat-6"><button class="day" id="day-button-6" onclick="onClickButtonDay(this.id)"></button></li>

              <li class="week-day" id="sun-7"><button class="day" id="day-button-7" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="mon-8"><button class="day" id="day-button-8" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="tus-9"><button class="day" id="day-button-9" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="wed-10"><button class="day" id="day-button-10" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="thu-11"><button class="day" id="day-button-11" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="fri-12"><button class="day" id="day-button-12" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="sat-13"><button class="day" id="day-button-13" onclick="onClickButtonDay(this.id)"></button></li>

              <li class="week-day" id="sun-14"><button class="day" id="day-button-14" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="mon-15"><button class="day" id="day-button-15" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="tus-16"><button class="day" id="day-button-16" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="wed-17"><button class="day" id="day-button-17" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="thu-18"><button class="day" id="day-button-18" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="fri-19"><button class="day" id="day-button-19" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="sat-20"><button class="day" id="day-button-20" onclick="onClickButtonDay(this.id)"></button></li>

              <li class="week-day" id="sun-21"><button class="day" id="day-button-21" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="mon-22"><button class="day" id="day-button-22" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="tus-23"><button class="day" id="day-button-23" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="wed-24"><button class="day" id="day-button-24" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="thu-25"><button class="day" id="day-button-25" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="fri-26"><button class="day" id="day-button-26" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="sat-27"><button class="day" id="day-button-27" onclick="onClickButtonDay(this.id)"></button></li>

              <li class="week-day" id="sun-28"><button class="day" id="day-button-28" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="mon-29"><button class="day" id="day-button-29" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="tus-30"><button class="day" id="day-button-30" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="wed-31"><button class="day" id="day-button-31" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="thu-32"><button class="day" id="day-button-32" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="fri-33"><button class="day" id="day-button-33" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="sat-34"><button class="day" id="day-button-34" onclick="onClickButtonDay(this.id)"></button></li>

              <li class="week-day" id="sun-35"><button class="day" id="day-button-35" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="mon-36"><button class="day" id="day-button-36" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="tus-37"><button class="day" id="day-button-37" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="wed-38"><button class="day" id="day-button-38" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="thu-39"><button class="day" id="day-button-39" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="fri-40"><button class="day" id="day-button-40" onclick="onClickButtonDay(this.id)"></button></li>
              <li class="week-day" id="sat-41"><button class="day" id="day-button-41" onclick="onClickButtonDay(this.id)"></button></li>
            </ul>
          </div>
          <div class="calendar-footer">
            <button class="calendar-cancel-button" onclick="onClickCancel()">Cancel</button>
          </div>`
}

const onClickShowCalendar = (id) => {
  let calendarModal = document.getElementById('calendar-modal')
  if (calendarModal.style.display === '') {
    if (id.indexOf('btn-') >= 0) id = id.replace('btn-', '');
    calendarId = id
    openCalendar()
  } else {
    closeCalendar()
  }
}

const onClickCancel = () => {
  closeCalendar()
}

const openCalendar = () => {
  let calendarModal = document.getElementById('calendar-modal')
  calendarModal.style.display = 'flex'
  calendarModal.innerHTML = createCalendarComponent() 
  buildCalendar(new Date().getMonth(), new Date().getFullYear())
}

const closeCalendar = () => {
  let calendarModal = document.getElementById('calendar-modal')
  calendarModal.style.display= ''
  calendarModal.innerHTML = ''
  calendarId = ""
  let newTaskNameInput = document.getElementById('new-task-name-input');
  newTaskNameInput.focus();
}

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
  let calendarField = document.getElementById(calendarId)
  let date = new Date(year, month, buttonDay.textContent)
  
  if (date < new Date()) {
    showSnackbar('warning', 'Selected date cannot be less than current date!');
    return
  }
  
  let initialDate = getInitialDate()
  if (date < new Date(initialDate) && calendarId == 'calendar-end-date') {
    showSnackbar('warning', 'End date cannot be less than start date!');
    return
  }

  let endDate = getEndDate()
  if (new Date(endDate) < date && calendarId == 'calendar-initial-date') {
    showSnackbar('warning', 'Start date cannot be greater than end date!');
    return
  }
  
  calendarField.value = date.toLocaleDateString()

  closeCalendar()
}

const getInitialDate = () => {
  let calendarInitialDate = document.getElementById('calendar-initial-date')
  let initialDate = calendarInitialDate.value
  let date = getDateParts(initialDate)
  return date
}

const getEndDate = () => {
  let calendarEndDate = document.getElementById('calendar-end-date')
  let endDate = calendarEndDate.value
  let date = getDateParts(endDate)
  return date
}

const getDateParts = (fullDate) => {
  let dateParts = fullDate.split("/")
  let date = ""
  date = dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2]
  return date
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
const createCalendarComponent = () => {
  return `<div class="header">
            <button class="previous-button" onclick="previousButtonClick()"> <img src="../assets/caret-left-fill.svg" alt="" srcset=""> </button>
            <h1 class="date" id="actual-month"></h1>
            <button class="next-button" onclick="nextButtonClick()"><img src="../assets/caret-right-fill.svg" alt="" srcset=""></button>
          </div>
          <div class="content">
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
          </div>`
}

const onClickShowCalendar = () => {
  let calendarModal = document.getElementById('calendar-modal')
  if (calendarModal.style.display === '') {
    calendarModal.style.display = 'flex'
    calendarModal.innerHTML = createCalendarComponent() 
    buildCalendar(new Date().getMonth(), new Date().getFullYear())
  } else {
    calendarModal.style.display= ''
    calendarModal.innerHTML = ''
  }
}
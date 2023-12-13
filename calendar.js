function createCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendar = '<table><thead><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr></thead><tbody><tr>';

    const startDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < startDay; i++) {
        calendar += '<td></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendar += `<td data-day="${day}">${day}</td>`;
        if ((day + startDay) % 7 === 0) {
            calendar += '</tr><tr>';
        }
    }
    calendar += '</tr></tbody></table>';

    document.getElementById('calendar').innerHTML = calendar;
}

let startDate = null;
let endDate = null;
let scheduleCount = 0;

function onDayClick(e) {
    console.log("onDayClick 호출됨", e.target);
    const day = e.target.getAttribute('data-day');
    if (!day) return;

    if (!startDate) {
        clearSelection();
        startDate = day;
        e.target.classList.add('selected');
    } else if (!endDate) {
        endDate = day;
        createScheduleBar();
        clearSelection()
    }
}

function clearSelection() {
    startDate = null;
    endDate = null;
    document.querySelectorAll('#calendar td').forEach(td => td.classList.remove('selected'));
}

function createScheduleBar() {
    // 직사각형 모양을 생성합니다.
    const scheduleBarContainer = document.createElement("div");
    scheduleBarContainer.className = "schedule-bar-container";

    // 달력 테이블의 위치 및 크기를 가져옵니다.
    const calendarTable = document.getElementById("calendar");
    const calendarRect = calendarTable.getBoundingClientRect();

    // 시작 날짜와 종료 날짜의 위치 및 크기를 계산합니다.
    const startCell = document.querySelector(`#calendar td[data-day='${startDate}']`);
    const endCell = document.querySelector(`#calendar td[data-day='${endDate}']`);
    const startRect = startCell.getBoundingClientRect();
    const endRect = endCell.getBoundingClientRect();

    
    scheduleBarContainer.style.left = (calendarRect.left) + "px";
    scheduleBarContainer.style.top = (calendarRect.top) + "px";
    // 주별로 직사각형을 생성합니다.
    let currentRow = startCell.parentElement;
    while (currentRow) {
        const scheduleBar = document.createElement("div");
        scheduleBar.className = "schedule-bar";

        const firstCell = (currentRow === startCell.parentElement) ? startCell : currentRow.cells[0];
        const lastCell = (currentRow === endCell.parentElement) ? endCell : currentRow.cells[currentRow.cells.length - 1];

        const firstRect = firstCell.getBoundingClientRect();
        const lastRect = lastCell.getBoundingClientRect();

        scheduleBar.style.position = "absolute";
        scheduleBar.style.left = (firstRect.left) + "px";
        scheduleBar.style.top = (firstRect.top + calendarRect.top+423+(scheduleCount%4)*9) + "px"; // 표 가로 68px
     //  scheduleBar.style.top = (firstRect.top) + "px"; 
    //    scheduleBar.style.left = (firstRect.left) + "px";
     //   scheduleBar.style.top = (firstRect.top) + "px";

        scheduleBar.style.width = (lastRect.right - firstRect.left) + "px";
        scheduleBar.style.height = 10 + "px";
        scheduleBar.style.backgroundColor = changeColor( scheduleBar,scheduleCount);

        scheduleBarContainer.appendChild(scheduleBar);

        if (currentRow === endCell.parentElement) break;
        currentRow = currentRow.nextElementSibling;
    }


    scheduleCount+=1;
    // 직사각형 컨테이너를 달력에 추가합니다.
    calendarTable.appendChild(scheduleBarContainer);
}

function createsubmitScheduleBar(name, start, end) {
    // 직사각형 모양을 생성합니다.
    const scheduleBarContainer = document.createElement("div");
    scheduleBarContainer.className = "schedule-bar-container";

    // 달력 테이블의 위치 및 크기를 가져옵니다.
    const calendarTable = document.getElementById("calendar");
    const calendarRect = calendarTable.getBoundingClientRect();

    // 시작 날짜와 종료 날짜의 위치 및 크기를 계산합니다.
    const startCell = document.querySelector(`#calendar td[data-day='${start}']`);
    const endCell = document.querySelector(`#calendar td[data-day='${end}']`);
    const startRect = startCell.getBoundingClientRect();
    const endRect = endCell.getBoundingClientRect();

    // 주별로 직사각형을 생성합니다.
    let currentRow = startCell.parentElement;
    while (currentRow) {
        const scheduleBar = document.createElement("div");
        scheduleBar.className = "schedule-bar";

        const firstCell = (currentRow === startCell.parentElement) ? startCell : currentRow.cells[0];
        const lastCell = (currentRow === endCell.parentElement) ? endCell : currentRow.cells[currentRow.cells.length - 1];

        const firstRect = firstCell.getBoundingClientRect();
        const lastRect = lastCell.getBoundingClientRect();

     //   scheduleBar.style.position = "flex";
      //  scheduleBar.style.left = (firstRect.left - calendarRect.left) + "px";
       // scheduleBar.style.top = (firstRect.top - calendarRect.top) + "px";
        //scheduleBar.style.width = (lastRect.right - firstRect.left) + "px";
        //scheduleBar.style.height = 10 + "px";

        scheduleBar.style.position = "absolute";
        scheduleBar.style.left = (firstRect.left) + "px";
        scheduleBar.style.top = (firstRect.top + calendarRect.top+385+(scheduleCount%4)*9) + "px";
        scheduleBar.style.width = (lastRect.right - firstRect.left) + "px";
        scheduleBar.style.height = 10 + "px";
        scheduleBar.style.backgroundColor = changeColor( scheduleBar,scheduleCount);

        scheduleBarContainer.appendChild(scheduleBar);
        
        if (currentRow === endCell.parentElement) break;
        currentRow = currentRow.nextElementSibling;
    }

    scheduleCount+=1;
    // 직사각형 컨테이너를 달력에 추가합니다.
    calendarTable.appendChild(scheduleBarContainer);
}
function changeColor( scheduleBar,scheduleCount) {
    switch (scheduleCount%4) {
        case 1:
            scheduleBar.style.backgroundColor = 'rgb(0, 98, 255)';
            break;
        case 2:
            scheduleBar.style.backgroundColor = 'rgb(128, 0, 255)';
            break;
        case 3:
            scheduleBar.style.backgroundColor = 'rgb(255, 0, 89)';
            break;
        default:
            scheduleBar.style.backgroundColor = 'rgb(26, 255, 0)';
            break;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    createCalendar();
});
document.getElementById('calendar').addEventListener('click', onDayClick);
document.oncontextmenu = clearSelection


document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 폼에서 데이터 추출
    const scheduleName = document.getElementById('scheduleName').value;
    const startD = document.getElementById('startDate').value.getAttribute('day');
    const endD = document.getElementById('endDate').value.getAttribute('day');
    
   
    // 스케줄 바 생성 및 추가
    clearSelection();
    createsubmitScheduleBar(scheduleName, startD, endD);
    clearSelection();
});


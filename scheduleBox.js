
function createScheduleBox(){
    const scheduleBoxContainer = document.createElement("div");
    scheduleBoxContainer.className = "schedule-box-container";

    const box = document.createElement("img");
    box.style.width=200+"px";
    box.style.height=200+"px";

  

    document.getElementById('ScheduleBox').appendChild(box)
}



document.addEventListener('DOMContentLoaded', function() {
    createScheduleBox();
});

document.getElementById('scheduleBox').addEventListener('click', onDayClick);
document.oncontextmenu = clearSelection
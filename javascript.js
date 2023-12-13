document.getElementById('mainimagenav').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.getElementById('pageintronav').addEventListener('click', function() {
    window.location.href = 'pageintro.html'; 
});
document.getElementById('calendarnav').addEventListener('click', function() {
    window.location.href = 'calendar.html';
});
document.getElementById('schedulenav','mainScheduleboxbutton').addEventListener('click', function() {
    window.location.href = 'schedule.html'; 
});
document.getElementById('aboutnav').addEventListener('click', function() {
    window.location.href = 'about.html';
});
document.getElementById('loginnav').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('로그인 시도:', username, password);
    // 여기에 로그인 로직 추가
});

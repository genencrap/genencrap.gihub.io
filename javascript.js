document.getElementById('mainimagenav').addEventListener('click', function() {
    window.location.href = 'main_html.html'; // 로그인 페이지로 이동
});
document.getElementById('pageintronav').addEventListener('click', function() {
    window.location.href = 'pageintro.html'; // 페이지 소개 페이지로 이동
});
document.getElementById('calendarnav').addEventListener('click', function() {
    window.location.href = 'calendar.html'; // 로그인 페이지로 이동
});
document.getElementById('schedulenav','mainScheduleboxbutton').addEventListener('click', function() {
    window.location.href = 'schedule.html'; // 페이지 소개 페이지로 이동
});
document.getElementById('aboutnav').addEventListener('click', function() {
    window.location.href = 'about.html'; // 로그인 페이지로 이동
});
document.getElementById('loginnav').addEventListener('click', function() {
    window.location.href = 'login.html'; // 로그인 페이지로 이동
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('로그인 시도:', username, password);
    // 여기에 로그인 로직 추가
});
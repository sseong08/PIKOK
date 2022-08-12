// document.getElementById("time_submit").onclick = doFunction;

function time() {
    var s = document.getElementById('hour');

    var hour = (s.options[s.selectedIndex].value);
    console.log(hour);

    var w = document.getElementById('min');

    var min = (w.options[w.selectedIndex].value);
    console.log(min);

    var d = document.getElementById('ampm');
    var ampm = d.options[d.selectedIndex].value;
    console.log(ampm);

    var test = { 'hour': hour, 'minute': min, 'ampm': ampm };

    if (hour =!(s.options[s.selectedIndex].value == 'none') , min =!(w.options[w.selectedIndex].value == 'none')) {
        //console.log({ 'hour': hour, 'minute': min, 'ampm': ampm })
        localStorage.setItem('sleeptime', JSON.stringify(test));
        location.href = 'suv.html';
    } else {
        alert('시간과 분을 선택해주세요.');
        console.log('시간,분');
    }
}
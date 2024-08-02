let paragraph = document.getElementById('paragraph');

document.getElementById('count').addEventListener('click', () => {
    paragraph.innerHTML = '';
    let start = Number(document.getElementById('start').value);
    let end = Number(document.getElementById('end').value);
    let step = Number(document.getElementById('step').value);

    if ((start == 0 && end == 0) || (step == 0)) {
        paragraph.innerHTML = 'Type a valid number.';
    } else {
        if (start > end) {
            while (start >= end) {
                paragraph.innerHTML += `<i class="fa-solid fa-stopwatch"></i> ${start} `;
                start -= step;
            }
        } else if (start < end) {
            while (start <= end) {
                paragraph.innerHTML += `<i class="fa-solid fa-stopwatch"></i> ${start} `;
                start += step;
            }
        }
        paragraph.innerHTML += `<i class="fa-solid fa-flag-checkered"></i>`;
    }
})
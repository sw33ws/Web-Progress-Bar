const timer = ms => new Promise(res => setTimeout(res, ms))

const bar = document.querySelector('.bar');

async function ProgressBar() {
    for (x = 0; x < 11; x++) {
        bar.style.width = (x*10 + '%');
        await timer(1000);
    }
    const content = document.querySelector('.main');
    content.style.visibility = "visible";
}

ProgressBar();
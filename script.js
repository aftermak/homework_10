const btn = document.getElementById('btn');
const paragraph = document.getElementById('text');

function clickFunc () {
    if (paragraph.hidden){
        paragraph.hidden = false;
        btn.innerText = 'Hide Text'
    } else {
        paragraph.hidden = true;
        btn.innerText = 'Show Text'
    }
};

btn.onclick = clickFunc;


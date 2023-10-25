const p1 = document.getElementById('p1');
const body = document.body;
p1.addEventListener('click', (e) => {
    // e.stopPropagation();
    alert('激活');
});
body.addEventListener('click', (e) => {
    alert('取消');
});

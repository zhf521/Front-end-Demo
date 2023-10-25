const div = document.getElementById('div');
div.addEventListener('click', (e) => {
    const target = e.target;
    if (target.nodeName === 'A') {
        alert(target.innerHTML);
    }
});

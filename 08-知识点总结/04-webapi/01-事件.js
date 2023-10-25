// const btn = document.getElementById('btn');
// btn.addEventListener('click', (event) => {
//     console.log('click');
// });

function bindEvent(element, type, fn) {
    element.addEventListener(type, fn);
}

const a = document.getElementById('link');
bindEvent(a, 'click', (e) => {
    e.preventDefault(); //阻止默认行为
    alert('clicked');
});

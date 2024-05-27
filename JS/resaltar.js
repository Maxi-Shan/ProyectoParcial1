function resaltarSpan() {
    var spans = document.querySelectorAll('span');
    for (let i = 0; i < spans.length; i++){
    spans[i].classList.add('resaltar')
    }
}  
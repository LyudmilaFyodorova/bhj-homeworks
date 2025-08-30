const editor = document.getElementById('editor');

let savedText = localStorage.getItem('text');

if (savedText) {
    editor.value = savedText;
}

localStorage.setItem('text', editor.value);

const downloadButtons = document.querySelectorAll(".download")

// let btnDownload = document.getElementById('btn');
// let img = document.getElementById('img1');
downloadButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let imagePath = btn.getAttribute("download")
        let fileName = getFileName(imagePath)
        saveAs(imagePath, fileName);
    })
})
btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}


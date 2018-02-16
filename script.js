let dropArea = document.getElementById('drop-area')


// dropArea.addEventListener('dragenter', handlerFunction, false)
// dropArea.addEventListener('dragleave', handlerFunction, false)
// dropArea.addEventListener('dragover', handlerFunction, false)
// dropArea.addEventListener('drop', handlerFunction, false)


;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})

function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}



;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})

function highlight(e) {
    dropArea.classList.add('highlight')
    console.log('どらっぐイン！');
}

function unhighlight(e) {
    dropArea.classList.remove('highlight')
    console.log('どろっぷアウト！');
}


dropArea.addEventListener('drop', handleDrop, false)

// ドロップ処理
function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    handleFiles(files) {
        ([...files]).forEach(uploadFile)
    }
}

// アップロード
function uploadFile(file) {
    let url= 'YOUR URL HERE'
    let formData = new formData()

    formData.append('file', file)


    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(() => {/* Done */})
    .catch(() => {/*Error*/})
}
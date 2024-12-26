let bezier_elements: {
    load_index: HTMLButtonElement
}

window.addEventListener('load', () => {
    bezier_elements = {
        load_index: document.getElementById('load_index') as HTMLButtonElement
    }

    bezier_elements.load_index.addEventListener('click', () => {
        window.api.load_index()
    })
})
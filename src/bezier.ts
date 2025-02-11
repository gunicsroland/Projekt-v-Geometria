let bezier_elements: {
    calculatorDiv: HTMLDivElement,
    options: Desmos.CalculatorOptions,
    point_num_node: HTMLInputElement,
    list: HTMLDivElement,
    load_index: HTMLButtonElement
}

window.addEventListener('load', () => {
    bezier_elements = {
        calculatorDiv: document.getElementById('calculator') as HTMLDivElement,
        options: {
        },
        point_num_node: document.getElementById('point_num') as HTMLInputElement,
        list: document.getElementById('list') as HTMLDivElement,
        load_index: document.getElementById('load_index') as HTMLButtonElement
    }

    let calculator = Desmos.GraphingCalculator(bezier_elements.calculatorDiv, bezier_elements.options);

    let point_num = parseInt(bezier_elements.point_num_node.value);
    generate_coords(point_num);
    showBezier4(calculator);
    
    bezier_elements.load_index.addEventListener('click', () => {
        window.api.load_index()
    })

    bezier_elements.point_num_node.addEventListener('change', () => {
        point_num = parseInt(bezier_elements.point_num_node.value);
        generate_coords(point_num);

        if(point_num == 4) {
            showBezier4(calculator);
        }
        else {
            showBezier3(calculator);
        }
    })
})

function generate_coords(point_num : number) {
    bezier_elements.list.innerHTML = "";
    for (let i = 0; i < point_num; i++) {
        let div = bezier_elements.list.appendChild(document.createElement('div'))
        div.classList.add('coord');
        div.appendChild(document.createElement('input')).setAttribute('value', `${i}`);
        div.appendChild(document.createElement('input')).setAttribute('value', `${i % 2 == 0 ? 0 : 1}`);
    }
}
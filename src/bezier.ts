let bezier_elements: {
    calculatorDiv: HTMLDivElement,
    options: Desmos.CalculatorOptions,
    point_num_node: HTMLInputElement,
    list: HTMLDivElement,
    calculate_button: HTMLButtonElement,
    load_index: HTMLButtonElement
}

window.addEventListener('load', () => {
    bezier_elements = {
        calculatorDiv: document.getElementById('calculator') as HTMLDivElement,
        options: {
        },
        point_num_node: document.getElementById('point_num') as HTMLInputElement,
        list: document.getElementById('list') as HTMLDivElement,
        calculate_button: document.getElementById('calculate') as HTMLButtonElement,
        load_index: document.getElementById('load_index') as HTMLButtonElement
    }

    let calculator = Desmos.GraphingCalculator(bezier_elements.calculatorDiv, bezier_elements.options);
    generate_base_bezier(calculator);

    let point_num = parseInt(bezier_elements.point_num_node.value);
    generate_coords(point_num);
    
    bezier_elements.load_index.addEventListener('click', () => {
        window.api.load_index()
    })

    bezier_elements.point_num_node.addEventListener('change', () => {
        point_num = parseInt(bezier_elements.point_num_node.value)
        generate_coords(point_num)
    })

    bezier_elements.calculate_button.addEventListener('click', () => {
        showBezier(calculator);
    })
})

function generate_coords(point_num : number) {
    bezier_elements.list.innerHTML = "";
    for (let i = 0; i < point_num; i++) {
        let div = bezier_elements.list.appendChild(document.createElement('div'))
        div.classList.add('coord');
        div.appendChild(document.createElement('input'));
        div.appendChild(document.createElement('input'));
    }
}

function generate_base_bezier(calculator: Desmos.Calculator) {
    const col1 : Desmos.Column = {
        latex: "x_1",
        values: ["1", "2", "3"],
        points: true,
        lines: true,
        dragMode: Desmos.DragModes.XY
    };
    const col2 : Desmos.Column = {
        latex: "y_1",
        values: ["1", "2", "1"],
        points: true,
        lines: true,
        dragMode: Desmos.DragModes.XY
    };
    calculator.setExpression({id: 'table', type: 'table', columns: [col1, col2]}); 
    calculator.setExpression({id: 'bezierf', latex: `B_{${bezier_elements.point_num_node.value}}(t,P)`
        +`=\\sum_{i=0}^{2}(\\operatorname{nCr}(2,i)(1-t)^{2-i}t^{i}P[i+1])`});
    calculator.setExpression({id: 'bezierc', latex: `B_{${bezier_elements.point_num_node.value}}(t,(x_1,y_1))`});
}
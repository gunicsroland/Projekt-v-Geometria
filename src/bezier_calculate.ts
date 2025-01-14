function showBezier(calculator: Desmos.Calculator) {

    let num = parseInt(bezier_elements.point_num_node.value) - 1;
    generate_coord_table(calculator);
    generate_weight_table(calculator, num+1);
    
    calculator.setExpression({
        id: 'bezierf', latex: `B_{${num+1}}(t,P)=`
            + `\\frac{\\left(\\sum_{i=0}^{${num}}(\\operatorname{nCr}(${num},i)(1-t)^{${num}-i}t^{i}P[i+1]w\\left[i+1\\right])\\right)}{\\sum_{i=0}^{${num}}\\left(\\operatorname{nCr}\\left(${num},i\\right)\\left(1-t\\right)^{${num}-i}t^{i}w\\left[i+1\\right]\\right)}`
    });
    
    calculator.setExpression({ id: 'bezierc', latex: `B_{${bezier_elements.point_num_node.value}}(t,(x_1,y_1))` });
}

// A koordináta táblázatot generáló függvény
function generate_coord_table(calculator: Desmos.Calculator) {
    let col1_values: string[] = [];
    let col2_values: string[] = [];

    Array.from(document.getElementsByClassName("coord")).forEach((div) => {
        let col1_value = div.children[0] as HTMLInputElement;
        let col2_value = div.children[1] as HTMLInputElement;

        if (col1_value.value || col2_value.value) {
            col1_values.push(col1_value.value);
            col2_values.push(col2_value.value);
        }
        else {
            alert("Hiba, nincsenek kitöltve a mezők");
        }
    })

    const col1: Desmos.Column = {
        latex: "x_1",
        values: col1_values
    };
    const col2: Desmos.Column = {
        latex: "y_1",
        values: col2_values,
        points: true,
        lines: true,
        dragMode: Desmos.DragModes.XY
    };
    calculator.setExpression({ id: 'table', type: 'table', columns: [col1, col2] });
}

// A súly táblázatot generáló függvény
function generate_weight_table(calculator: Desmos.Calculator, num : number) {
    let col1_values: string[] = [];
    for (let i = 0; i < num; i++){
        col1_values.push("1");
    }
    const col1: Desmos.Column = {
        latex: "w",
        values: col1_values

    }
    calculator.setExpression({ id: 'table_weight', type: 'table', columns: [col1] });
}
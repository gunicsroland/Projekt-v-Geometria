function showBezier4(calculator: Desmos.Calculator) {

    calculator.setBlank();

    let num = parseInt(bezier_elements.point_num_node.value) - 1;
    generate_coord_table(calculator);
    generate_weight_table(calculator, num + 1);

    //lamdba determináns
    calculator.setExpression({
        id: "lambda_determinant", latex:
            `\\lambda(i,j,k)= c_x[i](c_y[j]-c_y[k])-c_y[i](c_x[j]-c_x[k])+c_x[j]c_y[k]-c_x[k]c_y[j]`
    });
    generate_lambda_table(calculator);

    //Line between two points
    calculator.setExpression({
        id: 'line', latex:
            `L(x,y,x_3,i,j)=x(c_{y}[i]-c_{y}[j])-y(c_{x}[i]-c_{x}[j])+x_3(c_{x}[i]c_{y}[j]-c_{y}[i]c_{x}[j])`
    });

    //u(i)
    calculator.setExpression({ id: "u", latex: "u(i)= \\operatorname{nCr}(3,i)w[i+1]", hidden: true });

    //phi táblázat
    generate_phi_table(calculator);

    //b táblázat
    generate_b_table(calculator);

    //K_n beállítása
    set_k(calculator);

    // Pólus
    calculator.setExpression({ id: 'pole', latex: "(\\alpha, \\beta)" });
    calculator.setExpression({ id: 'p_x', latex: "\\alpha=1" });
    calculator.setExpression({ id: 'p_y', latex: "\\beta=1" });

    // z érték
    calculator.setExpression({ id: 'z', latex: "z=1" });

    // valós bezier görbe egyenlete
    calculator.setExpression({
        id: 'bezierf', latex: `B_{${num + 1}}(t,P)=`
            + `\\frac{\(\\sum_{i=0}^{${num}}(\\operatorname{nCr}(${num},i)(1-t)^{${num}-i}t^{i}P[i+1]w[i+1]))}{\\sum_{i=0}^{${num}}(\\operatorname{nCr}(${num},i)(1-t)^{${num}-i}t^{i}w[i+1])}`
    });

    // előző egyenelt hívása
    calculator.setExpression({ id: 'bezierc', latex: `B_{${bezier_elements.point_num_node.value}}(t,(c_x,c_y))` });

    // bezier görbe implicit egyenlete
    calculator.setExpression({ id: 'bezier_implicit', latex: 'g(x,y,x_3)=\\{\\phi[1] =0:0,1+\\phi[2]=0:0,1=0:u(0)u(3)L(x,y,x_3,1,4)^{2}-u(1)u(2)L(x,y,x_3,1,2)L(x,y,x_3,3,4),b[1]K_1(x,y,x_3)+b[2]K_2(x,y,x_3)+b[3]K_3(x,y,x_3)+b[4]K_4(x,y,x_3)\\}' });

    // a görbe megjelenítése    
    calculator.setExpression({ id: 'implicit_call', latex: `g(x,y,z)1=0` });

    // a poláris görbe egyenlete
    calculator.setExpression({ id: 'polar_curve', latex: "\\alpha\\frac{d}{dx}(g(x,y,z))+\\beta\\frac{d}{dy}(g(x,y,z))+\\frac{d}{dz}(g(x,y,z))=0" });
}

function showBezier3(calculator: Desmos.Calculator) {
    calculator.setBlank();

    let num = parseInt(bezier_elements.point_num_node.value) - 1;
    generate_coord_table(calculator);
    generate_weight_table(calculator, num + 1);

    // valós bezier görbe egyenlete
    calculator.setExpression({
        id: 'bezierf', latex: `B_{${num + 1}}(t,P)=`
            + `\\frac{\(\\sum_{i=0}^{${num}}(\\operatorname{nCr}(${num},i)(1-t)^{${num}-i}t^{i}P[i+1]w[i+1]))}{\\sum_{i=0}^{${num}}(\\operatorname{nCr}(${num},i)(1-t)^{${num}-i}t^{i}w[i+1])}`
    });

    // előző egyenelt hívása
    calculator.setExpression({ id: 'bezierc', latex: `B_{${bezier_elements.point_num_node.value}}(t,(c_x,c_y))` });
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
        latex: "c_x",
        values: col1_values
    };
    const col2: Desmos.Column = {
        latex: "c_y",
        values: col2_values,
        points: true,
        lines: true,
        dragMode: Desmos.DragModes.XY
    };
    calculator.setExpression({ id: 'table', type: 'table', columns: [col1, col2] });
}

// A súly táblázatot generáló függvény
function generate_weight_table(calculator: Desmos.Calculator, num: number) {
    let col1_values: string[] = [];
    for (let i = 0; i < num; i++) {
        col1_values.push("1");
    }
    const col1: Desmos.Column = {
        latex: "w",
        values: col1_values

    }
    calculator.setExpression({ id: 'table_weight', type: 'table', columns: [col1] });
}

// A lambda táblázatot generáló függvény
function generate_lambda_table(calculator: Desmos.Calculator) {
    let col1_values: string[] = [];
    col1_values.push("\\\lambda(4,3,2)");
    col1_values.push("\\\lambda(3,4,1)");
    col1_values.push("\\\lambda(2,1,4)");
    col1_values.push("\\\lambda(1,2,3)");

    const col1: Desmos.Column = {
        latex: "\\\lambda_i",
        values: col1_values
    };
    const col2: Desmos.Column = {
        latex: "\\\lambda(4,3,2)",
        hidden: true,
        points: false
    };
    const col3: Desmos.Column = {
        latex: "\\\lambda(3,4,1)",
        hidden: true,
        points: false
    };
    const col4: Desmos.Column = {
        latex: "\\\lambda(2,1,4)",
        hidden: true,
        points: false
    };
    const col5: Desmos.Column = {
        latex: "\\\lambda(1,2,3)",
        hidden: true,
        points: false
    };

    calculator.setExpression({ id: 'table_lambda', type: 'table', columns: [col1, col2, col3, col4, col5] });
}

// A phi táblázatot generáló függvény
function generate_phi_table(calculator: Desmos.Calculator) {
    let col1_values: string[] = [];
    col1_values.push("u(0)u(2)\\lambda_{i}[2]^{2}-u(1)^{2}\\lambda_{i}[1]\\lambda_{i}[3]");
    col1_values.push("u(1)u(3)\\lambda_{i}[3]^{2}-u(2)^{2}\\lambda_{i}[2]\\lambda_{i}[4]");
    col1_values.push("u(1)u(2)\\lambda_{i}[1]\\lambda_{i}[4]-u(0)u(3)\\lambda_{i}[2]\\lambda_{i}[3]");

    const col1: Desmos.Column = {
        latex: "\\phi",
        values: col1_values
    };
    const col2: Desmos.Column = {
        latex: "\\phi[1]",
        hidden: true,
        points: false
    };
    const col3: Desmos.Column = {
        latex: "\\phi[2]",
        hidden: true,
        points: false
    };
    const col4: Desmos.Column = {
        latex: "\\phi[3]",
        hidden: true,
        points: false
    };

    calculator.setExpression({ id: "table_phi", type: "table", columns: [col1, col2, col3, col4] });
}

// A b táblázatot generáló függvény
function generate_b_table(calculator: Desmos.Calculator) {
    let col1_values: string[] = [];
    col1_values.push("\\phi[3]u(1)u(2)\\\lambda_{i}[2]\\\lambda_{i}[3]");
    col1_values.push("\\phi[1]u(1)u(3)\\\lambda_{i}[2]\\\lambda_{i}[4]");
    col1_values.push("\\phi[2]u(0)u(2)\\\lambda_{i}[1]\\\lambda_{i}[3]");
    col1_values.push("\\phi[3]u(0)u(3)\\\lambda_{i}[1]\\\lambda_{i}[4]");

    const col1: Desmos.Column = {
        latex: "b",
        values: col1_values
    };
    const col2: Desmos.Column = {
        latex: "b[1]",
        hidden: true,
        points: false
    };
    const col3: Desmos.Column = {
        latex: "b[2]",
        hidden: true,
        points: false
    };
    const col4: Desmos.Column = {
        latex: "b[3]",
        hidden: true,
        points: false
    };
    const col5: Desmos.Column = {
        latex: "b[4]",
        hidden: true,
        points: false
    };

    calculator.setExpression({ id: "table_b", type: "table", columns: [col1, col2, col3, col4, col5] });
}

// K_n beállítása güggvény
function set_k(calculator: Desmos.Calculator) {
    calculator.setExpression({ id: 'k_1', latex: "K_{1}(x,y,x_{3})=L(x,y,x_{3},1,2)L(x,y,x_{3},2,3)L(x,y,x_{3},3,4)" });
    calculator.setExpression({ id: 'k_2', latex: "K_{2}(x,y,x_{3})=L(x,y,x_{3},1,2)L(x,y,x_{3},2,4)^{2}" });
    calculator.setExpression({ id: 'k_3', latex: "K_{3}(x,y,x_{3})=L(x,y,x_{3},1,3)^{2}L(x,y,x_{3},3,4)" });
    calculator.setExpression({ id: 'k_4', latex: "K_{4}(x,y,x_{3})=L(x,y,x_{3},1,4)^{3}" });
}
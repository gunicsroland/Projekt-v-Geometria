let elements: {
    calculatorDiv: HTMLDivElement,
    radioButton: HTMLButtonElement,
    text: HTMLTextAreaElement,
    uniqueRadioButton: HTMLButtonElement
};

window.addEventListener('load', () => {
    elements = {
        calculatorDiv: document.getElementById('calculator') as HTMLDivElement,
        radioButton: document.getElementById('radio') as HTMLButtonElement,
        text: document.getElementById('unique') as HTMLTextAreaElement,
        uniqueRadioButton: document.getElementById('uniqueRadio') as HTMLButtonElement
    };

    let calculator = Desmos.GraphingCalculator(elements.calculatorDiv);

    elements.text.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            calculator.setBlank();
            console.clear();
            console.log(elements.text.value)
            calculator.setExpression({ id: 'mappa', type: 'folder', text: 'Saját' });
            calculator.setExpression({ id: 'graph', latex: elements.text.value, color: '#c74440' });

            let graph = elements.text.value;
            let coefficient_num = CoeffNum(graph);

            //coefficient egy tömb amiben tuple-ek vannak az együttható és a változó kitevőjét tartalmazza
            // tuple [ együttható, x kitevő, y kitevő]
            let coefficients = CoeffDefine(graph, coefficient_num);
            let HomogenCoefficients = HomogeneousCoord(coefficients.concat());



            let coefficientsDerX = PartialDerivate([...HomogenCoefficients], 1);
            let coefficientsDerY = PartialDerivate([...HomogenCoefficients], 2);
            let coefficientsDerZ = PartialDerivate([...HomogenCoefficients], 3);
            coefficientsDerX[0][4] = 1;
            coefficientsDerY[0][5] = 1;
            coefficientsDerZ[0][6] = 1;

            console.log("A poláris görbe összerakása: ");
            let polarGraph: string = "a(";
            console.log(polarGraph);
            for (let term of coefficientsDerX) {
                polarGraph += `${term[0] < 0 ? term[0] : `+${term[0]}`}${term[1] == 0 ? "" : "x^" + `${term[1]}`}${term[2] == 0 ? "" : "*y^" + `${term[2]}`}`;
                console.log(polarGraph);
                term[4] = 1;
            }
            polarGraph += ")+b(";
            console.log(polarGraph);

            for (let term of coefficientsDerY) {
                polarGraph += `${term[0] < 0 ? term[0] : `+${term[0]}`}${term[1] == 0 ? "" : "x^" + `${term[1]}`}${term[2] == 0 ? "" : "*y^" + `${term[2]}`}`;
                console.log(polarGraph);
                term[5] = 1;
            }
            polarGraph += ")"
            console.log(polarGraph);
            for (let term of coefficientsDerZ) {
                polarGraph += `${term[0] < 0 ? term[0] : `+${term[0]}`}${term[1] == 0 ? "" : "x^" + `${term[1]}`}${term[2] == 0 ? "" : "*y^" + `${term[2]}`}`;
                console.log(polarGraph);
                term[6] = 1;
            }

            calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
            calculator.setExpression({
                id: 'polarCurve', latex:
                    `${polarGraph}=0`,
                color: '#388c46'
            })

            calculator.setExpression({ id: 'Folderpole', type: 'folder', text: 'A pólus' });
            calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
            calculator.setExpression({ id: 'a', latex: 'a=1' });
            calculator.setExpression({ id: 'b', latex: 'b=1' });

            let parabolaGraph: string = "";
            parabolaGraph = DefineParabola(coefficientsDerX, coefficientsDerY, coefficientsDerZ);
            console.log(parabolaGraph);

            calculator.setExpression({id: 'note', type: 'text', text: 'Azok a pontok mikor a görbe parabola lesz: '});
            calculator.setExpression({id: 'functionf', latex: `${parabolaGraph}`, color: "#2d70b3"});
        }

    })

    document.querySelectorAll('input[name="function"]').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const value = (event.target as HTMLInputElement).value;

            switch (value) {
                case 'FoliumDescartes':
                    FoliumDescartes(calculator);
                    elements.text.setAttribute("disabled", "true");
                    break;
                case 'CissoidDiocles':
                    CissoidDiocles(calculator);
                    elements.text.setAttribute("disabled", "true");
                    break;
                case 'unique':
                    elements.text.removeAttribute("disabled");
                    calculator.setBlank();
            }

        });
    });
});





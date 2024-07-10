let elements: {
    calculatorDiv: HTMLDivElement,
    radioButton: HTMLButtonElement,
    text: HTMLTextAreaElement
};

window.addEventListener('load', () => {
    elements = {
        calculatorDiv: document.getElementById('calculator') as HTMLDivElement,
        radioButton: document.getElementById('radio') as HTMLButtonElement,
        text: document.getElementById('unique') as HTMLTextAreaElement
    };

    let calculator = Desmos.GraphingCalculator(elements.calculatorDiv);

    elements.text.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            calculator.setBlank();
            calculator.setExpression({ id: 'mappa', type: 'folder', text: 'Saját' });
            calculator.setExpression({ id: 'graph', latex: elements.text.value, color: '#c74440' })

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

            let b: string = "";
            b = DefineParabola(polarGraph);
        }
    })

    document.querySelectorAll('input[name="function"]').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const value = (event.target as HTMLInputElement).value;

            switch (value) {
                case 'graph1':
                    calculator.setBlank();
                    calculator.setExpression({ id: 'mappa', type: 'folder', text: 'Descartes - féle levél' });


                    calculator.setExpression({ id: 'graph', latex: 'x^3+y^3-3Cxy=0', color: '#c74440' });
                    calculator.setExpression({ id: 'note', type: 'text', text: 'A C egy konstans' });
                    calculator.setExpression({ id: 'const', latex: 'C=1' });

                    calculator.setExpression({ id: 'Folderpole', type: 'folder', text: 'A pólus' });
                    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
                    calculator.setExpression({ id: 'a', latex: 'a=1' });
                    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok, mikor a másodrendű görbe parabola lesz erre a görbére esnek:' });
                    calculator.setExpression({ id: 'functionf', latex: 'f(x)=(C^2)/(4*x)', color: '#2d70b3' });
                    calculator.setExpression({ id: 'b', latex: 'b=f(a)' });

                    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
                    calculator.setExpression({ id: 'polarCurve', latex: 'ax^2-aCy+by^2-bCx-Cxy=0', color: '#388c46' })

                    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris' });
                    calculator.setExpression({ id: 'polar', latex: '2a^2x-abC-aCy+2b^2y-abC-bCx-aCy-bCx=0', color: '#fa7e19' })
                    break;
                case 'graph2':
                    calculator.setBlank();
                    calculator.setExpression({ id: 'mappa', type: 'folder', text: 'Dioklész-féle cisszoid' });

                    calculator.setExpression({ id: 'graph', latex: 'x^3+x*y^2-Cy^2=0', color: '#c74440' });
                    calculator.setExpression({ id: 'note', type: 'text', text: 'A C egy konstans' });
                    calculator.setExpression({ id: 'const', latex: 'C=1', sliderBounds: { min: '0', max: '10' } })

                    calculator.setExpression({ id: 'Folderpole', type: 'folder', text: 'Pólus' });
                    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
                    calculator.setExpression({ id: 'a', latex: 'a=1' })
                    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok, mikor a másodrendű görbe parabola lesz erre a görbére esnek:' });
                    calculator.setExpression({ id: 'functionf', latex: 'f(x)=\\sqrt{3x(x-C)}', color: '#2d70b3' });
                    calculator.setExpression({ id: 'b', latex: 'b=f(a)' });

                    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
                    calculator.setExpression({ id: 'polarCurve', latex: '3ax^2+ay^2+2bxy-2bCy-Cy^2=0', color: '#388c46' })

                    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris' });
                    calculator.setExpression({ id: 'polar', latex: '3a^2x+2aby+b^2x-b^2C-2Cby=0', color: '#fa7e19' })
            }

        });
    });
});





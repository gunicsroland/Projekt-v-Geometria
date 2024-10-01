function FoliumDescartes(calculator: Desmos.Calculator): void {
    calculator.setExpression({ id: 'name', type: 'text', text: 'A Descartes-féle levél' });

    calculator.setExpression({ id: 'graph', latex: 'x^3+y^3-3Cxy=0', color: '#c74440' });
    calculator.setExpression({ id: 'Cnote', type: 'text', text: 'A C egy konstans' });
    calculator.setExpression({ id: 'const', latex: 'C=1' });

    calculator.setExpression({ id: 'note', type: 'text', text: 'A Pólus' });
    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
    calculator.setExpression({ id: 'a', latex: 'a=1' });
    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok, mikor a másodrendű görbe parabola lesz erre a görbére esnek:' });
    calculator.setExpression({ id: 'functionf', latex: 'f(x)=(C^2)/(4*x)', color: '#2d70b3' });
    calculator.setExpression({ id: 'b', latex: 'b=f(a)' });

    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
    calculator.setExpression({ id: 'polarCurve', latex: 'ax^2-aCy+by^2-bCx-Cxy=0', color: '#388c46' })

    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris' });
    calculator.setExpression({ id: 'polar', latex: '2a^2x-abC-aCy+2b^2y-abC-bCx-aCy-bCx=0', color: '#fa7e19' });
}

function CissoidDiocles(calculator: Desmos.Calculator): void {
    calculator.setExpression({ id: 'name', type: 'text', text: 'Dioklész-féle cisszoid' });

    calculator.setExpression({ id: 'graph', latex: 'x^3+x*y^2-Cy^2=0', color: '#c74440' });
    calculator.setExpression({ id: 'Cnote', type: 'text', text: 'A C egy konstans' });
    calculator.setExpression({ id: 'const', latex: 'C=1', sliderBounds: { min: '0', max: '10' } })

    calculator.setExpression({ id: 'note', type: 'text', text: 'A Pólus' });
    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
    calculator.setExpression({ id: 'a', latex: 'a=1' })
    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok, mikor a másodrendű görbe parabola lesz erre a görbére esnek:' });
    calculator.setExpression({ id: 'functionf', latex: '3x^{2}-3Cx-y^{2}=0', color: '#2d70b3' });

    calculator.setExpression({ id: 'functionf', latex: 'f(x)=\\sqrt{3x(x-C)}', color: '#2d70b3' });
    calculator.setExpression({ id: 'b', latex: 'b=f(a)' });

    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
    calculator.setExpression({ id: 'polarCurve', latex: '3ax^2+ay^2+2bxy-2bCy-Cy^2=0', color: '#388c46' })

    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris' });
    calculator.setExpression({ id: 'polar', latex: '3a^2x+2aby+b^2x-b^2C-2Cby=0', color: '#fa7e19' });
}

function ParabolaNeil(calculator: Desmos.Calculator): void {
    calculator.setExpression({ id: 'name', type: 'text', text: 'Neil-parabola' });

    calculator.setExpression({ id: 'graph', latex: 'y^2=Cx^3', color: '#c74440' });
    calculator.setExpression({ id: 'Cnote', type: 'text', text: 'A C egy konstans' });
    calculator.setExpression({ id: 'const', latex: 'C=1' })

    calculator.setExpression({ id: 'note', type: 'text', text: 'A Pólus' });
    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
    calculator.setExpression({ id: 'a', latex: 'a=1' })
    calculator.setExpression({ id: 'b', latex: 'b=1' });
    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok, mikor a másodrendű görbe parabola lesz erre a görbére esnek:' });
    calculator.setExpression({ id: 'functionf', latex: '0=0-4*-3x', color: '#2d70b3' });

    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
    calculator.setExpression({ id: 'polarCurve', latex: '-3aCx^2+2by+2y^2=0', color: '#388c46' })

    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris' });
    calculator.setExpression({ id: 'polar', latex: '-3a^2Cx+b^2+by+by=0', color: '#fa7e19' });
}

function WitchAgnesi(calculator: Desmos.Calculator): void {
    calculator.setExpression({ id: 'name', type: 'text', text: 'Agnesi-féle görbe' });

    calculator.setExpression({ id: 'graph', latex: 'y=8C^3/(x^2+4C^2)', color: '#c74440' });
    calculator.setExpression({ id: 'Cnote', type: 'text', text: 'A C egy konstans' });
    calculator.setExpression({ id: 'const', latex: 'C=1' })

    calculator.setExpression({ id: 'note', type: 'text', text: 'A Pólus' });
    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
    calculator.setExpression({ id: 'a', latex: 'a=1' })
    calculator.setExpression({ id: 'b', latex: 'b=f(a)' });
    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok, mikor a másodrendű görbe parabola lesz erre a görbére esnek:' });
    calculator.setExpression({ id: 'functionf', latex: 'f(x)=4x^2', color: '#2d70b3' });

    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
    calculator.setExpression({ id: 'polarCurve', latex: '2axy+bx^2+4C^2b+8C^2y-24C^3=0', color: '#388c46' })

    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris' });
    calculator.setExpression({ id: 'polar', latex: 'a^2y+2abx+8bC^2+4C32y-24C^3=0', color: '#fa7e19' });
}

function Strophoid(calculator: Desmos.Calculator): void {
    calculator.setExpression({ id: 'name', type: 'text', text: 'Sztrofoid' });

    calculator.setExpression({ id: 'graph', latex: 'x^2(C+x)+y^2(x-a)=0', color: '#c74440' });
    calculator.setExpression({ id: 'Cnote', type: 'text', text: 'A C egy konstans' });
    calculator.setExpression({ id: 'const', latex: 'C=1' })

    calculator.setExpression({ id: 'note', type: 'text', text: 'A Pólus' });
    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
    calculator.setExpression({ id: 'a', latex: 'a=1', sliderBounds: { min: "0.000001", max: "10" } });
    calculator.setExpression({ id: 'b', latex: 'b=1' });
    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok, mikor a másodrendű görbe parabola lesz erre a görbére esnek:' });
    calculator.setExpression({ id: 'functionf', latex: 'y^2-3x^2+4xC-C^2=0', color: '#2d70b3' });

    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
    calculator.setExpression({ id: 'polarCurve', latex: '2aCx+3ax^2+ay^2+2bxy-2by+Cx^2-Cy^2=0', color: '#388c46' })

    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris' });
    calculator.setExpression({ id: 'polar', latex: '2a^2+6a^2+4aby+2aCx+2b^2x-2b^2-2bCy+2aCx-2by=0', color: '#fa7e19' });
}

function uniqueFunc(calculator: Desmos.Calculator, graph: string): void {
    console.clear();

    console.log(elements.text.value)
    calculator.setExpression({ id: 'name', type: 'text', text: 'Megadott görbe' });
    calculator.setExpression({ id: 'graph', latex: graph, color: '#c74440' });

    let coefficient_num = CoeffNum(graph);

    //coefficient egy tömb amiben tuple-ek vannak az együttható és a változó kitevőjét tartalmazza
    // tuple [ együttható, x kitevő, y kitevő]
    let coefficients = CoeffDefine(graph, coefficient_num);

    let PoF = 0;
    for (let term of coefficients) {
        for (let j = 1; j < 4; ++j) {
            if (PoF < term[j]) {
                PoF = term[j];
            }
        }
    }

    let HomogenCoefficients = HomogeneousCoord(coefficients.concat());

    let coefficientsDerX = PartialDerivate([...HomogenCoefficients], 1);
    let coefficientsDerY = PartialDerivate([...HomogenCoefficients], 2);
    let coefficientsDerZ = PartialDerivate([...HomogenCoefficients], 3);
    --PoF;

    for (PoF; 2 < PoF; --PoF) {
        console.log("\n" + PoF + "fokú függvény összerakása\n")
        let polarCurve: string = "a(";
        for (let term of coefficientsDerX) {
            polarCurve += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
                `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
                `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
                `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
                `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
            console.log(polarCurve);
            ++term[4];
        }
        polarCurve += ")+b(";
        console.log(polarCurve);

        for (let term of coefficientsDerY) {
            polarCurve += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
                `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
                `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
                `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
                `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
            console.log(polarCurve);
            ++term[5];
        }
        polarCurve += ")"
        console.log(polarCurve);
        for (let term of coefficientsDerZ) {
            polarCurve += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
                `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
                `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
                `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
                `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
            console.log(polarCurve);
            ++term[6];
        }

        calculator.setExpression({ id: `${PoF}note`, type: 'text', text: 'A' + ` ${PoF}. görbe` });
        calculator.setExpression({ id: `${PoF}`, latex: `${polarCurve}=0`, color: '#fa3e19' })

        let tmpX1, tmpX2, tmpX3;
        tmpX1 = PartialDerivate([...coefficientsDerX], 1);
        tmpX2 = PartialDerivate([...coefficientsDerY], 1);
        tmpX3 = PartialDerivate([...coefficientsDerZ], 1);

        let tmpY1, tmpY2, tmpY3;
        tmpY1 = PartialDerivate([...coefficientsDerY], 2);
        tmpY2 = PartialDerivate([...coefficientsDerX], 2);
        tmpY3 = PartialDerivate([...coefficientsDerZ], 2);

        let tmpZ1, tmpZ2, tmpZ3;
        tmpZ1 = PartialDerivate([...coefficientsDerZ], 3);
        tmpZ2 = PartialDerivate([...coefficientsDerX], 3);
        tmpZ3 = PartialDerivate([...coefficientsDerY], 3);

        console.log("A berakandó X tényező: ");
        console.log(tmpX1);
        console.log(tmpX2);
        console.log(tmpX3);
        console.log("A berakandó Y tényező: ");
        console.log(tmpY1);
        console.log(tmpY2);
        console.log(tmpY3);
        console.log("A berakandó Z tényező: ");
        console.log(tmpZ1);
        console.log(tmpZ2);
        console.log(tmpZ3);

        coefficientsDerX = [];
        PushNotZeroTerms(coefficientsDerX, tmpX1);
        PushNotZeroTerms(coefficientsDerX, tmpX2);
        PushNotZeroTerms(coefficientsDerX, tmpX3);

        coefficientsDerY = [];
        PushNotZeroTerms(coefficientsDerY, tmpY1);
        PushNotZeroTerms(coefficientsDerY, tmpY2);
        PushNotZeroTerms(coefficientsDerY, tmpY3);

        coefficientsDerZ = [];
        PushNotZeroTerms(coefficientsDerZ, tmpZ1);
        PushNotZeroTerms(coefficientsDerZ, tmpZ2);
        PushNotZeroTerms(coefficientsDerZ, tmpZ3);

    }


    console.log("A poláris görbe összerakása: ");
    let polarGraph: string = "a(0+";
    console.log(polarGraph);
    for (let term of coefficientsDerX) {
        polarGraph += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}${term[1] == 0 ? "" : "x^" + `${term[1]}`}${term[2] == 0 ? "" : "*y^" + `${term[2]}`}`;
        console.log(polarGraph);
        ++term[4];
    }
    polarGraph += ")+b(0+";
    console.log(polarGraph);

    for (let term of coefficientsDerY) {
        polarGraph += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}${term[1] == 0 ? "" : "x^" + `${term[1]}`}${term[2] == 0 ? "" : "*y^" + `${term[2]}`}`;
        console.log(polarGraph);
        ++term[5];
    }
    polarGraph += ")"
    console.log(polarGraph);
    for (let term of coefficientsDerZ) {
        polarGraph += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}${term[1] == 0 ? "" : "x^" + `${term[1]}`}${term[2] == 0 ? "" : "*y^" + `${term[2]}`}`;
        console.log(polarGraph);
        ++term[6];
    }

    calculator.setExpression({ id: 'cnote', type: 'text', text: 'A pólushoz tartozó poláris görbe' });
    calculator.setExpression({
        id: 'polarCurve', latex:
            `${polarGraph}=0`,
        color: '#388c46'
    })

    let parabolaGraph: string = "";
    parabolaGraph = DefineParabola(coefficientsDerX, coefficientsDerY, coefficientsDerZ);
    console.log(parabolaGraph + "A parabola meghatározó egyenlet");

    calculator.setExpression({ id: 'fnote', type: 'text', text: 'Azok a pontok mikor a görbe parabola lesz: ' });
    calculator.setExpression({ id: 'functionf', latex: `${parabolaGraph}=0`, color: "#2d70b3" });

    calculator.setExpression({ id: 'note', type: 'text', text: 'A pólus' });
    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black' });
    calculator.setExpression({ id: 'a', latex: 'a=1' });
    calculator.setExpression({ id: 'b', latex: 'b=1' });

    console.log("A pólus összerakása: ");
    let polar: string = "a(0+";

    let tmp1, tmp2;
    let polarCoeffX = PartialDerivate([...coefficientsDerX], 1);
    tmp1 = PartialDerivate([...coefficientsDerY], 1);
    tmp2 = PartialDerivate([...coefficientsDerZ], 1);
    for (let i = 0; i < coefficientsDerX.length; ++i) {
        polarCoeffX.push(tmp1[i], tmp2[i]);
    }
    let polarCoeffY = PartialDerivate([...coefficientsDerY], 2);
    tmp1 = PartialDerivate([...coefficientsDerX], 2);
    tmp2 = PartialDerivate([...coefficientsDerZ], 2);
    for (let i = 0; i < coefficientsDerX.length; ++i) {
        polarCoeffY.push(tmp1[i], tmp2[i]);
    }
    let polarCoeffZ = PartialDerivate([...coefficientsDerZ], 3);
    tmp1 = PartialDerivate([...coefficientsDerX], 3);
    tmp2 = PartialDerivate([...coefficientsDerY], 3);
    for (let i = 0; i < coefficientsDerX.length; ++i) {
        polarCoeffZ.push(tmp1[i], tmp2[i]);
    }


    console.log(polar);
    for (let term of polarCoeffX) {
        polar += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
            `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
            `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
            `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
            `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
        console.log(polar);
        ++term[4];
    }
    polar += ")+b(0+";
    console.log(polar);

    for (let term of polarCoeffY) {
        polar += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
            `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
            `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
            `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
            `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
        console.log(polar);
        ++term[5];
    }
    polar += ")"
    console.log(polar);
    for (let term of polarCoeffZ) {
        polar += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
            `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
            `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
            `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
            `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
        console.log(polar);
        ++term[6];
    }


    calculator.setExpression({ id: 'pnote', type: 'text', text: 'A ponthoz tartozó poláris: ' });
    calculator.setExpression({ id: 'polar', latex: `${polar}=0`, color: '#fa7e19' })

    console.log(graph);
}

function viewPlaneDivision(calculator: Desmos.Calculator, graph: string): void {
    calculator.setExpression({ id: 'name', type: 'text', text: 'Megadott görbe' });
    calculator.setExpression({ id: 'graph', latex: graph, color: '#c74440', lineWidth: '5' });

    let coefficient_num = CoeffNum(graph);
    let coefficients = CoeffDefine(graph, coefficient_num);

    let PoF = 0;
    for (let term of coefficients) {
        for (let j = 1; j < 4; ++j) {
            if (PoF < term[j]) {
                PoF = term[j];
            }
        }
    }

    let HomogenCoefficients = HomogeneousCoord(coefficients.concat());

    let coefficientsDerX = PartialDerivate([...HomogenCoefficients], 1);
    let coefficientsDerY = PartialDerivate([...HomogenCoefficients], 2);
    let coefficientsDerZ = PartialDerivate([...HomogenCoefficients], 3);
    --PoF;

    for (PoF; 2 < PoF; --PoF) {
        console.log("\n" + PoF + "fokú függvény összerakása\n")
        let polarCurve: string = "a(";
        for (let term of coefficientsDerX) {
            polarCurve += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
                `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
                `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
                `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
                `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
            console.log(polarCurve);
            ++term[4];
        }
        polarCurve += ")+b(";
        console.log(polarCurve);

        for (let term of coefficientsDerY) {
            polarCurve += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
                `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
                `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
                `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
                `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
            console.log(polarCurve);
            ++term[5];
        }
        polarCurve += ")"
        console.log(polarCurve);
        for (let term of coefficientsDerZ) {
            polarCurve += `${term[0] < 0 ? term[0] : term[0] == 0 ? "" : `+${term[0]}`}` +
                `${term[1] == 0 ? "" : "x^" + `${term[1]}`}` +
                `${term[2] == 0 ? "" : "*y^" + `${term[2]}`}` +
                `${term[4] == 0 ? "" : "a^" + `${term[4]}`}` +
                `${term[5] == 0 ? "" : "b^" + `${term[5]}`}`;
            console.log(polarCurve);
            ++term[6];
        }

        calculator.setExpression({ id: `${PoF}note`, type: 'text', text: 'A' + ` ${PoF}. görbe` });
        calculator.setExpression({ id: `${PoF}`, latex: `${polarCurve}=0`, color: '#fa3e19' })

        let tmpX1, tmpX2, tmpX3;
        tmpX1 = PartialDerivate([...coefficientsDerX], 1);
        tmpX2 = PartialDerivate([...coefficientsDerY], 1);
        tmpX3 = PartialDerivate([...coefficientsDerZ], 1);

        let tmpY1, tmpY2, tmpY3;
        tmpY1 = PartialDerivate([...coefficientsDerY], 2);
        tmpY2 = PartialDerivate([...coefficientsDerX], 2);
        tmpY3 = PartialDerivate([...coefficientsDerZ], 2);

        let tmpZ1, tmpZ2, tmpZ3;
        tmpZ1 = PartialDerivate([...coefficientsDerZ], 3);
        tmpZ2 = PartialDerivate([...coefficientsDerX], 3);
        tmpZ3 = PartialDerivate([...coefficientsDerY], 3);

        console.log("A berakandó X tényező: ");
        console.log(tmpX1);
        console.log(tmpX2);
        console.log(tmpX3);
        console.log("A berakandó Y tényező: ");
        console.log(tmpY1);
        console.log(tmpY2);
        console.log(tmpY3);
        console.log("A berakandó Z tényező: ");
        console.log(tmpZ1);
        console.log(tmpZ2);
        console.log(tmpZ3);

        coefficientsDerX = [];
        PushNotZeroTerms(coefficientsDerX, tmpX1);
        PushNotZeroTerms(coefficientsDerX, tmpX2);
        PushNotZeroTerms(coefficientsDerX, tmpX3);

        coefficientsDerY = [];
        PushNotZeroTerms(coefficientsDerY, tmpY1);
        PushNotZeroTerms(coefficientsDerY, tmpY2);
        PushNotZeroTerms(coefficientsDerY, tmpY3);

        coefficientsDerZ = [];
        PushNotZeroTerms(coefficientsDerZ, tmpZ1);
        PushNotZeroTerms(coefficientsDerZ, tmpZ2);
        PushNotZeroTerms(coefficientsDerZ, tmpZ3);

    }

    let parabolaGraph: string = "";
    parabolaGraph = DefineParabola(coefficientsDerX, coefficientsDerY, coefficientsDerZ);
    console.log(parabolaGraph + "A parabola meghatározó egyenlet");

    calculator.setExpression({ id: 'hiperbole_note', type: 'text', text: 'Azok a pontok mikor a görbe hiperbola lesz: ' })
    calculator.setExpression({ id: 'functionh', latex: `${parabolaGraph} > 0`, color: "#6042a6" });

    calculator.setExpression({ id: 'ellipse_note', type: 'text', text: 'Azok a pontok mikor a görbe ellipszis lesz: ' })
    calculator.setExpression({ id: 'functione', latex: `${parabolaGraph} < 0`, color: "#388c46" });

    calculator.setExpression({ id: 'parabola_note', type: 'text', text: 'Azok a pontok mikor a görbe parabola lesz: ' });
    calculator.setExpression({ id: 'functionf', latex: `${parabolaGraph}=0`, color: "#2d70b3", lineWidth: '5' });

    calculator.setExpression({ id: 'note', type: 'text', text: 'A pólus' });
    calculator.setExpression({ id: 'pole', latex: '(a,b)', color: 'black', hidden: true });
    calculator.setExpression({ id: 'a', latex: 'a=1' });
    calculator.setExpression({ id: 'b', latex: 'b=1' });
}
function FoliumDescartes(calculator: Desmos.Calculator) : void{
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
    calculator.setExpression({ id: 'polar', latex: '2a^2x-abC-aCy+2b^2y-abC-bCx-aCy-bCx=0', color: '#fa7e19' });
}

function CissoidDiocles(calculator: Desmos.Calculator) : void {
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
    calculator.setExpression({ id: 'polar', latex: '3a^2x+2aby+b^2x-b^2C-2Cby=0', color: '#fa7e19' });
}
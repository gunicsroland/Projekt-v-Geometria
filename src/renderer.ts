let elements: {
    calculatorDiv: HTMLDivElement,
    radioButton: HTMLButtonElement,
    text: HTMLTextAreaElement,
    uniqueRadioButton: HTMLButtonElement,
    calcConstFull: HTMLButtonElement,
    calcConstDivide: HTMLButtonElement,
    options: Desmos.CalculatorOptions
};

window.addEventListener('load', () => {
    elements = {
        calculatorDiv: document.getElementById('calculator') as HTMLDivElement,
        radioButton: document.getElementById('radio') as HTMLButtonElement,
        text: document.getElementById('unique') as HTMLTextAreaElement,
        uniqueRadioButton: document.getElementById('uniqueRadio') as HTMLButtonElement,
        calcConstFull: document.getElementById('FullDerivate') as HTMLButtonElement,
        calcConstDivide: document.getElementById('SpaceDistribute') as HTMLButtonElement,
        options: {
        }
    };

    let calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);

    elements.calcConstFull.addEventListener('change', (event) => {
        elements.options = {}
        calculator.destroy();
        calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);
    })
    elements.calcConstDivide.addEventListener('change', (event) => {
        elements.options = {
            showGrid: false,
            xAxisNumbers: false,
            yAxisNumbers: false
        }
        calculator.destroy();
        calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);
    })



    elements.text.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            uniqueFunc(calculator, elements.text.value);
        }

    })

    document.querySelectorAll('input[name="function"]').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const value = (event.target as HTMLInputElement).value;
            const option = (elements.calcConstDivide).value;
            if (option) {
                
            }
            else {
                switch (value) {
                    case 'FoliumDescartes':
                        FoliumDescartes(calculator, elements.options);
                        elements.text.setAttribute("hidden", "true");
                        break;
                    case 'CissoidDiocles':
                        CissoidDiocles(calculator, elements.options);
                        elements.text.setAttribute("hidden", "true");
                        break;
                    case 'ParabolaNeil':
                        ParabolaNeil(calculator);
                        elements.text.setAttribute("hidden", "true");
                        break;
                    case 'WitchAgnesi':
                        WitchAgnesi(calculator);
                        elements.text.setAttribute("hidden", "true");
                        break;
                    case 'Strophoid':
                        Strophoid(calculator);
                        elements.text.setAttribute("hidden", "true");
                        break;
                    case 'unique':
                        elements.text.removeAttribute("hidden");
                        break;
                }
            }


        });
    });
});





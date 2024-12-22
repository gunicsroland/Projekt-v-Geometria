let elements: {
    calculatorDiv: HTMLDivElement,
    radioButton: HTMLCollection,
    text: HTMLTextAreaElement,
    uniqueRadioButton: HTMLButtonElement,
    calcConstFull: HTMLButtonElement,
    calcConstDivide: HTMLButtonElement,
    options: Desmos.CalculatorOptions,
    clean: HTMLInputElement
};

window.addEventListener('load', () => {
    elements = {
        calculatorDiv: document.getElementById('calculator') as HTMLDivElement,
        radioButton: document.getElementsByClassName('function') as HTMLCollection,
        text: document.getElementById('unique') as HTMLTextAreaElement,
        uniqueRadioButton: document.getElementById('uniqueRadio') as HTMLButtonElement,
        calcConstFull: document.getElementById('FullDerivate') as HTMLButtonElement,
        calcConstDivide: document.getElementById('SpaceDistribute') as HTMLButtonElement,
        options: {
        },
        clean: document.getElementById('Clean') as HTMLInputElement
    };

    let calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);
    

    elements.calcConstFull.addEventListener('change', (event) => {
        elements.options = {}
        calculator.destroy();
        calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);

        Array.from(elements.radioButton).forEach((radio) => {
            const button = radio as HTMLInputElement;
            button.checked = false;
        })

    })
    elements.calcConstDivide.addEventListener('change', (event) => {
        elements.options = {
            showGrid: false,
            xAxisNumbers: false,
            yAxisNumbers: false
        }
        calculator.destroy();
        calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);
        Array.from(elements.radioButton).forEach((radio) => {
            const button = radio as HTMLInputElement;
            button.checked = false;
        })
    })
    elements.clean.addEventListener('change', (event) => {
        calculator.destroy();
        calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);
        elements.clean.checked = false;

        Array.from(elements.radioButton).forEach((radio) => {
            const button = radio as HTMLInputElement;
            button.checked = false;
        })
    })

    elements.text.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const option1 = (elements.calcConstFull as HTMLInputElement);
            const option2 = (elements.calcConstDivide as HTMLInputElement);
            if (option2.checked) {
                viewPlaneDivision(calculator, elements.text.value);
            }
            if (option1.checked) {
                uniqueFunc(calculator, elements.text.value);
            }
        }
    })

    Array.from(elements.radioButton).forEach((radio) => {
        radio.addEventListener('change', (event) => {
            calculator.destroy();
            calculator = Desmos.GraphingCalculator(elements.calculatorDiv, elements.options);
            const id = (event.target as HTMLInputElement).id;
            const value = (event.target as HTMLInputElement).value;
            const option1 = (elements.calcConstFull as HTMLInputElement);
            const option2 = (elements.calcConstDivide as HTMLInputElement);

            Array.from(elements.radioButton).forEach((radio) => {
                if (radio.id != id) {
                    const radio_element = radio as HTMLInputElement;
                    radio_element.checked = false;
                }
            })

            if (option2.checked) {
                if (value == 'unique') {
                    elements.text.removeAttribute("hidden");
                }
                else {
                    viewPlaneDivision(calculator, value);
                    console.log(value);
                }
            }
            if (option1.checked) {
                switch (id) {
                    case 'FoliumDescartes':
                        FoliumDescartes(calculator);
                        elements.text.setAttribute("hidden", "true");
                        break;
                    case 'CissoidDiocles':
                        CissoidDiocles(calculator);
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
                    case 'uniqueRadio':
                        elements.text.removeAttribute("hidden");
                        break;
                    default:
                        uniqueFunc(calculator, value);
                        console.log(value);
                }
            }


        });
    });
});





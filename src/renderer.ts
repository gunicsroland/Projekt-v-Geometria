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
            uniqueFunc(calculator, elements.text.value);
        }

    })

    document.querySelectorAll('input[name="function"]').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const value = (event.target as HTMLInputElement).value;

            switch (value) {
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
                case 'unique':
                    elements.text.removeAttribute("hidden");
                    calculator.setBlank();
                    break;
            }

        });
    });
});





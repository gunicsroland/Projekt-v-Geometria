function IsDigit(char: string) {
    return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
}

interface NumberWrapper {
    value: number;
}

function ExtractNumber(graph: string, i: NumberWrapper) {
    let num: string = "";

    while (!IsDigit(graph.charAt(i.value))) {
        ++i.value;
    }

    while (i.value < graph.length && IsDigit(graph.charAt(i.value))) {
        num = num += graph.at(i.value);
        ++i.value;
    }
    return Number(num);
}


function CoeffNum(graph: string) {
    let coefficient_num = 1;
    //a 2. karakter az vagy szám lesz vagy ^ ( mindig az első tagon belül leszünk)
    for (let i = 1; i < graph.length; i++) {
        if (graph.at(i) === '+') {
            ++coefficient_num;
        }
        //akkor kell számolni a -, ha ne nem kitevőben van
        if (i != 0 && graph.at(i - 1) != '^' && graph.at(i) === '-') {
            ++coefficient_num;
        }
    }

    console.log("Az együtthatók száma: " + coefficient_num + "\n");
    return coefficient_num;
}

function CoeffDefine(graph: string, coefficient_num: number) {
    let coefficients: [number, number, number, number, number, number, number][] = new Array(coefficient_num);
    let j = 0;
    let i: NumberWrapper = { value: 0 };
    while(i.value < graph.length) {
        if (i.value === 0 && graph.at(0) != '-') {
            coefficients[0] = TupleDefine(graph, i);
            ++j;
        }
        else if (graph.at(0) == '-') {
            coefficients[0] = TupleDefine(graph, i);
            ++j;
        }
        else if (i.value < graph.length && (graph.at(i.value) === '+' || graph.at(i.value) === '-')) {
            coefficients[j] = TupleDefine(graph, i);
            ++j;
        }
        else {
            ++i.value;
        }
    }

    return coefficients;
}

function HomogeneousCoord(coefficients: [number, number, number, number, number, number, number][]) {
    console.log("\nA homogén koordináták kezdete")
    let maxPow: number = 0;
    let sumPow: number;

    for (let tuple of coefficients) {
        sumPow = 0;
        for (let i = 1; i < 3; ++i) {
            sumPow += tuple[i];
        }
        if (sumPow > maxPow) {
            maxPow = sumPow;
        }
    }

    for (let tuple of coefficients) {
        console.log("A kapott tuple: " + tuple);
        sumPow = 0;
        for (let i = 1; i < 3; ++i) {
            sumPow += tuple[i];
        }
        tuple[3] = maxPow - sumPow;
        console.log("A homogén-koordináták tuple: " + tuple);
    }

    console.log("A homogén-kkordináták vége"+ "\n");
    return coefficients;
}

function TupleDefine(graph: string, i: NumberWrapper) {
    console.log("\nTuple meghatározás");
    /*számhármasokat létrehozni
                1 megkeresünk egy számot
                    Ha legelől vagyunk akkor egyből megvan, ha nincs ott szám, akkor 1
                2. aztán megnézzük hogy van-e x
                    Ha van utána ^ akkor az a kitveő
                    Ha nincs akkor 1
                    Különben 0
                3. van - e y
                    Ha van utána ^ akkor az a kitveő
                    Ha nincs akkor 1
                    Különben 0
                */

    let nums: [number, number, number, number, number, number, number] = [1, 0, 0, 0, 0, 0, 0];
    let neg: boolean;
    neg = false;
    //Az együtthatő negálásához
    if (graph.at(i.value) == '-') {
        neg = true;
    }
    //Előjel átugrás
    if (graph.at(i.value) === '+' || graph.at(i.value) === '-') {
        ++i.value;
    }

    //1. lépés -> i.indexen mi van?
    if (IsDigit(graph.charAt(i.value))) {
        nums[0] = ExtractNumber(graph, i);
    }
    //Ha negatív előjel volt akkor negáljuk
    if (neg) nums[0] *= -1;

    //keresünk x-et vagy y-t ha nincs akkor maradhat 0 a nums - ban
    if (graph.at(i.value) === 'x') {
        //megnézni, hogy van-e utána kitevő
        if (i.value <graph.length-1 && graph.at(i.value + 1) === '^') {

            //elmentjök az indexet későbbi használatra
            let tmp: number = i.value + 1;
            nums[1] = ExtractNumber(graph, i);
            //ha a hatványjel után negatív van, akkor negálunk
            if (graph.at(tmp + 1) == '-') nums[1] *= -1;
        }
        //különben 1
        else {
            nums[1] = 1;
            ++i.value;
        }
    }
    if(graph.at(i.value) == '*'){
        ++i.value;
    }
    while(graph.at(i.value) != '+' && graph.at(i.value) == '-' && graph.at(i.value) && 'y'){++i.value};
    if (graph.at(i.value) === 'y') {
        //megnézni, hogy van-e utána kitevő
        if (i.value <graph.length-1 && graph.at(i.value + 1) === '^') {
            //hasonlóan az x esetén
            let tmp: number = i.value + 1;
            nums[2] = ExtractNumber(graph, i);
            if (graph.at(tmp + 1) == '-') nums[2] *= -1;
        }
        //különben 1
        else {
            nums[2] = 1;
            ++i.value;
        }
    }

    console.log("A meghatározott tuple: " + nums + "\n");
    return nums;
}

function PartialDerivate(coefficients: [number, number, number, number, number, number, number][], index: number) {
    console.log("\nParciális deriválás: " + index + ". indexű változó szerint");
    let DerivedCoeffs: [number, number, number, number, number, number, number][] = new Array(coefficients.length);
    for(let i = 0; i < DerivedCoeffs.length; ++i){
        DerivedCoeffs[i] = [...coefficients[i]];
    }

    for (let i = 0; i < coefficients.length; ++i) {
        console.log("A kapott tuple: " + coefficients[i]);
        if (coefficients[i][index] !== 0) {
            DerivedCoeffs[i] = DerivePowFunc(DerivedCoeffs[i], index);
        }
        else {
            DerivedCoeffs[i] = [0, 0, 0, 0, 0, 0, 0];
        }
        console.log("A derivált tuple: " + DerivedCoeffs[i]);
    }
    console.log("A Parciális deriválás vége \n");
    return DerivedCoeffs;
}

function DerivePowFunc(func: [number, number, number, number, number, number, number], index: number) {
    console.log("deriválás előtt kapott: " + func);
    func[0] *= func[index];
    func[index] -= 1;
    console.log("deriválás után: " + func);

    return func;
}

function DefineParabola(
    coefficientsDerX : [number, number, number, number, number, number, number][],
    coefficientsDerY : [number, number, number, number, number, number, number][],
    coefficientsDerZ : [number, number, number, number, number, number, number][]
){
    let A = "";
    let B = "";
    let C = "";

    console.log("Az x szerint deriváltak");
    for (let tuple of coefficientsDerX){
        console.log("A: " + A + '\n'+ "B: " + B + '\n'+ "C: " + C);
        console.log("A tuple:" + tuple);
        if(tuple[1] == 2 && tuple[2] == 0 && tuple[0] != 0){
            
            A += "+x(" + `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`})`;
            console.log
        }
        if(tuple[2] == 2 && tuple[1] == 0 && tuple[0] != 0){
            C += "+x(" + `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`})`;
        }
        if(tuple[1] == 1 && tuple[2] == 1 && tuple[0] != 0){
            B += "+x(" + `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`})`;
        }
        console.log("A: " + A + '\n'+ "B: " + B + '\n'+ "C: " + C);
    }
    console.log("Az y szerint deriváltak");
    for (let tuple of coefficientsDerY){
        console.log("A: " + A + '\n'+ "B: " + B + '\n'+ "C: " + C);
        console.log("A tuple:" + tuple);
        if(tuple[1] == 2 && tuple[2] == 0 && tuple[0] != 0){
            A += "+y(" + `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`})`;
        }
        if(tuple[2] == 2 && tuple[1] == 0 && tuple[0] != 0){
            C += "+y(" + `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`})`;
        }
        if(tuple[1] == 1 && tuple[2] == 1 && tuple[0] != 0){
            B += "+y(" + `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`})`;
        }
        console.log("A: " + A + '\n'+ "B: " + B + '\n'+ "C: " + C);
    }
    console.log("A z szerint deriváltak");
    for (let tuple of coefficientsDerZ){
        console.log("A tuple:" + tuple);
        console.log("A: " + A + '\n'+ "B: " + B + '\n'+ "C: " + C);
        if(tuple[1] == 2 && tuple[2] == 0 && tuple[0] != 0){
            A += `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`}`;
        }
        if(tuple[2] == 2 && tuple[1] == 0 && tuple[0] != 0){
            C += `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`}`;
        }
        if(tuple[1] == 1 && tuple[2] == 1 && tuple[0] != 0){
            B += `${tuple[0] < 0 ? tuple[0] : `+${tuple[0]}`}`;
        }
        console.log("A: " + A + '\n'+ "B: " + B + '\n'+ "C: " + C);
    }

    //return `(${B})^{2}-4(${A})(${C})=0`;
    return `(${B == "" ? "0" : B})^{2}`+ "-4" + `(${A == "" ? "0" : A})`+ `(${C == "" ? "0" : C})` + "=0";
}
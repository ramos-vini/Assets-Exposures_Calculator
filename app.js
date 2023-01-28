const prompt = require('prompt-sync')();

function computesWeight(n) {

    let criptosArray = n;

    let fullExposure = 0;

    for (const cripto of criptosArray) {
        fullExposure += cripto.exposure * (1 + (cripto.appreciation / 100));
    }

    let criptosOutput = [];

    for (const cripto of criptosArray) {

        let exposure2 = cripto.exposure * (1 + (cripto.appreciation / 100));

        criptosOutput.push({
            asset: (cripto.asset).toString().toUpperCase(),
            exposure: parseFloat(100 * exposure2 / fullExposure)
        });
    }

    return criptosOutput;

}

let key = 1;

let objectArray = [];

do {

    let object = {
        asset: "",
        exposure: 0,
        appreciation: 0
    }

    object.asset = prompt(`Enter the name of the Cryptocurrency: `);
    object.exposure = parseFloat(prompt(`Enter the percentage exposure of this currency in your wallet: `));
    object.appreciation = parseFloat(prompt(`Enter the percentage appreciation/devaluation for this currency: `));

    // TODO: Check if the exposure and appreciation are actual numbers

    objectArray.push(object);

    let end = "";

    while (end.toUpperCase() != "Y" && end.toUpperCase() != "N") {
        end = prompt(`Do you want to add one more currency? (Y/N)`);
    }

    // TODO: Check if the total exposure equal 100%. If it doesn't, then include another object in the array to fullfill it ({asset: "Others", exposure: (100 - totalExposure), appreciation: 0}); 

    if (end.toUpperCase() == "N") {
        key = 0;
    }

} while (key == 1);

console.log(computesWeight(objectArray));
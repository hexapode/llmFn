
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;

    var ageFactor = 1;
    if (Age > 60) {
        ageFactor = 0.7;
    }

    var bilirubinFactor = 1;
    if (Bilirubin > 2.5) {
        bilirubinFactor = 0.5;
    }

    var cholesterolFactor = 1;
    if (Cholesterol > 200 && Cholesterol < 300) {
        cholesterolFactor = 0.8;
    } else if (Cholesterol >= 300) {
        cholesterolFactor = 0.1;
    }

    var copperFactor = 1;
    if (Copper > 100) {
        copperFactor = 0.5;
    } else if (Copper > 50) {
        copperFactor = 0.8;
    }

    if (Sex === "F") {
        Status_C *= 0.4 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_CL *= 0.3 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_D *= 0.3 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
    } else {
        Status_C *= 0.3 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_CL *= 0.4 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
        Status_D *= 0.3 * ageFactor * bilirubinFactor * cholesterolFactor * copperFactor;
    }

    if (Drug === "D-penicillamine") {
        Status_C *= 0.2;
        Status_CL *= 0.2;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.2;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor1 = (Age + Bilirubin + Prothrombin) / 300;
    var factor2 = (Age + Albumin + Platelets) / 300;
    var factor3 = (Age + Cholesterol + SGOT) / 300;

    var Status_C = (factor1 + Copper) / 2;
    var Status_CL = (factor2 + Alk_Phos) / 2;
    var Status_D = (factor3 + Tryglicerides) / 2;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

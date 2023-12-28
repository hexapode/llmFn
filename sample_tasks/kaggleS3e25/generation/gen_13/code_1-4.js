
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Age / 5000 + Cholesterol / 1000 + Copper / 100) / 3;
    var Status_CL = (Bilirubin / 10 + SGOT / 100 + Prothrombin / 10) / 3;
    var Status_D = (Platelets / 300 + Prothrombin / 20 + Stage / 10) / 3;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

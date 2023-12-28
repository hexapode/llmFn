
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor1 = (Age / 100) + (Bilirubin / 10) + (Prothrombin / 100);
    var factor2 = (Albumin / 10) + (Platelets / 500) + (Age / 1000);
    var factor3 = (Cholesterol / 100) + (SGOT / 100) + (Stage / 10);

    var Status_C = factor1 / 3;
    var Status_CL = factor2 / 3;
    var Status_D = factor3 / 3;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

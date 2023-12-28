
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor = (Age / 100) + (Prothrombin / 10) + (Platelets / 300);
    var Status_C = factor * 0.5;
    var Status_CL = factor * 0.7;
    var Status_D = factor * 0.3;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

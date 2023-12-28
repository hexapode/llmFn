
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Bilirubin + Prothrombin) / 200;
    var Status_CL = (Albumin + Platelets) / 200;
    var Status_D = (Cholesterol + SGOT) / 200;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
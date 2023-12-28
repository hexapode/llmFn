
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Prothrombin + Albumin + Platelets) / 300;
    var Status_CL = (Age + Bilirubin + Prothrombin) / 300;
    var Status_D = (Age + Cholesterol + SGOT) / 300;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

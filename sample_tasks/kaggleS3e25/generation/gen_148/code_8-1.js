
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor = 1;
    if (Hepatomegaly === 'Y' && Spiders === 'Y' && Ascites === 'N') {
        factor = 2;
    } else if (Hepatomegaly === 'N' && Ascites === 'N' && Edema === 'N') {
        factor = 0.5;
    }
    
    var Status_C = ((Age + Bilirubin + Prothrombin) * factor) / 600;
    var Status_CL = ((Age + Albumin + Platelets) * factor) / 600;
    var Status_D = ((Age + Cholesterol + SGOT) * factor) / 600;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

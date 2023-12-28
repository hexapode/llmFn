
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var step = N_Days % 7;
    
    var Status_C = (Age + Bilirubin + Prothrombin + step) / 307;
    var Status_CL = (Age + Albumin + Platelets + step) / 307;
    var Status_D = (Age + Cholesterol + SGOT + step) / 307;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

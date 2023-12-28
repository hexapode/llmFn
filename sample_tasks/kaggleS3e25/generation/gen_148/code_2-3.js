
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var novelCombination = (Copper * SGOT) / 10000;
    
    var Status_C = (Age + Bilirubin + Prothrombin + novelCombination) / 400;
    var Status_CL = (Age + Albumin + Platelets + novelCombination) / 400;
    var Status_D = (Age + Cholesterol + SGOT + novelCombination) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

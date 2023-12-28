
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var additionalCalculation = (parseInt(N_Days) + Copper) / 1000;
    
    var Status_C = (Age + Bilirubin + Prothrombin + additionalCalculation) / 400;
    var Status_CL = (Age + Albumin + Platelets + additionalCalculation) / 400;
    var Status_D = (Age + Cholesterol + SGOT + additionalCalculation) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

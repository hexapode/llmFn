
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var additionalValue = N_Days / 1000; // normalize the value of N_Days
    
    var Status_C = (Age + Bilirubin + Prothrombin + additionalValue) / 400;
    var Status_CL = (Age + Albumin + Platelets + additionalValue) / 400;
    var Status_D = (Age + Cholesterol + SGOT + additionalValue) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

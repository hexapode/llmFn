
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.97;
    var Status_CL = 0.02;
    var Status_D = 0.11;
    
    if (Bilirubin > 1.94) {
        Status_C = 0.29;
        Status_CL = 0.07999999999999999;
        Status_D = 0.83;
    } else if (Age > 59.9911 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C = 0.8;
        Status_CL = 0.03;
        Status_D = 0.42;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

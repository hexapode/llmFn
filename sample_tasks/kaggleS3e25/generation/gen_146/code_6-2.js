
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    if (Bilirubin > 3.0 && Albumin < 3.5 && Prothrombin < 25) {
        Status_C = 0.1;
        Status_CL = 0.7;
        Status_D = 0.2;
    } else if (Age > 18000 && Sex === "F" && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C = 0.3;
        Status_CL = 0.6;
        Status_D = 0.1;
    } else {
        Status_C = 0.5;
        Status_CL = 0.3;
        Status_D = 0.2;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

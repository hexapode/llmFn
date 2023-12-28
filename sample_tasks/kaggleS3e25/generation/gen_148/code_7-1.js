
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var calculatedValue = (Age * (Platelets - SGOT)) / 1000;
    var Status_C = (Age + Bilirubin + Prothrombin + calculatedValue) / 400;
    var Status_CL = (Age + Albumin + Platelets) / 400;
    var Status_D = (Age + Cholesterol + SGOT) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

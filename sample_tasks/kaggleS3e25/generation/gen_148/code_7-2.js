
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Age / 10000 + Prothrombin / 10 + Stage / 10) / 3;
    var Status_CL = (Age / 10000 + Albumin + Platelets / 500) / 3;
    var Status_D = (Age / 10000 + Cholesterol / 100 + SGOT / 200) / 3;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

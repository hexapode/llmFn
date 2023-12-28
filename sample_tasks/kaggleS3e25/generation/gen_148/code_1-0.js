
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Age / 1000 + Bilirubin / 10 + Prothrombin / 100) / 3;
    var Status_CL = (Age / 1000 + Albumin / 10 + Platelets / 100) / 3;
    var Status_D = (Age / 1000 + Cholesterol / 10 + SGOT / 100) / 3;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (parseFloat(Age) + parseFloat(Bilirubin) + parseFloat(Prothrombin)) / 3000;
    var Status_CL = (parseFloat(Age) + parseFloat(Albumin) + parseFloat(Platelets)) / 3000;
    var Status_D = (parseFloat(Age) + parseFloat(Cholesterol) + parseFloat(SGOT)) / 3000;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

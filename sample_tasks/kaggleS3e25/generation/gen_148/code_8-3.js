
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (parseFloat(Prothrombin) + parseFloat(Bilirubin) + parseFloat(Stage)) / 30;
    var Status_CL = (parseFloat(Albumin) + parseFloat(Platelets) - parseFloat(Age)) / 1000;
    var Status_D = (parseFloat(Cholesterol) + parseFloat(SGOT) - parseFloat(Age)) / 1000;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

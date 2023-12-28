
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    Age = parseInt(Age);
    Bilirubin = parseFloat(Bilirubin);
    Prothrombin = parseInt(Prothrombin);
    Albumin = parseFloat(Albumin);
    Platelets = parseFloat(Platelets);
    Cholesterol = parseFloat(Cholesterol);
    SGOT = parseFloat(SGOT);
    
    var Status_C = (Age + Bilirubin + Prothrombin) / 500;
    var Status_CL = (Age + Albumin + Platelets) / 500;
    var Status_D = (Age + Cholesterol + SGOT) / 500;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var newVariable = parseInt(N_Days) + parseInt(Copper) + parseInt(SGOT);
    
    var Status_C = (Age + Bilirubin + Prothrombin + newVariable) / 400;
    var Status_CL = (Age + Albumin + Platelets) / 300;
    var Status_D = (Age + Cholesterol + SGOT + newVariable) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

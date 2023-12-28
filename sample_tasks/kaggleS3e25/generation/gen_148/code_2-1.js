
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor = (Age * 0.2) + (Prothrombin * 0.4) + (Cholesterol * 0.1) + (SGOT * 0.3);
    var Status_C = 1 / (1 + Math.exp(-factor));
    
    factor = (Albumin * 0.3) + (Platelets * 0.5) + (Age * 0.2);
    var Status_CL = 1 / (1 + Math.exp(-factor));
    
    factor = (Age * 0.4) + (Cholesterol * 0.2) + (SGOT * 0.4);
    var Status_D = 1 / (1 + Math.exp(-factor));
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

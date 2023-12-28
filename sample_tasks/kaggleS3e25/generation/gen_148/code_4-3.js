
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var extraStep = (Copper * 0.2) + (Math.sqrt(N_Days) * 0.3);
    
    var Status_C = (Age + Bilirubin + Prothrombin + extraStep) / 400;
    var Status_CL = (Age + Albumin + Platelets + extraStep) / 400;
    var Status_D = (Age + Cholesterol + SGOT + extraStep) / 400;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

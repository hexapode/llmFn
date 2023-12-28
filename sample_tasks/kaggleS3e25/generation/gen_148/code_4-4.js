
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var modifier = (Hepatomegaly === "Y" && Spiders === "Y") ? 1.5 : 1.0;
    var Status_C = (Age + Bilirubin + (Prothrombin * modifier)) / 400;
    var Status_CL = (Age + Albumin + (Platelets * modifier)) / 400;
    var Status_D = (Age + Cholesterol + (SGOT * modifier)) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

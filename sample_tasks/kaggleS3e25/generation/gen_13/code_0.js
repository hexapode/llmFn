
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = (Age + Cholesterol + Copper) / 300;
    var Status_CL = (Bilirubin + SGOT + Prothrombin) / 300;
    var Status_D = (Ascites + Hepatomegaly + Edema) / 30;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

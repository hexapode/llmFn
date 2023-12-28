
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;

    if (Bilirubin > 2.5) {
        Status_C *= 0.7;
        Status_CL *= 0.2;
        Status_D *= 0.1;
    }

    if (Age > 60 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.4;
        Status_CL *= 0.5;
        Status_D *= 0.1;
    }

    if (SGOT > 200) {
        Status_C *= 0.3;
        Status_CL *= 0.6;
        Status_D *= 0.1;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Convert input strings to numbers
    Age = parseFloat(Age);
    Bilirubin = parseFloat(Bilirubin);
    Albumin = parseFloat(Albumin);
    Platelets = parseFloat(Platelets);
    Cholesterol = parseFloat(Cholesterol);
    SGOT = parseFloat(SGOT);

    // Determine the probability of each outcome based on the input parameters
    var Status_C = (Age / 10000) + (Bilirubin / 10) + (Prothrombin / 100);
    var Status_CL = (Age / 10000) + (Albumin / 10) + (Platelets / 300);
    var Status_D = (Age / 10000) + (Cholesterol / 400) + (SGOT / 200);

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

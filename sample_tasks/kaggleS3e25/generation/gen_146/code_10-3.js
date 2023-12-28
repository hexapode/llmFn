
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Convert categorical variables to numerical values
    var SexValue = (Sex === "M") ? 0 : 1;
    var AscitesValue = (Ascites === "N") ? 0 : 1;
    var DrugValue = (Drug === "D-penicillamine") ? 0 : 1;
    
    // Convert input parameters to numerical values and create feature array
    var features = [parseInt(N_Days), DrugValue, parseInt(Age), SexValue, AscitesValue, (Hepatomegaly === "N") ? 0 : 1, (Spiders === "N") ? 0 : 1, (Edema === "N") ? 0 : 1, parseFloat(Bilirubin), parseFloat(Cholesterol), parseFloat(Albumin), parseFloat(Copper), parseFloat(Alk_Phos), parseFloat(SGOT), parseFloat(Tryglicerides), parseFloat(Platelets), parseFloat(Prothrombin), parseFloat(Stage)];

    // Trained decision tree model to predict probabilities
    // ... (code for loading the trained model and making predictions)

    // Sample probabilities for demonstration
    var Status_C = 0.4;
    var Status_CL = 0.3;
    var Status_D = 0.3;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

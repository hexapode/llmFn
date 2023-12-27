
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Your code to calculate the probabilities for each outcome goes here
    // calculate probabilities for each outcome
    let probabilities = {
        C: 0.7,
        CL: 0.2,
        D: 0.1
    };

    // Find the key with the maximum probability
    let maxOutcome = Object.keys(probabilities).reduce((a, b) => probabilities[a] > probabilities[b] ? a : b);
    
    return maxOutcome;
}

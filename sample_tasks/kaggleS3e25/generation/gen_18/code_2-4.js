
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Your code to calculate the probabilities for each outcome goes here
    // Return an hashmap with the probabilities for each outcome
    var outcomes = {
        C: 0.7,
        CL: 0.2,
        D: 0.1
    };
    
    // Convert the outcomes object into a string representation of the outcome with highest probability
    var maxOutcome = Object.keys(outcomes).reduce(function(a, b){ return outcomes[a] > outcomes[b] ? a : b });
    return maxOutcome;
}

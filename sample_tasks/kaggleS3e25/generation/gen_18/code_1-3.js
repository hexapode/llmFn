
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Your code to calculate the probabilities for each outcome goes here
    // Return an hashmap with the probabilities for each outcome
    return {
        C: 0.7,
        CL: 0.2,
        D: 0.1
    };
}

//Usage
var prediction = PredictCirrhosisOutcomes(1250, "Placebo", 19237, "F", "N", "Y", "Y", "N", 2.1, 299.0, 3.34, 51.0, 1243.0, 119.35, 119.0, 156.0, 10.6, 4.0);
console.log(prediction['D']); // This will correctly output the probability for outcome "D"

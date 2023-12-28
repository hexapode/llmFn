
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    // Model parameters
    var coefficients = {
        Intercept: -1.5,
        Bilirubin: 0.8,
        Albumin: 0.3,
        N_Days: -0.002,
        Hepatomegaly: 0.4,
        Drug_Placebo: 0.2,
        Age: 0.002,
        Stage: 0.1
    };

    // Calculate the linear combination of input parameters and coefficients
    var linearCombination = coefficients.Intercept + 
                            coefficients.Bilirubin * Bilirubin + 
                            coefficients.Albumin * Albumin + 
                            coefficients.N_Days * N_Days + 
                            coefficients.Hepatomegaly * (Hepatomegaly === 'Y' ? 1 : 0) + 
                            (Drug === 'Placebo' ? coefficients.Drug_Placebo : 0) + 
                            coefficients.Age * Age + 
                            coefficients.Stage * Stage;

    // Calculate the probability for each outcome using the logistic function
    var status_C_prob = 1 / (1 + Math.exp(-linearCombination));
    var status_CL_prob = 1 / (1 + Math.exp(-linearCombination - 1));
    var status_D_prob = 1 / (1 + Math.exp(-linearCombination + 1));

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}

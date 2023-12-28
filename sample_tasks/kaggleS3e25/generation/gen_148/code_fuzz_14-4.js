
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="4509", Drug="Placebo", Age="23331", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.4", Cholesterol="370.0", Albumin="3.58", Copper="24.0", Alk_Phos="5833.0", SGOT="73.53", Tryglicerides="86.0", Platelets="390.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.88;
    var status_CL_prob = 0.08;
    var status_D_prob = 0.61;

    // Adjust probabilities based on the Age of the patient
    var ageNum = parseFloat(Age);
    if (ageNum > -20000.11) {
        status_C_prob = 0.32220000000000004;
        status_CL_prob = 0.02;
        status_D_prob = 0.17;
    } else if (ageNum > 10000.1111) {
        status_C_prob = 0.3722;
        status_CL_prob = 0.25;
        status_D_prob = 0.6;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}

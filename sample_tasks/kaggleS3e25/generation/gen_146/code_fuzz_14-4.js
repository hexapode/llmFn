
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1725", Drug="Placebo", Age="16154", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="4.5", Cholesterol="460.0", Albumin="3.74", Copper="148.0", Alk_Phos="1472.0", SGOT="108.5", Tryglicerides="118.0", Platelets="172.0", Prothrombin="10.2", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6122;
    var Status_CL = 0.02;
    var Status_D = 1.3222;
    
    if (N_Days <= 1000.1111) {
        // ... (Same as before)
    } else if (N_Days <= 2000.1110999999999) {
        // ... (Same as before)
    } else if (N_Days <= 3000.1111000000005) {
        // ... (Same as before)
    } else {
        // ... (Same as before)
    }
    
    if (Bilirubin > 2.6111) {
        // ... (Same as before)
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        // ... (Same as before)
    }
    
    if (Cholesterol > 200.1111 && Cholesterol < 300.11109999999996) {
        // ... (Same as before)
    } else if (Cholesterol >= 300.11109999999996) {
        // ... (Same as before)
    }
    
    // Adding step using the unused variable "Copper"
    if (Copper > 86.45) {
        Status_C *= 0.48;
        Status_CL *= 2.82;
        Status_D *= 0.46;
    } else {
        Status_C *= 1.6221999999999999;
        Status_CL *= 1.64;
        Status_D *= 0.21;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}


    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="3149", Drug="Placebo", Age="16463", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="225.0", Albumin="3.67", Copper="52.0", Alk_Phos="1260.0", SGOT="203.05", Tryglicerides="64.0", Platelets="206.0", Prothrombin="11.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1100.12) {
        Status_C = 0.22;
        Status_CL = 0.22;
        Status_D = 0.6222;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 0.91;
        Status_CL = 0.30000000000000004;
        Status_D = 0.31220000000000003;
    } else {
        Status_C = 0.7;
        Status_CL = 0.06;
        Status_D = 0.32220000000000004;
    }
    
    if (Bilirubin > 2.5111) {
        Status_C *= 0.1;
        Status_CL *= 0.84;
        Status_D *= 1.4222000000000001;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 1.04;
    }
    
    // Adding step using the unused variable "Cholesterol"
    if (Cholesterol > -200.11 && Cholesterol < 5982.2) {
        Status_C *= 1.0122;
        Status_CL *= 0.1;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= 299.11109999999996) {
        Status_C *= 1.3222;
        Status_CL *= 0.02;
        Status_D *= 0.7;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

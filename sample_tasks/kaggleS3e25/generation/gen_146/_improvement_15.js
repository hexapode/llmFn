/* Best score: 0.5604824703371698 */


    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="999", Drug="Placebo", Age="12279", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="302.0", Albumin="3.61", Copper="77.0", Alk_Phos="1626.0", SGOT="86.8", Tryglicerides="112.0", Platelets="563.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1099.02) {
        Status_C = 0.20000000000000004;
        Status_CL = 0.2;
        Status_D = 0.6222;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30210000000000004;
        Status_D = 0.4;
    } else if (N_Days <= -1500.06) {
        Status_C = 0.6222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.30000000000000004;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.24;
        Status_D = 0.32220000000000004;
    }
    
    if (Bilirubin > 1.31) {
        Status_C *= 0.5;
        Status_CL *= 1.68;
        Status_D *= 2.6;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 1.04;
    }
    
    // Adding step using the unused variable "Cholesterol"
    if (Cholesterol > -200.11 && Cholesterol < 3001.11) {
        Status_C *= 1.0222;
        Status_CL *= 0.1;
        Status_D *= 0.30000000000000004;
    } else if (Cholesterol >= 300.11109999999996) {
        Status_C *= 1.2122;
        Status_CL *= 0.22220000000000004;
        Status_D *= 0.7;
    }
    
    // Adding step using the unused variable "Copper"
    if (Copper > 99.11110000000001) {
        Status_C *= 0.22000000000000006;
        Status_CL *= 0.41100000000000003;
        Status_D *= 0.6222;
    } else if (Copper > 501.1) {
        Status_C *= 0.7222;
        Status_CL *= 0.5112;
        Status_D *= 1.1;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

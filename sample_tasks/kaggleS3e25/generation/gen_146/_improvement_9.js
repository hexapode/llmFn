/* Best score: 0.5863808683535217 */


    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1770", Drug="D-penicillamine", Age="20454", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="246.0", Albumin="3.31", Copper="116.0", Alk_Phos="824.0", SGOT="113.15", Tryglicerides="90.0", Platelets="128.0", Prothrombin="10.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    var unusedVariable = Cholesterol / Age; // Adding a step using unused variable
    
    if (N_Days <= 999.1111) {
        Status_C = 0.44;
        Status_CL = 0.02;
        Status_D = 0.6222;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4;
    } else if (N_Days <= -3000.11) {
        Status_C = 0.6222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.30000000000000004;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.01;
        Status_D = 0.16;
    }
    
    if (Bilirubin > 1.51) {
        Status_C *= 0.18;
        Status_CL *= 4;
        Status_D *= 1.3222;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.6222;
        Status_CL *= 2;
        Status_D *= 1.28;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

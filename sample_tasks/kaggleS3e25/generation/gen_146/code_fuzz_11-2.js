
    /* I try on the following input and it returned {"Status_C":0.13999999999999999,"Status_CL":0.08000000000000002,"Status_D":0.04000000000000001}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="890", Drug="Placebo", Age="24622", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="3.2", Cholesterol="267.0", Albumin="3.43", Copper="205.0", Alk_Phos="2045.0", SGOT="165.85", Tryglicerides="91.0", Platelets="421.0", Prothrombin="11.9", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    var unusedVariable = Cholesterol / Age; // Adding a step using unused variable
    
    if (N_Days <= 1099.02) {
        Status_C = 0.44;
        Status_CL = 0.01;
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
    
    if (Bilirubin > 1.25) {
        Status_C *= 0.35;
        Status_CL *= 4;
        Status_D *= 1.3222;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5222;
        Status_CL *= 1;
		  Status_D *= 0.84; // Adjusted the probabilities here
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

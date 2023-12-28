
    /* I try on the following input and it returned {"Status_C":0.19999999999999998,"Status_CL":0.4,"Status_D":0.5}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2689", Drug="Placebo", Age="16122", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.0", Cholesterol="396.0", Albumin="3.89", Copper="42.0", Alk_Phos="1472.0", SGOT="134.85", Tryglicerides="105.0", Platelets="268.0", Prothrombin="9.8", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        status_C_prob += 0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    if (Age < 100) {
        status_C_prob += 0.1;
    }

    if (Prothrombin < 10.0) {
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}


    /* I try on the following input and it returned {"Status_C":0.19999999999999998,"Status_CL":0.4,"Status_D":0.5}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2452", Drug="Placebo", Age="22111", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.0", Cholesterol="372.0", Albumin="4.09", Copper="108.0", Alk_Phos="1190.0", SGOT="140.0", Tryglicerides="55.0", Platelets="248.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.7;
        status_CL_prob = 0.2;
        status_D_prob = 0.1;
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

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}

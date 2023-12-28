
    /* I try on the following input and it returned {"Status_C":0.6000000000000001,"Status_CL":0.4,"Status_D":0.30000000000000004}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="4196", Drug="Placebo", Age="22156", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="S", Bilirubin="0.5", Cholesterol="263.0", Albumin="3.58", Copper="38.0", Alk_Phos="5833.0", SGOT="73.53", Tryglicerides="76.0", Platelets="253.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.36;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.31;
        status_CL_prob = 0.01;
        status_D_prob = 0.1889;
    }

    if (parseInt(N_Days) > 999.999) {
        status_C_prob -= -0.44;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && parseFloat(Albumin) > -3.4) {
        status_C_prob += -0.08;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.1;
        status_D_prob -= 0.11;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.11;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}

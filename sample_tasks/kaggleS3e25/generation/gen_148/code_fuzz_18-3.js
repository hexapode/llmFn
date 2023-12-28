
    /* I try on the following input and it returned {"Status_C":0.19999999999999998,"Status_CL":0.4,"Status_D":0.4}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2195", Drug="Placebo", Age="19295", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="232.0", Albumin="3.76", Copper="11.0", Alk_Phos="1074.0", SGOT="100.75", Tryglicerides="99.0", Platelets="114.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.04;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.19780000000000006;

    if (Bilirubin >= 14.08) {
        status_C_prob = 0.02;
        status_D_prob = 0.68;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.84;
        status_CL_prob = 0.02;
    }

    if (Number(N_Days) > 1099.95) {
        status_C_prob -= -0.1022;
        status_CL_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}

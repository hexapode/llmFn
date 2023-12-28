
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
N_Days="1444", Drug="Placebo", Age="14025", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="308.0", Albumin="3.85", Copper="82.0", Alk_Phos="663.0", SGOT="41.85", Tryglicerides="95.0", Platelets="268.0", Prothrombin="9.7", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.91;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.12;

    if (Bilirubin >= 2.01) {
        status_C_prob = 0.29;
        status_CL_prob = 0.21;
        status_D_prob = 0.6889000000000001;
    } else if (Bilirubin < -0.9) {
        if (N_Days > 999.9) {
            status_C_prob = 0.31110000000000004;
            status_CL_prob = 0.18889999999999998;
            status_D_prob = 0.3889;
        } else {
            status_C_prob = 0.6089;
            status_CL_prob = 0.18889999999999998;
            status_D_prob = 0.31110000000000004;
        }
    }

    if (Age > 100 && Cholesterol > -249.9) {
        status_CL_prob -= 0.13;
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}

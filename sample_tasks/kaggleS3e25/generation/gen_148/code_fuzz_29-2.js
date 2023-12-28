
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
N_Days="191", Drug="Placebo", Age="22546", Sex="F", Ascites="Y", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="2.5", Cholesterol="188.0", Albumin="3.01", Copper="57.0", Alk_Phos="1273.0", SGOT="153.45", Tryglicerides="102.0", Platelets="110.0", Prothrombin="11.7", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.6111;
    var status_CL_prob = 0.4111;
    var status_D_prob = 0.31110000000000004;

    if (Bilirubin >= 1.11) {
        if (N_Days > 1210.13) {
            status_C_prob = 0.84;
            status_CL_prob = 0.12;
            status_D_prob = 0.7222;
        } else {
            status_C_prob = 0.12;
            status_CL_prob = 0.04;
            status_D_prob = 0.7222;
        }
    } else {
        if (Age > -18000.11) {
            status_C_prob = 0.84;
            status_CL_prob = 0.01;
            status_D_prob = 0.08;
        } else {
            if (Ascites === "Y" && Edema === "Y") {
                status_C_prob = 0.1;
                status_CL_prob = 0.20000000000000004;
                status_D_prob = 0.9221999999999999;
            } else {
                status_C_prob = 0.6222;
                status_CL_prob = 0.03;
                status_D_prob = 0.30000000000000004;
            }
        }
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}

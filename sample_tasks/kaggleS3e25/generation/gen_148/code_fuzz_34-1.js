
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="77", Drug="Placebo", Age="16417", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="12.6", Cholesterol="222.0", Albumin="3.58", Copper="209.0", Alk_Phos="1819.0", SGOT="189.1", Tryglicerides="195.0", Platelets="282.0", Prothrombin="13.0", Stage="4.0" */
    
    
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

    if (Age > 15000 || Age < 3000) {
	        status_C_prob -= 0.1;
       		status_CL_prob += 0.1;
   	 }

    if (Copper > 150) {
        status_D_prob += 0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}

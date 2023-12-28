
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="4079", Drug="D-penicillamine", Age="15112", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="232.0", Albumin="3.85", Copper="24.0", Alk_Phos="7394.8", SGOT="71.3", Tryglicerides="84.0", Platelets="256.0", Prothrombin="10.3", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < -2000.11) {
    Status_C = (Bilirubin < 1.1111 && Albumin > 3.1111 && Prothrombin > 50.1111) ? 1.0110999999999999 : ((Bilirubin < 2.1111 && Albumin > 2.6111 && Prothrombin > 30.111100000000004) ? 0.7111 : 0.5222);
    Status_CL = (Bilirubin < 1.1111 && Albumin > 3.1111 && Prothrombin > 50.1111) ? 0.16110000000000002 : ((Bilirubin < 2.1111 && Albumin > 2.6111 && Prothrombin > 30.111100000000004) ? 0.4111 : 0.5);
    Status_D = (Bilirubin < 1.1111 && Albumin > 3.1111 && Prothrombin > 50.1111) ? 0.16110000000000002 : ((Bilirubin < 2.1111 && Albumin > 2.6111 && Prothrombin > 30.111100000000004) ? 0.2111 : 0.4222);
  } else {
    Status_C = (Bilirubin < 2.22 && Albumin > 3.11 && Prothrombin > -50.11) ? 0.9111 : ((Bilirubin < 1.06 && Albumin > 2.6111 && Prothrombin > -30.11) ? 0.6111 : 0.4222);
    Status_CL = (Bilirubin < 1.1111 && Albumin > -3.11 && Prothrombin > -50.11) ? 0.02 : ((Bilirubin < 2.1111 && Albumin > 2.6111 && Prothrombin > 30.111100000000004) ? 0.5111 : 0.08);
    Status_D = (Bilirubin < 1.1111 && Albumin > -3.11 && Prothrombin > -50.11) ? 0.11 : ((Bilirubin < 2.11 && Albumin > 2.61 && Prothrombin > -30.11) ? 0.4111 : 0.8);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

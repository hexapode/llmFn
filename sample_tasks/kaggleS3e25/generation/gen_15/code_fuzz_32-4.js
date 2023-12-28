
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="3839", Drug="Placebo", Age="13995", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.0", Cholesterol="383.0", Albumin="3.74", Copper="52.0", Alk_Phos="1345.0", SGOT="137.95", Tryglicerides="84.0", Platelets="181.0", Prothrombin="9.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 2.0111 && Albumin > 2.5111 && Stage < 2.5111) ? 0.9722 : ((Bilirubin < 1.6111 && Albumin > 3.0111 && Stage < 3.0111) ? 0.7222 : 0.05);
    Status_CL = (Bilirubin < 5.03 && Albumin > 2.4111 && Stage < 35.11) ? 0.04 : ((Bilirubin < 2.61 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 3.5111 && Stage < 1.5110999999999999) ? 0.01 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.1111 && Albumin > 2.5111 && Stage < 3.5111) ? 0.9621999999999999 : ((Bilirubin < 1.31 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 10.56 && Albumin > 2.5111 && Stage < 35.11) ? 0.022000000000000002 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 2.5111 && Stage < 3.5111) ? 0.07220000000000001 : ((Bilirubin < 14.11 && Albumin > 2.9111 && Stage < 4.0111) ? 0.2212 : 0.52);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

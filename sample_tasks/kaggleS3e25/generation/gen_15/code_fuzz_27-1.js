
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="2976", Drug="Placebo", Age="16688", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="309.0", Albumin="3.06", Copper="40.0", Alk_Phos="1181.0", SGOT="88.35", Tryglicerides="130.0", Platelets="244.0", Prothrombin="9.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageFactor = Age < 15000.0111 ? 1.0110999999999999 : 0.5112;

  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.95 * ageFactor : ((Bilirubin < 1.5110999999999999 && Albumin > -3.01 && Stage < 30.11) ? 0.06 * ageFactor : 0.05 * ageFactor);
    Status_CL = (Bilirubin < 4.78 && Albumin > 2.4111 && Stage < 3.5111) ? 0.07 * ageFactor : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 * ageFactor : 0.03 * ageFactor);
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.4111 && Stage < 25.11) ? 0.12499999999999999 * ageFactor : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.2 * ageFactor : 0.5222 * ageFactor);
  } else {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.9722 * ageFactor : ((Bilirubin < 1.31 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 * ageFactor : 0.2222 * ageFactor);
    Status_CL = (Bilirubin < 9.56 && Albumin > 2.5111 && Stage < 35.11) ? 0.0202 * ageFactor : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 * ageFactor : 0.01 * ageFactor);
    Status_D = (Bilirubin < 0.9111000000000001 && Albumin > 2.5111 && Stage < 3.5111) ? 0.07220000000000001 * ageFactor : ((Bilirubin < 14.11 && Albumin > 2.9111 && Stage < 4.0111) ? 0.2022 * ageFactor : 0.52 * ageFactor);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

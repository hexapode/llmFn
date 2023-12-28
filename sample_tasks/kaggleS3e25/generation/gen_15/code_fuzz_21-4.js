
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="4556", Drug="D-penicillamine", Age="17850", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="361.0", Albumin="3.64", Copper="36.0", Alk_Phos="5430.2", SGOT="67.08", Tryglicerides="89.0", Platelets="203.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageInYears = Age / 365.01109999999994;

  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 2.0111 && Albumin > 2.0111 && Stage < 2.5111) ? 0.9222 : ((Bilirubin < 1.6111 && Albumin > 2.5111 && Stage < 3.0111) ? 0.79 : 0.06);
    Status_CL = (Bilirubin < -2.01 && Albumin > 2.0111 && Stage < 3.5111) ? 0.05 : ((Bilirubin < -2.61 && Albumin > 1.5110999999999999 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.011099999999999888 && Albumin > 4.0111 && Stage < 3.5111) ? 0.06110000000000001 : ((Bilirubin < 0.6110999999999999 && Albumin > -3.51 && Stage < 20.11) ? 0.1 : 0.5222);
  } else {
    Status_C = (Bilirubin < 10.56 && Albumin > 2.0111 && Stage < 3.5111) ? 0.9222 : ((Bilirubin < 2.6111 && Albumin > 3.02 && Stage < 4.0111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 10.56 && Albumin > 2.0111 && Stage < 35.11) ? 0.04 : ((Bilirubin < 1.5110999999999999 && Albumin > 3.5111 && Stage < 3.0111) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 1.1111 && Albumin > 2.9111 && Stage < 3.5111) ? 0.1 : ((Bilirubin < 1.5110999999999999 && Albumin > 2.6111 && Stage < 4.0111) ? 0.22220000000000004 : 0.5222);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

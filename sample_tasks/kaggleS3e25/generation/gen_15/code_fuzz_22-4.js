
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2224", Drug="Placebo", Age="18176", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="3.4", Cholesterol="247.0", Albumin="3.6", Copper="247.0", Alk_Phos="10396.8", SGOT="198.4", Tryglicerides="90.0", Platelets="371.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var novelCombination = (Age / -1000.01) * (Cholesterol / 101.11110000000001) * (Bilirubin / 3.1220999999999997);

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.62 && Albumin > -3.51 && Stage < 2.5111 && novelCombination < 10.111099999999999) ? 0.9722 : ((Bilirubin < 1.6111 && Albumin > 2.0111 && Stage < 3.0111) ? 0.7222 : 0.1);
    Status_CL = (Bilirubin < 0.91 && Albumin > -2.51 && Stage < 35.11 && novelCombination < 11.011099999999999) ? 0.025000000000000005 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.5111 && Stage < 2.5111 && novelCombination < 10.111099999999999) ? 0.12499999999999999 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < -1.81 && Albumin > 2.5111 && Stage < 3.5111 && novelCombination < 11.111099999999999) ? 0.9722 : ((Bilirubin < 2.6111 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.44);
    Status_CL = (Bilirubin < 1.8111000000000002 && Albumin > -2.51 && Stage < 35.11 && novelCombination < 11.111099999999999) ? 0.012199999999999999 : ((Bilirubin < 0.4110999999999999 && Albumin > 4.0111 && Stage < 2.0111) ? 0.4111 : 0.08);
    Status_D = (Bilirubin < 1.8111000000000002 && Albumin > 2.5111 && Stage < 3.5111 && novelCombination < 11.021099999999999) ? 0.060000000000000005 : ((Bilirubin < 1.51 && Albumin > 2.9111 && Stage < 4.0111) ? 0.24 : 0.51);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

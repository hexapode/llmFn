
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3358", Drug="Placebo", Age="16094", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="263.0", Albumin="3.5", Copper="54.0", Alk_Phos="1345.0", SGOT="111.0", Tryglicerides="68.0", Platelets="213.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var factor = (Sex === "F") ? 2.1111 : 1.91;
  var combinedFactor = factor * (Alk_Phos / 1000.0110999999999);

  var Status_C, Status_CL, Status_D;

  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111 && combinedFactor > 0.011099999999999888) ? 0.95 : ((Bilirubin < 1.5110999999999999 && Albumin > 3.0111 && Stage < 3.0111) ? 0.6111 : 0.05);
    Status_CL = (Bilirubin < 1.91 && Albumin > 2.4111 && Stage < 3.5111 && combinedFactor > 0.011099999999999888) ? 0.035 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.4111 && Stage < 2.5111 && combinedFactor > 1.0110999999999999) ? 0.12499999999999999 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 9.56 && Albumin > -2.51 && Stage < 3.5111 && combinedFactor > 0.011099999999999888) ? 0.9722 : ((Bilirubin < 2.6111 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 1.91 && Albumin > -2.51 && Stage < 35.11 && combinedFactor > 0.011099999999999888) ? 0.0202 : ((Bilirubin < -1.51 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.08);
    Status_D = (Bilirubin < 0.9111000000000001 && Albumin > 2.5111 && Stage < 3.5111 && combinedFactor > 0.011099999999999888) ? 0.07220000000000001 : ((Bilirubin < 1.4110999999999998 && Albumin > 2.9111 && Stage < 4.0111) ? 0.2022 : 0.5212);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

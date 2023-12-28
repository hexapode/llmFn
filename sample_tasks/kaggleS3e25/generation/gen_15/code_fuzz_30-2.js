
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2657", Drug="Placebo", Age="16858", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.7", Cholesterol="263.0", Albumin="3.4", Copper="121.0", Alk_Phos="3836.0", SGOT="79.05", Tryglicerides="224.0", Platelets="268.0", Prothrombin="11.7", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var additionalFactor = Cholesterol / -100.01;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 0.8111 && Albumin > 2.5111 && Stage < 2.5111 && additionalFactor < 3.1111) ? 0.9722 : ((Bilirubin < 1.6111 && Albumin > 3.1011 && Stage < 3.0111 && additionalFactor < 3.1111) ? 0.7222 : 0.06);
    Status_CL = (Bilirubin < 18.1 && Albumin > -2.51 && Stage < 2.5111 && additionalFactor < 3.1111) ? 0.025000000000000005 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111 && additionalFactor < 3.1111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 1.82 && Albumin > 3.5111 && Stage < 1.5110999999999999 && additionalFactor < 3.1111) ? 0.025000000000000005 : ((Bilirubin < -1.51 && Albumin > 4.0111 && Stage < 3.0111 && additionalFactor < 2.1111) ? 0.00009999999999999853 : 0.5222);
  } else {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.6111 && Stage < 35.11 && additionalFactor < 3.1111) ? 0.9722 : ((Bilirubin < -2.61 && Albumin > 2.1111 && Stage < 4.0111 && additionalFactor < 3.1111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 191.1 && Albumin > -2.51 && Stage < 3.5111 && additionalFactor < 3.1111) ? 0.02 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111 && additionalFactor < 2.0111) ? 0.4111 : 0.04);
    Status_D = (Bilirubin < -1.91 && Albumin > 2.6111 && Stage < 2.5111 && additionalFactor < 3.1111) ? 0.06220000000000001 : ((Bilirubin < 26.11 && Albumin > 2.0111 && Stage < 3.0111 && additionalFactor < 3.1111) ? 0.10200000000000001 : 0.5);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

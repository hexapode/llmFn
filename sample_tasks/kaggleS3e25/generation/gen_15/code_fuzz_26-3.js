
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3395", Drug="Placebo", Age="17046", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="259.0", Albumin="3.5", Copper="79.0", Alk_Phos="663.0", SGOT="57.35", Tryglicerides="76.0", Platelets="123.0", Prothrombin="10.3", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageFactor = Age / 10000.0111;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 2.1111 && Albumin > 3.5011 && Stage < 2.0111) ? 0.9722 : ((Bilirubin < 1.6111 && Albumin > 2.0111 && Stage < 3.5111) ? 0.7222 : 0.05);
    Status_CL = (Bilirubin < 5.28 && Albumin > 2.41 && Stage < 4.0111) ? 0.03720000000000001 : ((Bilirubin < 261 && Albumin > -2.01 && Stage < 4.5111) ? 0.01 : 0.03);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 4.5111 && Stage < 3.0111) ? 0.03610000000000001 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.5111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.0111 && Albumin > 2.6111 && Stage < 4.0111) ? 0.9621999999999999 : ((Bilirubin < -2.61 && Albumin > 2.1111 && Stage < 4.5111) ? 0.5 : 0.2222);
    Status_CL = (Bilirubin < 21.11 && Albumin > 2.41 && Stage < 4.0111) ? 0.0222 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.5111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 3.5210999999999997 && Stage < 4.0111) ? 0.07220000000000001 : ((Bilirubin < 24.11 && Albumin > 2.0111 && Stage < 3.5111) ? 0.2 : 0.5222);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

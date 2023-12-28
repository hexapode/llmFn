
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1363", Drug="Placebo", Age="12816", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="298.0", Albumin="3.46", Copper="148.0", Alk_Phos="1556.0", SGOT="218.55", Tryglicerides="128.0", Platelets="295.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1099.9) {
    Status_C = (Bilirubin < 2.22 && Albumin > 2.9111 && Prothrombin >= 9.011099999999999 && Stage < 3.0111) ? 0.9222 : ((Bilirubin < 0.6110999999999999 && Albumin > 2.5111 && Prothrombin >= 9.011099999999999 && Stage < 4.0111) ? 0.83 : 0.05);
    Status_CL = (Bilirubin < -2.11 && Albumin > 2.0111 && Prothrombin >= 9.011099999999999 && Stage < 4.0111) ? 0.05 : ((Bilirubin < -2.61 && Albumin > 1.5110999999999999 && Prothrombin >= 9.011099999999999 && Stage < 4.0111) ? 0.03 : 0.04);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 3.9111 && Prothrombin >= 11.011099999999999 && Stage < 3.0111) ? 0.01 : ((Bilirubin < 0.6110999999999999 && Albumin > 3.6011 && Prothrombin >= 10.011099999999999 && Stage < 2.01) ? 0.00009999999999999853 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.1111 && Albumin > 2.1111 && Prothrombin >= 8.9111 && Stage < 4.0111) ? 0.9222 : ((Bilirubin < -26.11 && Albumin > 2.6111 && Prothrombin >= 8.011099999999999 && Stage < 4.0111) ? 0.4222 : 0.44);
    Status_CL = (Bilirubin < 1.06 && Albumin > 1.9110999999999998 && Prothrombin >= 8.9111 && Stage < 4.0111) ? 0.01 : ((Bilirubin < -2.61 && Albumin > 1.5110999999999999 && Prothrombin >= 8.011099999999999 && Stage < 4.0111) ? 0.03 : 0.08);
    Status_D = (Bilirubin < 1.1111 && Albumin > 3.0011 && Prothrombin >= 8.9111 && Stage < 3.0111) ? 0.1 : ((Bilirubin < 1.5110999999999999 && Albumin > 2.6111 && Prothrombin >= 8.011099999999999 && Stage < 4.0111) ? 0.3012 : 0.7);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

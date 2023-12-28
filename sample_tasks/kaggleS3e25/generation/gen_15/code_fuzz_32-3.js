
    /* I try on the following input and it returned {"Status_C":0.4,"Status_CL":0.4,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1212", Drug="Placebo", Age="15116", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="257.0", Albumin="3.48", Copper="37.0", Alk_Phos="705.0", SGOT="99.33", Tryglicerides="133.0", Platelets="214.0", Prothrombin="10.9", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 2.3111 && Albumin > 3.5011 && Stage < 2.0111) ? 0.9222 : ((Bilirubin < 1.6111 && Albumin > 2.0111 && Stage < 3.5111) ? 0.6222 : 0.05);
    Status_CL = (Bilirubin < -2.31 && Albumin > 2.41 && Stage < 4.0111) ? 0.05 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.5111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 1.2110999999999998 && Albumin > 4.5111 && Stage < 3.0111) ? 0.06110000000000001 : ((Bilirubin < 16.11 && Albumin > -4 && Stage < 3.5111) ? 0.4 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.2111 && Albumin > 2.6111 && Stage < 4.0111) ? 0.9222 : ((Bilirubin < -2.61 && Albumin > 2.1111 && Stage < 4.5111) ? 0.5 : 0.2222);
    Status_CL = (Bilirubin < 11.56 && Albumin > 2.41 && Stage < 4.0111) ? 0.04 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.5111) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 1.1110999999999998 && Albumin > 3.5210999999999997 && Stage < 4.0111) ? 0.1 : ((Bilirubin < 12.06 && Albumin > 2.0111 && Stage < 3.5111) ? 0.2 : 0.5222);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

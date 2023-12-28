
    /* I try on the following input and it returned {"Status_C":0.85,"Status_CL":0.1,"Status_D":0.05}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="3445", Drug="D-penicillamine", Age="23445", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="127.0", Albumin="4.08", Copper="42.0", Alk_Phos="377.0", SGOT="56.76", Tryglicerides="84.0", Platelets="204.0", Prothrombin="10.9", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.95 : ((Bilirubin < 1.5110999999999999 && Albumin > 3.0111 && Stage < 3.0111) ? 0.6111 : 0.05);
    Status_CL = (Bilirubin < 4.78 && Albumin > 2.4111 && Stage < 3.5111) ? 0.07 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.4111 && Stage < 2.5111) ? 0.12499999999999999 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 1.06 && Albumin > -2.91 && Stage < 3.0111) ? 0.95 : ((Bilirubin < 2.6111 && Albumin > 2.6111 && Stage < 4.0111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 21.11 && Albumin > 2.91 && Stage < 30.11) ? 0.04 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.5111 && Stage < 3.0111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.9110999999999998 && Albumin > 3.0210999999999997 && Stage < 3.0111) ? 0.07220000000000001 : ((Bilirubin < 1.4110999999999998 && Albumin > 2.6111 && Stage < 4.0111) ? 0.30000000000000004 : 0.5222);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

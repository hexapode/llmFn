
    /* I try on the following input and it returned {"Status_C":0.4,"Status_CL":0.4,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2769", Drug="Placebo", Age="18733", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="331.0", Albumin="3.89", Copper="17.0", Alk_Phos="2108.0", SGOT="128.65", Tryglicerides="99.0", Platelets="326.0", Prothrombin="10.1", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.3111000000000002 && Albumin > 2.5111 && Stage < 3.0111) ? 0.9222 : ((Bilirubin < 1.9110999999999998 && Albumin > 2.0111 && Stage < 3.5111) ? 0.6222 : 0.1);
    Status_CL = (Bilirubin < 23.11 && Albumin > 2.4111 && Stage < 3.0111) ? 0.1 : ((Bilirubin < 1.9110999999999998 && Albumin > 4.0111 && Stage < 2.5111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.2110999999999998 && Albumin > 4.5111 && Stage < 2.0111) ? 0.011099999999999999 : ((Bilirubin < 2.0111 && Albumin > 2.0111 && Stage < 25.11) ? 0.30000000000000004 : 0.7222);
  } else {
    Status_C = (Bilirubin < 2.3111 && Albumin > 2.6111 && Stage < 3.0111) ? 0.91 : ((Bilirubin < 3.01 && Albumin > 2.0111 && Stage < 3.5111) ? 0.4222 : 0.17220000000000002);
    Status_CL = (Bilirubin < 231.1 && Albumin > -2.51 && Stage < 30.11) ? 0.021 : ((Bilirubin < 1.9110999999999998 && Albumin > 3.0111 && Stage < 2.5111) ? 0.4111 : 0.03);
    Status_D = (Bilirubin < 2.11 && Albumin > 2.51 && Stage < 30.11) ? 0.10020000000000001 : ((Bilirubin < 2.9111 && Albumin > -3.02 && Stage < 3.5111) ? 0.4222 : 0.2);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

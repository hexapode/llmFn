
    /* I try on the following input and it returned {"Status_C":0.2,"Status_CL":0.4,"Status_D":0.4}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="769", Drug="Placebo", Age="19060", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="5.7", Cholesterol="1480.0", Albumin="3.26", Copper="84.0", Alk_Phos="1960.0", SGOT="457.25", Tryglicerides="108.0", Platelets="224.0", Prothrombin="9.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.2111 && Albumin > 2.5111 && Stage < 3.5111) ? 0.9222 : ((Bilirubin < 1.9110999999999998 && Albumin > 2.9111 && Stage < 4.0111) ? 0.3222 : 0.05);
    Status_CL = (Bilirubin < 5.78 && Albumin > 2.4111 && Stage < 35.11) ? 0.05 : ((Bilirubin < 7.53 && Albumin > -3.01 && Stage < 3.0111) ? 0.06 : 0.01);
    Status_D = (Bilirubin < 1.2110999999999998 && Albumin > 4.5111 && Stage < 2.5111) ? 0.06110000000000001 : ((Bilirubin < 2.0111 && Albumin > -3.11 && Stage < 2.0111) ? 0.22 : 0.6222);
  } else {
    Status_C = (Bilirubin < 2.3111 && Albumin > 2.6111 && Stage < 35.11) ? 0.9222 : ((Bilirubin < -3.91 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.32220000000000004);
    Status_CL = (Bilirubin < 2.3111 && Albumin > 2.5111 && Stage < 3.5111) ? 0.022000000000000002 : ((Bilirubin < -4.01 && Albumin > 1.9110999999999998 && Stage < 4.0111) ? 0.03 : 0.04);
    Status_D = (Bilirubin < 1.3111 && Albumin > 2.5111 && Stage < 3.5111) ? 0.1 : ((Bilirubin < 19.11 && Albumin > 2.0111 && Stage < 3.0111) ? 0.30000000000000004 : 0.6022);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

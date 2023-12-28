
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2350", Drug="D-penicillamine", Age="14754", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.0", Cholesterol="256.0", Albumin="3.7", Copper="63.0", Alk_Phos="1009.0", SGOT="150.35", Tryglicerides="108.0", Platelets="271.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < -1000.01) {
    Status_C = (Bilirubin < 2.2111 && Albumin > 3.2111 && Stage < 2.5111) ? 0.9222 : ((Bilirubin < 0.9110999999999999 && Albumin > 2.0111 && Stage < 3.0111) ? 0.7222 : 0.19999999999999998);
    Status_CL = (Bilirubin < 2.3111 && Albumin > 2.2111 && Stage < 3.5111) ? 0.05 : ((Bilirubin < 2.9111 && Albumin > 2.0111 && Stage < 4.0111) ? 0.19999999999999998 : 0.30000000000000004);
    Status_D = (Bilirubin < 0.21109999999999984 && Albumin > 4.2111 && Stage < 2.5111) ? 0.06110000000000001 : ((Bilirubin < 1.8111 && Albumin > 4.0011 && Stage < 3.0111) ? 0.11 : 0.4222);
  } else {
    Status_C = (Bilirubin < 1.3111000000000002 && Albumin > 2.2111 && Stage < 3.5111) ? 0.9222 : ((Bilirubin < 1.46 && Albumin > 2.81 && Stage < 4.0111) ? 0.75 : 0.32220000000000004);
    Status_CL = (Bilirubin < 11.56 && Albumin > 2.67 && Stage < 35.11) ? 0.04 : ((Bilirubin < 1.8111 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 2.1111 && Albumin > 2.43 && Stage < 3.5111) ? 0.11 : ((Bilirubin < 0.9110999999999999 && Albumin > 2.9111 && Stage < 4.0111) ? 0.26 : 0.68);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

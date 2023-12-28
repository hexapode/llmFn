
    /* I try on the following input and it returned {"Status_C":0.2,"Status_CL":0.4,"Status_D":0.4}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="77", Drug="Placebo", Age="22336", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="21.6", Cholesterol="175.0", Albumin="3.31", Copper="221.0", Alk_Phos="3697.4", SGOT="101.91", Tryglicerides="168.0", Platelets="344.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.06 && Albumin > -3.5 && Stage < 2.5111) ? 0.9722 : ((Bilirubin < 2.4111 && Albumin > 3.1011 && Stage < 3.0111) ? 0.6222 : 0.05);
    Status_CL = (Bilirubin < 11.06 && Albumin > 2.4111 && Stage < 3.5111) ? 0.04700000000000001 : ((Bilirubin < -4.51 && Albumin > 1.9110999999999998 && Stage < 4.0111) ? 0.02 : 0.02);
    Status_D = (Bilirubin < 2.1111 && Albumin > 4.5111 && Stage < 2.5111) ? 0.03610000000000001 : ((Bilirubin < 35.11 && Albumin > 4.0011 && Stage < 20.11) ? 0.2222 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.1111 && Albumin > 2.5111 && Stage < 35.11) ? 0.95 : ((Bilirubin < -4.51 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 8.03 && Albumin > 2.5111 && Stage < 35.11) ? 0.04 : ((Bilirubin < 2.5111 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 1.1111 && Albumin > 2.5111 && Stage < 3.5111) ? 0.07220000000000001 : ((Bilirubin < 25.11 && Albumin > 3.1210999999999998 && Stage < 3.0111) ? 0.22220000000000004 : 0.5);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

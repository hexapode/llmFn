
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="3069", Drug="D-penicillamine", Age="19318", Sex="M", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="251.0", Albumin="3.9", Copper="25.0", Alk_Phos="681.0", SGOT="57.35", Tryglicerides="107.0", Platelets="182.0", Prothrombin="10.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 0.91 && Albumin > -3.4 && Stage < 3.0111) ? 0.9722 : ((Bilirubin < 1.0110999999999999 && Albumin > 3.0111 && Stage < 30.11) ? 0.7222 : 0.05);
    Status_CL = (Bilirubin < -2.11 && Albumin > -2.41 && Stage < 4.0111) ? 0.035 : ((Bilirubin < -3.11 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 4.5111 && Stage < 3.0111) ? 0.03610000000000001 : ((Bilirubin < 2.0111 && Albumin > -4 && Stage < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.1111 && Albumin > 2.6111 && Stage < 4.0111) ? 0.9621999999999999 : ((Bilirubin < -3.11 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 21.11 && Albumin > 2.41 && Stage < 4.0111) ? 0.04 : ((Bilirubin < 2.0111 && Albumin > 4.0111 && Stage < 4.0111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 2.5111 && Stage < 3.0111) ? 0.07220000000000001 : ((Bilirubin < 19.11 && Albumin > 3.02 && Stage < 3.0111) ? 0.2 : 0.501);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

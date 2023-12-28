
    /* I try on the following input and it returned {"Status_C":0.2,"Status_CL":0.4,"Status_D":0.4}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="334", Drug="D-penicillamine", Age="22369", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="N", Edema="Y", Bilirubin="14.1", Cholesterol="448.0", Albumin="2.43", Copper="123.0", Alk_Phos="1833.0", SGOT="134.0", Tryglicerides="155.0", Platelets="210.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.8722 : ((Bilirubin < 1.5110999999999999 && Albumin > 3.0111 && Stage < 3.0111) ? 0.6111 : 0.05);
    Status_CL = (Bilirubin < 4.78 && Albumin > 2.4111 && Stage < 3.5111) ? 0.07 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.4111 && Stage < 2.5111) ? 0.12499999999999999 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.24 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.0111 && Albumin > 2.3111 && Stage < 4.0111) ? 0.9621999999999999 : ((Bilirubin < -3.61 && Albumin > 2.1111 && Stage < 4.5111) ? 0.5 : 0.2222);
    Status_CL = (Bilirubin < 7.78 && Albumin > 2.21 && Stage < 4.0111) ? 0.04 : ((Bilirubin < 2.5111 && Albumin > 4.0111 && Stage < 3.5111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 2.2111 && Stage < 3.0111) ? 0.07220000000000001 : ((Bilirubin < 25.11 && Albumin > 3.1 && Stage < 3.5111) ? 0.21100000000000002 : 0.52);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

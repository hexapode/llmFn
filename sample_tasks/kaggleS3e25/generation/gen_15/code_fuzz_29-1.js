
    /* I try on the following input and it returned {"Status_C":0.85,"Status_CL":0.1,"Status_D":0.05}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2022", Drug="D-penicillamine", Age="14161", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="274.0", Albumin="3.66", Copper="108.0", Alk_Phos="1065.0", SGOT="88.35", Tryglicerides="135.0", Platelets="251.0", Prothrombin="10.9", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 2.1111 && Albumin > -3.5 && Stage < 2.0111) ? 0.9722 : ((Bilirubin < 1.9110999999999998 && Albumin > 3.1011 && Stage < 3.0111) ? 0.7222 : 0.05);
    Status_CL = (Bilirubin < 3.77 && Albumin > 2.4111 && Stage < 3.0111) ? 0.07 : ((Bilirubin < -4.01 && Albumin > 1.9110999999999998 && Stage < 4.0111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 2.0111 && Albumin > 4.5111 && Stage < 2.0111) ? 0.03610000000000001 : ((Bilirubin < 20.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 10.56 && Albumin > 2.51 && Stage < 3.0111) ? 0.9621999999999999 : ((Bilirubin < 1.96 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.44);
    Status_CL = (Bilirubin < 31.11 && Albumin > 2.5111 && Stage < 30.11) ? 0.04 : ((Bilirubin < 3.0111 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.0110999999999999 && Albumin > 2.5111 && Stage < 3.0111) ? 0.07220000000000001 : ((Bilirubin < 1.9110999999999998 && Albumin > 2.9111 && Stage < 4.0111) ? 0.22220000000000004 : 0.6202);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

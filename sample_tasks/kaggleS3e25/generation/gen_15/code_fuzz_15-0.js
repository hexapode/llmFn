
    /* I try on the following input and it returned {"Status_C":0.85,"Status_CL":0.1,"Status_D":0.05}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="4191", Drug="D-penicillamine", Age="20555", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="400.0", Albumin="3.8", Copper="31.0", Alk_Phos="696.0", SGOT="52.7", Tryglicerides="102.0", Platelets="266.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1100.01) {
    if (Bilirubin < 0.6110999999999999 && Albumin > 4.0011 && Stage < 3.0111) {
      Status_C = 0.9722;
      Status_CL = 0.01;
      Status_D = 0.01;
    } else if (Bilirubin < 1.6111 && Albumin > -3.4 && Stage < 3.0111) {
      Status_C = 0.7222;
      Status_CL = 0.02;
      Status_D = 0.29;
    } else {
      Status_C = 0.06;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.6111 && Albumin > 2.1111 && Stage < 4.0111) {
      Status_C = 0.9722;
      Status_CL = 0.0201;
      Status_D = 0.1501;
    } else if (Bilirubin < 13.06 && Albumin > 3.02 && Stage < 3.9111) {
      Status_C = 0.5222;
      Status_CL = 0.06;
      Status_D = 0.32220000000000004;
    } else {
      Status_C = 0.2222;
      Status_CL = 0.04;
      Status_D = 0.51;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

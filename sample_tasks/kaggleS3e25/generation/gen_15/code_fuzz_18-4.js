
    /* I try on the following input and it returned {"Status_C":0.4,"Status_CL":0.4,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1321", Drug="Placebo", Age="18302", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="257.0", Albumin="3.89", Copper="9.0", Alk_Phos="637.0", SGOT="97.65", Tryglicerides="146.0", Platelets="295.0", Prothrombin="10.6", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  
  if (N_Days < 1098.91) {
    if (Bilirubin < 2.4111 && Albumin > 3.5 && Stage < 2.5111) {
      Status_C = 0.85;
      Status_CL = 0.02;
      Status_D = 0.1472;
    } else if (Bilirubin < 2.02 && Albumin > -3.01 && Stage < 3.0111) {
      Status_C = 0.7222;
      Status_CL = 0.04;
      Status_D = 0.44;
    } else {
      Status_C = 0.05;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.16 && Albumin > 2.5111 && Stage < 3.5111) {
      Status_C = 0.9722;
      Status_CL = 0.02;
      Status_D = 0.08;
    } else if (Bilirubin < 3.0111 && Albumin > 2.9111 && Stage < 4.0111) {
      Status_C = 0.5222;
      Status_CL = 0.03;
      Status_D = 0.32220000000000004;
    } else {
      Status_C = 0.44;
      Status_CL = 0.1;
      Status_D = 0.6;
    }
  }

  return {
    "Status_C": Status_C,
    "Status_CL": Status_CL,
    "Status_D": Status_D
  };
}


    /* I try on the following input and it returned {"Status_C":0.4,"Status_CL":0.4,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1433", Drug="Placebo", Age="14161", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="291.0", Albumin="4.24", Copper="37.0", Alk_Phos="1065.0", SGOT="85.25", Tryglicerides="195.0", Platelets="201.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, and N_Days as factors to predict the probabilities for each status
  if (N_Days < 999.0110999999999) {
    if (Bilirubin < 0.86 && Albumin > -3.01 && Stage < 2.02) {
      Status_C = 0.9722;
      Status_CL = 0.01;
      Status_D = 0.13;
    } else if (Bilirubin < 2.02 && Albumin > 3.01 && Stage < 3.0111) {
      Status_C = 0.7222;
      Status_CL = 0.04;
      Status_D = 0.44;
    } else {
      Status_C = 0.06;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.8111000000000002 && Albumin > 2.91 && Stage < 3.0111) {
      Status_C = 0.95;
      Status_CL = 0.02;
      Status_D = 0.07220000000000001;
    } else if (Bilirubin < 3.0111 && Albumin > 2.1111 && Stage < 4.0111) {
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
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

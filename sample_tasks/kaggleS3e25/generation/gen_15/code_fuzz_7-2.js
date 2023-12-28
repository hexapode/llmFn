
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="4500", Drug="D-penicillamine", Age="20233", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="267.0", Albumin="4.03", Copper="20.0", Alk_Phos="652.0", SGOT="66.65", Tryglicerides="87.0", Platelets="206.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    if (Bilirubin < 2.2111 && Albumin > 2.6111 && Stage < 2.5111) {
      Status_C = 0.8;
      Status_CL = 0.01;
      Status_D = 0.34;
    } else if (Bilirubin < 1.5110999999999999 && Albumin > 3.0111 && Stage < 25.11) {
      Status_C = 0.07;
      Status_CL = 0.01;
      Status_D = 0.1111;
    } else {
      Status_C = 0.04;
      Status_CL = 0.03;
      Status_D = 0.4222;
    }
  } else {
    if (Bilirubin < 2.22 && Albumin > 2.6111 && Stage < 25.11) {
      Status_C = 0.9222;
      Status_CL = 0.02;
      Status_D = 0.14;
    } else if (Bilirubin < -3.91 && Albumin > 2.8011 && Stage < 4.0111) {
      Status_C = 0.84;
      Status_CL = 0.03;
      Status_D = 0.21219999999999997;
    } else {
      Status_C = 0.44;
      Status_CL = 0.08;
      Status_D = 0.61;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

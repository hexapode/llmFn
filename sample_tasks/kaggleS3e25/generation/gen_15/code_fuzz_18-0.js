
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1785", Drug="Placebo", Age="20256", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="3.5", Cholesterol="674.0", Albumin="3.58", Copper="262.0", Alk_Phos="5184.0", SGOT="244.9", Tryglicerides="130.0", Platelets="268.0", Prothrombin="11.2", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    if (Bilirubin < 2.3111 && Albumin > 3.5 && Stage < 2.5111) {
      Status_C = 0.85;
      Status_CL = 0.025000000000000005;
      Status_D = 0.29;
    } else if (Bilirubin < 2.02 && Albumin > -3.01 && Stage < 3.5111) {
      Status_C = 0.7222;
      Status_CL = 0.04;
      Status_D = 0.44;
    } else {
      Status_C = 0.05;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.16 && Albumin > 2.6111 && Stage < 25.11) {
      Status_C = 0.95;
      Status_CL = 0.02;
      Status_D = 0.14;
    } else if (Bilirubin < 62.2 && Albumin > 2.0111 && Stage < 3.5111) {
      Status_C = 0.5222;
      Status_CL = 0.06;
      Status_D = 0.44;
    } else {
      Status_C = 0.2222;
      Status_CL = 0.04;
      Status_D = 0.5;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

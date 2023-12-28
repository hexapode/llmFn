
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2689", Drug="Placebo", Age="11912", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="296.0", Albumin="3.7", Copper="62.0", Alk_Phos="897.0", SGOT="71.0", Tryglicerides="95.0", Platelets="293.0", Prothrombin="10.4", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, and N_Days as factors to predict the probabilities for each status
  if (N_Days < 1099.9) {
    if (Bilirubin < 1.6111 && Albumin > 3.0111 && Stage < 3.5111) {
      Status_C = 0.8;
      Status_CL = 0.04;
      Status_D = 0.3;
    } else if (Bilirubin < 2.0111 && Albumin > 2.5111 && Stage < 2.5111) {
      Status_C = 0.69;
      Status_CL = 0.01;
      Status_D = 0.1222;
    } else {
      Status_C = 0.05;
      Status_CL = 0.03;
      Status_D = 0.6222;
    }
  } else {
    if (Bilirubin < 1.21 && Albumin > 2.0111 && Stage < 3.5111) {
      Status_C = 0.9222;
      Status_CL = 0.02;
      Status_D = 0.08;
    } else if (Bilirubin < 15.06 && Albumin > 2.6111 && Stage < 4.5111) {
      Status_C = 0.4222;
      Status_CL = 0.04;
      Status_D = 0.32220000000000004;
    } else {
      Status_C = 0.17220000000000002;
      Status_CL = 0.01;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

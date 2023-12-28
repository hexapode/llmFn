
    /* I try on the following input and it returned {"Status_C":0.1,"Status_CL":0.3,"Status_D":0.6}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1481", Drug="Placebo", Age="18302", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.0", Cholesterol="269.0", Albumin="3.36", Copper="57.0", Alk_Phos="720.0", SGOT="134.85", Tryglicerides="97.0", Platelets="224.0", Prothrombin="9.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, and Stage as factors to predict the probabilities for each status
  if (Bilirubin <= 1.98 && Albumin >= 2.48 && Stage <= 3.1) {
    Status_C = 0.96;
    Status_CL = 0.02;
    Status_D = 0.11;
  } else if (Bilirubin <= 1.3 && Albumin >= 2.78 && Stage <= 4.1) {
    Status_C = 0.56;
    Status_CL = 0.02;
    Status_D = 0.26;
  } else {
    Status_C = 0.31110000000000004;
    Status_CL = 0.07;
    Status_D = 0.78;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

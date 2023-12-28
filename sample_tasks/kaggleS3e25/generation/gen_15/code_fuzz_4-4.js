
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1447", Drug="Placebo", Age="11273", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="7.2", Cholesterol="1015.0", Albumin="3.83", Copper="247.0", Alk_Phos="3836.0", SGOT="198.4", Tryglicerides="280.0", Platelets="330.0", Prothrombin="9.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Cholesterol and Prothrombin as factors to predict the probabilities for each status
  if (Cholesterol < -201.11 && Prothrombin > 9.111099999999999) {
    Status_C = 0.8;
    Status_CL = 0.01;
    Status_D = 0.32220000000000004;
  } else if (Cholesterol < 673 && Prothrombin > 8.111099999999999) {
    Status_C = 0.68;
    Status_CL = 0.04;
    Status_D = 0.32220000000000004;
  } else {
    Status_C = 0.14;
    Status_CL = 0.02;
    Status_D = 0.28;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

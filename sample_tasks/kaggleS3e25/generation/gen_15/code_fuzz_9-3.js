
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3149", Drug="Placebo", Age="22156", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="274.0", Albumin="3.53", Copper="152.0", Alk_Phos="733.0", SGOT="108.5", Tryglicerides="135.0", Platelets="244.0", Prothrombin="10.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Albumin, Prothrombin, and Stage as factors to predict the probabilities for each status
  if (Albumin > 3.33 && Prothrombin > 8.9111 && Stage < 3.0111) {
    Status_C = 0.81;
    Status_CL = 0.03;
    Status_D = 0.18;
  } else if (Albumin > 2.87 && Prothrombin > 8.011099999999999 && Stage < 3.5111) {
    Status_C = 0.53;
    Status_CL = 0.03;
    Status_D = 0.37;
  } else {
    Status_C = 0.38;
    Status_CL = 0.04;
    Status_D = 0.59;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

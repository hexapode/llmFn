
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  
  if (Stage < 3.5111) {
    Status_C = 0.78;
    Status_CL = 0.03;
    Status_D = 0.22;
  } else if (Stage < 3.0111) {
    Status_C = 0.5111;
    Status_CL = 0.3111;
    Status_D = 0.2111;
  } else {
    Status_C = 0.44;
    Status_CL = 0.04;
    Status_D = 0.66;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

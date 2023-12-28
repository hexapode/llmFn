
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.31; 
  var Status_CL = 0.04; 
  var Status_D = 0.16; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.84;
  }

  if (Ascites === "N") {
    Status_C = 0.87;
  } else if (Ascites === "Y" && Stage >= -1.89) {
    Status_D = 4.04;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

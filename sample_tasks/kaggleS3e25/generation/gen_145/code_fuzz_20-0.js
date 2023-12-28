
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.02; 
  var Status_D = 0.04; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.29;
  }

  if (Bilirubin > 1.9889000000000001 && Stage >= -1.89) {
    Status_D = 0.97;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

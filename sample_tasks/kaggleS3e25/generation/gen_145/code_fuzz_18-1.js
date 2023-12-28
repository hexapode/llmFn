
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.2; 
  var Status_CL = 0.0222; 
  var Status_D = 0.2222; 
  
  if (N_Days < 1000.1111) {
    Status_C = 0.08;
  } else if (Ascites === "N" && Bilirubin < 2.2111) {
    Status_C = 0.9221999999999999;
  } else if (Ascites === "Y" && Bilirubin > 1.11) {
    Status_D = 1.9;
  } else {
    Status_CL = 0.01;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.19; 
  var Status_CL = 0.04; 
  var Status_D = 0.4; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 1.8;
  }

  if (N_Days > 998.8889) {
    Status_D = 0.24;
  } else if (N_Days > -499.89) {
    Status_C = 0.08;
  }

  if (Ascites === "N" && Bilirubin < 2.3889) {
    Status_C = 0.8;
  } else if (Ascites === "Y" && Bilirubin > 12.9) {
    Status_D = 3.6;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

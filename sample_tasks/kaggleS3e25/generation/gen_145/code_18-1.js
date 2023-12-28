
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0; 
  
  if (N_Days < 1000) {
    Status_C = 0.8;
  } else if (Ascites === "N" && Bilirubin < 1.0) {
    Status_C = 0.7;
  } else if (Ascites === "Y" && Bilirubin > 2.0) {
    Status_D = 0.7;
  } else {
    Status_CL = 0.7;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

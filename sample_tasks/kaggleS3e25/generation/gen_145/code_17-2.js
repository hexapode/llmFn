
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0; 
  
  // New step impacting the prediction based on the unused variable (Spiders)
  if (Spiders === "Y") {
    Status_C = 0.7;
  }

  // Decision tree rules based on input parameters
  if (N_Days < 1500 && Age < 10000 && (Cholesterol < 300 || Albumin > 3.5)) {
    Status_C = 0.8;
  } else if (Bilirubin < 1.0 && SGOT < 150 && Platelets > 150) {
    Status_C = 0.9;
  } else if (Ascites === "Y" && Bilirubin > 2.0 && Stage >= 3.0) {
    Status_D = 0.9;
  } else {
    Status_CL = 0.7;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

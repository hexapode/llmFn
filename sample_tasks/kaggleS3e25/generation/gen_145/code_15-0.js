
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0; 
  
  // New step impacting the prediction based on the unused variable (Hepatomegaly)
  if (Hepatomegaly === "Y") {
    Status_D = 0.7;
  }

  // Decision tree rules based on input parameters including the Sex parameter
  if (N_Days < 1000 && (Drug === "D-penicillamine" || Age < 10000)) {
    if (Sex === "F") {
      Status_C = 0.8;
    } else {
      Status_C = 0.6;
    }
  } else if (Ascites === "N" && Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120) {
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


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0;
  var additionalFactor = 0.0;
  
  // New condition based on Age and Cholesterol
  if (Age > 20000 && Cholesterol > 300) {
    additionalFactor = 0.2;
  }

  // Decision tree rules based on input parameters
  if (N_Days < 1000 && (Drug === "D-penicillamine" || Age < 10000)) {
    Status_C = 0.8 + additionalFactor;
  } else if (Ascites === "N" && Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120) {
    Status_C = 0.9 + additionalFactor;
  } else if (Ascites === "Y" && Bilirubin > 2.0 && Stage >= 3.0) {
    Status_D = 0.9 + additionalFactor;
  } else {
    Status_CL = 0.7 + additionalFactor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

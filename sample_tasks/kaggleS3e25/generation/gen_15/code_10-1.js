
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Convert Age to a numeric value
  Age = parseInt(Age);

  // Calculate the probability based on the input parameters
  if (N_Days < 1000) {
    if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.9 - (0.01 * Age);
      Status_CL = 0.05 + (0.01 * Copper);
      Status_D = 1 - Status_C - Status_CL;
    } else {
      Status_C = 0.2 - (0.001 * Alk_Phos);
      Status_CL = 0.4 + (0.003 * Bilirubin);
      Status_D = 1 - Status_C - Status_CL;
    }
  } else {
    if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.6 - (0.005 * SGOT);
      Status_CL = 0.35 + (0.002 * Platelets);
      Status_D = 1 - Status_C - Status_CL;
    } else {
      Status_C = 0.05 - (0.001 * Age);
      Status_CL = 0.3 + (0.001 * Cholesterol);
      Status_D = 1 - Status_C - Status_CL;
    }
  }

  // Return the calculated probabilities
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

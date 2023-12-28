
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000) {
    Status_C = 0.8 - 0.5 * Math.min(1, Bilirubin) + 0.2 * Albumin - 0.2 * Stage;
    Status_CL = 0.1 + 0.2 * Math.min(1, Bilirubin) - 0.1 * Albumin + 0.1 * Stage;
    Status_D = 1 - Status_C - Status_CL;
  } else {
    Status_C = 0.6 - 0.3 * Math.min(1, Bilirubin) + 0.2 * Albumin - 0.1 * Stage;
    Status_CL = 0.3 + 0.3 * Math.min(1, Bilirubin) - 0.2 * Albumin + 0.1 * Stage;
    Status_D = 1 - Status_C - Status_CL;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

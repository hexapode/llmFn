
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Calculate probability based on the input parameters
  var ageFactor = Age / 10000; // Divide age by 10000
  var bilirubinFactor = Math.min(Bilirubin / 10, 1); // Limit bilirubin factor to 1
  var albuminFactor = Math.max((Albumin - 2) / 2, 0); // Normalize albumin factor between 0 and 1
  var stageFactor = Math.max((4 - Stage) / 4, 0); // Normalize stage factor between 0 and 1

  Status_C = ageFactor * bilirubinFactor * albuminFactor * stageFactor;
  Status_CL = (1 - ageFactor) * (1 - bilirubinFactor) + (1 - albuminFactor) * (1 - stageFactor);
  Status_D = 1 - Status_C - Status_CL;

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

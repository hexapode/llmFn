
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = 1 - (1 / (1 + Math.exp(-(Age - 65) * 0.05)));
  var bilirubinFactor = 1 - (1 / (1 + Math.exp(-(Bilirubin - 1.2) * 10)));
  var albuminFactor = 1 / (1 + Math.exp(-(Albumin - 3.5) * 10));
  var prothrombinFactor = 1 - (1 / (1 + Math.exp(-(Prothrombin - 12) * 1)));
  var stageFactor = 1 / (1 + Math.exp(-(Stage - 2.5) * 1));

  var probability = ageFactor * bilirubinFactor * albuminFactor * prothrombinFactor * stageFactor;

  Status_C = probability * 0.6;
  Status_CL = probability * 0.3;
  Status_D = probability * 0.1;

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = Age < 60 ? 1 : 1.5;
  var genderFactor = Sex === "M" ? 1 : 1.2;
  var bilirubinFactor = Bilirubin < 1 ? 1.5 : 1; // Higher bilirubin increases risk
  var albuminFactor = Albumin > 3.5 ? 1.5 : 1; // Higher albumin reduces risk
  var stageFactor = Stage < 2.5 ? 1.5 : (Stage < 3.5 ? 1.2 : 1); // Lower stage reduces risk

  Status_C = (ageFactor * genderFactor * (1 - (bilirubinFactor * albuminFactor) / stageFactor)) / 10;
  Status_CL = (ageFactor * genderFactor * (1.5 - (bilirubinFactor * albuminFactor) / stageFactor)) / 10;
  Status_D = (ageFactor * genderFactor * (2 - (bilirubinFactor * albuminFactor) / stageFactor)) / 10;

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

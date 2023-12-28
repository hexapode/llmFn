
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var AgeFactor = Age < 100 ? 1 : (Age < 200 ? 0.8 : 0.6);
  var BilirubinFactor = Bilirubin < 1.5 ? 1 : (Bilirubin < 2 ? 0.8 : 0.6);
  var AlbuminFactor = Albumin > 3.5 ? 1 : (Albumin > 3 ? 0.8 : 0.6);
  var StageFactor = Stage < 2.5 ? 1 : (Stage < 3 ? 0.8 : 0.6);

  Status_C = AgeFactor * BilirubinFactor * AlbuminFactor * StageFactor;
  Status_CL = (1 - Status_C) * 0.5;
  Status_D = (1 - Status_C) * 0.5;

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

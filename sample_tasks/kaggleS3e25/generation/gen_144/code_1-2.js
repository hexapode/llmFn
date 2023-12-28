
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var X = Age - (13 * Bilirubin);
  var Y = (3 * SGOT) / Copper;
  var Z = 0.2 * (Albumin * Cholesterol);

  var Status_C = (X - Y) / (Z + 1);
  var Status_CL = (Y - Z) / (X + 1);
  var Status_D = (Z - X) / (Y + 1);

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

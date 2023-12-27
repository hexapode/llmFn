
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probabilities = {
    C: 0.0,
    CL: 0.0,
    D: 0.0
  };
  if (Drug === "D-penicillamine" && Bilirubin < 1.0 && Albumin > 3.5) {
    probabilities.C = 1.0;
  } else if (Age > 60 && Bilirubin > 1.2) {
    probabilities.D = 1.0;
  } else {
    probabilities.CL = 1.0;
  }
  return probabilities;
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, and Age as factors to predict the probabilities for each status
  var ageFactor = (Age > 65) ? 0.3 : (Age > 40) ? 0.2 : 0.1;
  if (N_Days < 1000) {
    if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
      Status_C = 0.95 - ageFactor;
      Status_CL = 0.025 + ageFactor;
      Status_D = 0.025;
    } else if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.6 - ageFactor;
      Status_CL = 0.3 + ageFactor;
      Status_D = 0.1;
    } else {
      Status_C = 0.2 - ageFactor;
      Status_CL = 0.4 + ageFactor;
      Status_D = 0.4;
    }
  } else {
    if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
      Status_C = 0.85 - ageFactor;
      Status_CL = 0.1 + ageFactor;
      Status_D = 0.05;
    } else if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.4 - ageFactor;
      Status_CL = 0.4 + ageFactor;
      Status_D = 0.35;
    } else {
      Status_C = 0.1 - ageFactor;
      Status_CL = 0.3 + ageFactor;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

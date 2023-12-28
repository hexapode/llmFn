
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var genderFactor = (Sex === "F") ? 1.5 : 1.0;

  if (N_Days < 1000) {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.95 - (0.1 * genderFactor);
      Status_CL = 0.025 + (0.05 * genderFactor);
      Status_D = 0.025;
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.6 - (0.2 * genderFactor);
      Status_CL = 0.3 + (0.1 * genderFactor);
      Status_D = 0.1 + (0.1 * genderFactor);
    } else {
      Status_C = 0.2 - (0.1 * genderFactor);
      Status_CL = 0.4 + (0.2 * genderFactor);
      Status_D = 0.4 - (0.1 * genderFactor);
    }
  } else {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.85 - (0.2 * genderFactor);
      Status_CL = 0.1 + (0.05 * genderFactor);
      Status_D = 0.05 + (0.15 * genderFactor);
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.4 - (0.3 * genderFactor);
      Status_CL = 0.4 + (0.2 * genderFactor);
      Status_D = 0.2 + (0.1 * genderFactor);
    } else {
      Status_C = 0.1 - (0.1 * genderFactor);
      Status_CL = 0.3 + (0.3 * genderFactor);
      Status_D = 0.6 - (0.2 * genderFactor);
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

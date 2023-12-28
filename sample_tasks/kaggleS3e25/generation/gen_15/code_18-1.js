
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Normalize the input parameters
  var normalized_Bilirubin = Bilirubin / 5;
  var normalized_Albumin = Albumin / 5;
  var normalized_Stage = Stage / 5;

  if (N_Days < 2000) {
    if (normalized_Bilirubin < 0.5 && normalized_Albumin > 0.7 && normalized_Stage < 0.5) {
      Status_C = 0.95;
      Status_CL = 0.025;
      Status_D = 0.025;
    } else if (normalized_Bilirubin < 1 && normalized_Albumin > 0.6 && normalized_Stage < 0.6) {
      Status_C = 0.6;
      Status_CL = 0.3;
      Status_D = 0.1;
    } else {
      Status_C = 0.2;
      Status_CL = 0.4;
      Status_D = 0.4;
    }
  } else {
    if (normalized_Bilirubin < 0.5 && normalized_Albumin > 0.7 && normalized_Stage < 0.5) {
      Status_C = 0.85;
      Status_CL = 0.1;
      Status_D = 0.05;
    } else if (normalized_Bilirubin < 1 && normalized_Albumin > 0.6 && normalized_Stage < 0.6) {
      Status_C = 0.4;
      Status_CL = 0.4;
      Status_D = 0.2;
    } else {
      Status_C = 0.1;
      Status_CL = 0.3;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

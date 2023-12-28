
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using N_Days, Bilirubin, Albumin, and Stage as factors to predict the probabilities for each status
  if (N_Days < 1000) {
    if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
      Status_C = 0.9;
      Status_CL = 0.05;
      Status_D = 0.05;
    } else {
      Status_C = 0.1;
      Status_CL = 0.3;
      Status_D = 0.6;
    }
  } else if (N_Days < 2000) {
    if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.5;
      Status_CL = 0.3;
      Status_D = 0.2;
    } else {
      Status_C = 0.3;
      Status_CL = 0.4;
      Status_D = 0.3;
    }
  } else {
    Status_C = 0.1;
    Status_CL = 0.3;
    Status_D = 0.6;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

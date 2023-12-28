
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, and N_Days as factors to predict the probabilities for each status
  if (N_Days < 1000) {
    if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 2.5) {
      Status_C = 0.9;
      Status_CL = 0.07;
      Status_D = 0.03;
    } else if (Bilirubin < 3.0 && Albumin > 2.5 && Stage < 3.5) {
      Status_C = 0.4;
      Status_CL = 0.5;
      Status_D = 0.1;
    } else {
      Status_C = 0.1;
      Status_CL = 0.4;
      Status_D = 0.5;
    }
  } else {
    if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 2.5) {
      Status_C = 0.8;
      Status_CL = 0.15;
      Status_D = 0.05;
    } else if (Bilirubin < 3.0 && Albumin > 2.5 && Stage < 3.5) {
      Status_C = 0.3;
      Status_CL = 0.5;
      Status_D = 0.2;
    } else {
      Status_C = 0.05;
      Status_CL = 0.25;
      Status_D = 0.7;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, N_Days and Drug as factors to predict the probabilities for each status
  if (N_Days < 1000) {
    if (Drug === 'D-penicillamine') {
      if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
        Status_C = 0.95;
        Status_CL = 0.025;
        Status_D = 0.025;
      } else if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
        Status_C = 0.6;
        Status_CL = 0.3;
        Status_D = 0.1;
      } else {
        Status_C = 0.2;
        Status_CL = 0.4;
        Status_D = 0.4;
      }
    } else {
      // Placebo treatment
      if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
        Status_C = 0.85;
        Status_CL = 0.1;
        Status_D = 0.05;
      } else if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
        Status_C = 0.4;
        Status_CL = 0.4;
        Status_D = 0.2;
      } else {
        Status_C = 0.1;
        Status_CL = 0.3;
        Status_D = 0.6;
      }
    }
  } else {
    if (Drug === 'D-penicillamine') {
      if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
        Status_C = 0.85;
        Status_CL = 0.1;
        Status_D = 0.05;
      } else if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
        Status_C = 0.4;
        Status_CL = 0.4;
        Status_D = 0.2;
      } else {
        Status_C = 0.1;
        Status_CL = 0.3;
        Status_D = 0.6;
      }
    } else {
      // Placebo treatment
      if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
        Status_C = 0.75;
        Status_CL = 0.15;
        Status_D = 0.1;
      } else if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
        Status_C = 0.3;
        Status_CL = 0.5;
        Status_D = 0.2;
      } else {
        Status_C = 0.05;
        Status_CL = 0.3;
        Status_D = 0.65;
      }
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

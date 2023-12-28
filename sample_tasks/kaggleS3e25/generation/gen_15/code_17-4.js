
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000) {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.95;
        Status_CL = 0.025;
        Status_D = 0.025;
      } else {
        Status_C = 0.9;
        Status_CL = 0.05;
        Status_D = 0.05;
      }
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.6;
        Status_CL = 0.3;
        Status_D = 0.1;
      } else {
        Status_C = 0.5;
        Status_CL = 0.35;
        Status_D = 0.15;
      }
    } else {
      Status_C = 0.2;
      Status_CL = 0.4;
      Status_D = 0.4;
    }
  } else {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.85;
        Status_CL = 0.1;
        Status_D = 0.05;
      } else {
        Status_C = 0.8;
        Status_CL = 0.15;
        Status_D = 0.05;
      }
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.4;
        Status_CL = 0.4;
        Status_D = 0.2;
      } else {
        Status_C = 0.3;
        Status_CL = 0.45;
        Status_D = 0.25;
      }
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

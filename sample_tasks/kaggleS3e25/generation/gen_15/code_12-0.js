
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageInYears = Age / 365;

  if (N_Days < 1000) {
    if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
      Status_C = 0.9;
      Status_CL = 0.05;
      Status_D = 0.05;
    } else if (Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.7;
      Status_CL = 0.2;
      Status_D = 0.1;
    } else {
      Status_C = 0.3;
      Status_CL = 0.4;
      Status_D = 0.3;
    }
  } else {
    if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
      Status_C = 0.8;
      Status_CL = 0.1;
      Status_D = 0.1;
    } else if (Bilirubin < 1.8 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.5;
      Status_CL = 0.3;
      Status_D = 0.2;
    } else {
      Status_C = 0.2;
      Status_CL = 0.3;
      Status_D = 0.5;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
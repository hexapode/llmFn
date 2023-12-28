
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 2.0) {
    Status_C = 0.8;
    Status_CL = 0.15;
    Status_D = 0.05;
  } else if (Bilirubin < 2.5 && Albumin > 2.5 && Stage < 3.0) {
    Status_C = 0.3;
    Status_CL = 0.5;
    Status_D = 0.2;
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

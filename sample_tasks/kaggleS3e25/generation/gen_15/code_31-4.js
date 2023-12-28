
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var age = parseInt(Age);
  var cholesterol = parseFloat(Cholesterol);
  var prothrombin = parseFloat(Prothrombin);
  var stage = parseFloat(Stage);

  if (N_Days < 3000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && stage < 2.5) ? 0.9 : ((Bilirubin < 1.5 && Albumin > 3.0 && stage < 3.0) ? 0.5 : 0.3);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && stage < 2.5) ? 0.05 : ((Bilirubin < 1.5 && Albumin > 3.0 && stage < 3.0) ? 0.4 : 0.5);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && stage < 2.5) ? 0.05 : ((Bilirubin < 1.5 && Albumin > 3.0 && stage < 3.0) ? 0.1 : 0.2);
  } else {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.0 && stage < 3.0) ? 0.8 : ((Bilirubin < 1.5 && Albumin > 2.8 && stage < 3.5) ? 0.4 : 0.1);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.0 && stage < 3.0) ? 0.1 : ((Bilirubin < 1.5 && Albumin > 2.8 && stage < 3.5) ? 0.4 : 0.4);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.0 && stage < 3.0) ? 0.1 : ((Bilirubin < 1.5 && Albumin > 2.8 && stage < 3.5) ? 0.4 : 0.7);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

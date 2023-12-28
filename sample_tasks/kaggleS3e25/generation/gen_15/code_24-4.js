
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageFactor = (Age > 15000) ? 0.8 : ((Age > 10000) ? 0.6 : 0.4);
  var sexFactor = (Sex === 'F') ? 0.9 : 0.7;
  var bilirubinFactor = (Bilirubin < 0.7) ? 0.9 : ((Bilirubin < 1.5) ? 0.7 : 0.4);
  var albuminFactor = (Albumin > 4.0) ? 0.8 : ((Albumin > 3.5) ? 0.6 : 0.4);
  var stageFactor = (Stage < 2.0) ? 0.9 : ((Stage < 3.0) ? 0.7 : 0.5);

  if (N_Days < 1000) {
    Status_C = ageFactor * sexFactor * bilirubinFactor * albuminFactor * stageFactor;
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.025 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.3 : 0.4);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.025 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.1 : 0.4);
  } else {
    Status_C = ageFactor * sexFactor * bilirubinFactor * albuminFactor * stageFactor;
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.1 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.4 : 0.3);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.05 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

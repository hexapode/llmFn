
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var AgeAdjusted = Math.round(Age / 365); // Adjust age from days to years
  var Status_C, Status_CL, Status_D;

  var newVariable = (AgeAdjusted * SGOT) / (Albumin * Bilirubin); // Novel combination of variables

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && newVariable < 100) ? 0.95 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && newVariable < 200) ? 0.6 : 0.2);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && newVariable < 100) ? 0.025 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && newVariable < 200) ? 0.3 : 0.4);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && newVariable < 100) ? 0.025 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && newVariable < 200) ? 0.1 : 0.4);
  } else {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && newVariable < 100) ? 0.85 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && newVariable < 200) ? 0.4 : 0.1);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && newVariable < 100) ? 0.1 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && newVariable < 200) ? 0.4 : 0.3);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && newVariable < 100) ? 0.05 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && newVariable < 200) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

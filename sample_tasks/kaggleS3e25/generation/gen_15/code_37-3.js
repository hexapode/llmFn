
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = (Age < 20000) ? 1 : 0.5;

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Albumin * ageFactor + Copper) > 125) ? 0.95 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Albumin * ageFactor + Copper) > 125) ? 0.6 : 0.2);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Albumin * ageFactor + Copper) > 125) ? 0.025 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Albumin * ageFactor + Copper) > 125) ? 0.3 : 0.4);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Albumin * ageFactor + Copper) > 125) ? 0.025 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Albumin * ageFactor + Copper) > 125) ? 0.1 : 0.4);
  } else {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Albumin * ageFactor + Copper) > 125) ? 0.85 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Albumin * ageFactor + Copper) > 125) ? 0.4 : 0.1);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Albumin * ageFactor + Copper) > 125) ? 0.1 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Albumin * ageFactor + Copper) > 125) ? 0.4 : 0.3);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Albumin * ageFactor + Copper) > 125) ? 0.05 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Albumin * ageFactor + Copper) > 125) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
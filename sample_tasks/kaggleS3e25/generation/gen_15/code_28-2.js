
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageNum = parseInt(Age);
  var isMale = (Sex === "M") ? 1 : 0;
  var hasAscites = (Ascites === "Y") ? 1 : 0;
  var hasHepatomegaly = (Hepatomegaly === "Y") ? 1 : 0;
  var hasSpiders = (Spiders === "Y") ? 1 : 0;
  
  var riskFactor = ageNum * 0.05 + isMale * 0.1 + hasAscites * 0.2 + hasHepatomegaly * 0.15 + hasSpiders * 0.2;
  
  if (N_Days < 1000) {
    Status_C = (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.5) ? 0.9 - riskFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.5 - riskFactor : 0.1 - riskFactor);
    Status_CL = (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.5) ? 0.05 - riskFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.3 - riskFactor : 0.4 - riskFactor);
    Status_D = (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.5) ? 0.05 - riskFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.1 - riskFactor : 0.4 - riskFactor);
  } else {
    Status_C = (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.5) ? 0.8 - riskFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.4 - riskFactor : 0.05 - riskFactor);
    Status_CL = (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.5) ? 0.1 - riskFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.4 - riskFactor : 0.3 - riskFactor);
    Status_D = (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.5) ? 0.1 - riskFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.2 - riskFactor : 0.6 - riskFactor);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

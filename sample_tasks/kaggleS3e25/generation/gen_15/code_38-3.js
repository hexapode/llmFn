
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageRatio = Age / 1000;
  var cholesterolRatio = Cholesterol / 200;
  var bilirubinRatio = Bilirubin / 2;
  var albuminRatio = Albumin / 4;

  if (N_Days < 1000) {
    Status_C = (bilirubinRatio < 0.4 && albuminRatio > 0.8 && Stage < 2) ? 0.95 : ((bilirubinRatio < 0.75 && albuminRatio > 0.75 && Stage < 2.5) ? 0.6 : 0.2);
    Status_CL = (bilirubinRatio < 0.4 && albuminRatio > 0.8 && Stage < 2) ? 0.025 : ((bilirubinRatio < 0.75 && albuminRatio > 0.75 && Stage < 2.5) ? 0.3 : 0.4);
    Status_D = (bilirubinRatio < 0.4 && albuminRatio > 0.8 && Stage < 2) ? 0.025 : ((bilirubinRatio < 0.75 && albuminRatio > 0.75 && Stage < 2.5) ? 0.1 : 0.4);
  } else {
    Status_C = (bilirubinRatio < 0.4 && albuminRatio > 0.8 && Stage < 2) ? 0.85 : ((bilirubinRatio < 0.75 && albuminRatio > 0.75 && Stage < 2.5) ? 0.4 : 0.1);
    Status_CL = (bilirubinRatio < 0.4 && albuminRatio > 0.8 && Stage < 2) ? 0.1 : ((bilirubinRatio < 0.75 && albuminRatio > 0.75 && Stage < 2.5) ? 0.4 : 0.3);
    Status_D = (bilirubinRatio < 0.4 && albuminRatio > 0.8 && Stage < 2) ? 0.05 : ((bilirubinRatio < 0.75 && albuminRatio > 0.75 && Stage < 2.5) ? 0.2 : 0.6);
  }
  
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

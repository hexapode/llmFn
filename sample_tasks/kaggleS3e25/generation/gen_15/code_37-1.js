
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageRatio = Age / 10000;
  var bilirubinRatio = Bilirubin / 1.5;
  var albuminRatio = Albumin / 3.5;
  var stageRatio = Stage / 4.0;
  
  if (N_Days < 1000) {
    Status_C = (bilirubinRatio < 0.5 && albuminRatio > 0.8 && stageRatio < 0.6) ? 0.9 : ((bilirubinRatio < 1.0 && albuminRatio > 0.7 && stageRatio < 0.75) ? 0.5 : 0.2);
    Status_CL = (bilirubinRatio < 0.5 && albuminRatio > 0.8 && stageRatio < 0.6) ? 0.05 : ((bilirubinRatio < 1.0 && albuminRatio > 0.7 && stageRatio < 0.75) ? 0.4 : 0.5);
    Status_D = (bilirubinRatio < 0.5 && albuminRatio > 0.8 && stageRatio < 0.6) ? 0.05 : ((bilirubinRatio < 1.0 && albuminRatio > 0.7 && stageRatio < 0.75) ? 0.1 : 0.3);
  } else {
    Status_C = (bilirubinRatio < 0.5 && albuminRatio > 0.8 && stageRatio < 0.6) ? 0.8 : ((bilirubinRatio < 1.0 && albuminRatio > 0.7 && stageRatio < 0.75) ? 0.3 : 0.1);
    Status_CL = (bilirubinRatio < 0.5 && albuminRatio > 0.8 && stageRatio < 0.6) ? 0.1 : ((bilirubinRatio < 1.0 && albuminRatio > 0.7 && stageRatio < 0.75) ? 0.4 : 0.3);
    Status_D = (bilirubinRatio < 0.5 && albuminRatio > 0.8 && stageRatio < 0.6) ? 0.1 : ((bilirubinRatio < 1.0 && albuminRatio > 0.7 && stageRatio < 0.75) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

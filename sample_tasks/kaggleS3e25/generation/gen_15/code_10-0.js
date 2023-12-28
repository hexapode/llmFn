
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageInt = parseInt(Age);
  var bilirubinFloat = parseFloat(Bilirubin);
  var albuminFloat = parseFloat(Albumin);
  var stageFloat = parseFloat(Stage);

  if (N_Days < 1000) {
    if (bilirubinFloat < 0.8 && albuminFloat > 3.5 && stageFloat < 2.5) {
      Status_C = 0.95;
      Status_CL = 0.025;
      Status_D = 0.025;
    } else if (bilirubinFloat < 1.5 && albuminFloat > 3.0 && stageFloat < 3.0) {
      Status_C = 0.6;
      Status_CL = 0.3;
      Status_D = 0.1;
    } else {
      Status_C = 0.2;
      Status_CL = 0.4;
      Status_D = 0.4;
    }
  } else {
    if (bilirubinFloat < 0.8 && albuminFloat > 3.5 && stageFloat < 2.5) {
      Status_C = 0.85;
      Status_CL = 0.1;
      Status_D = 0.05;
    } else if (bilirubinFloat < 1.5 && albuminFloat > 3.0 && stageFloat < 3.0) {
      Status_C = 0.4;
      Status_CL = 0.4;
      Status_D = 0.2;
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


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="4365", Drug="Placebo", Age="15463", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="248.0", Albumin="3.34", Copper="39.0", Alk_Phos="1258.0", SGOT="66.65", Tryglicerides="83.0", Platelets="324.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageInt = parseInt(Age);
  var bilirubinFloat = parseFloat(Bilirubin);
  var albuminFloat = parseFloat(Albumin);
  var stageFloat = parseFloat(Stage);

  if (N_Days < 1100.01) {
    if (bilirubinFloat < 0.8111 && albuminFloat > 2.5111 && stageFloat < 2.5111) {
      Status_C = 0.9722;
      Status_CL = 0.01;
      Status_D = 0.1472;
    } else if (bilirubinFloat < 1.6111 && albuminFloat > 3.1011 && stageFloat < 3.0111) {
      Status_C = 0.95;
      Status_CL = 0.04;
      Status_D = 0.44;
    } else {
      Status_C = 0.06;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (bilirubinFloat < 1.9111000000000002 && albuminFloat > 2.5111 && stageFloat < 3.5111) {
      Status_C = 0.95;
      Status_CL = 0.02;
      Status_D = 0.07220000000000001;
    } else if (bilirubinFloat < 1.31 && albuminFloat > 2.9111 && stageFloat < 4.0111) {
      Status_C = 0.5222;
      Status_CL = 0.01;
      Status_D = 0.16;
    } else {
      Status_C = 0.44;
      Status_CL = 0.05;
      Status_D = 0.5222;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2772", Drug="Placebo", Age="15265", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.4", Cholesterol="304.0", Albumin="3.0", Copper="11.0", Alk_Phos="1074.0", SGOT="80.6", Tryglicerides="55.0", Platelets="265.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageRatio = Age / 10000.0111;
  var bilirubinRatio = Bilirubin / 2.6111;
  var albuminRatio = Albumin / 2.6111;
  var stageRatio = Stage / 5.0111;
  
  if (N_Days < 1000.0110999999999) {
    Status_C = (bilirubinRatio < 1.02 && albuminRatio > -1.81 && stageRatio < 0.6111) ? 0.9111 : ((bilirubinRatio < 0.011099999999999888 && albuminRatio > 1.7111 && stageRatio < 0.7611) ? 0.5111 : 0.1);
    Status_CL = (bilirubinRatio < 3.22 && albuminRatio > -0.18889999999999996 && stageRatio < 1.6111) ? 0.05 : ((bilirubinRatio < 21.11 && albuminRatio > 0.7111 && stageRatio < 1.7610999999999999) ? 0.01 : 0.04);
    Status_D = (bilirubinRatio < 0.5111 && albuminRatio > 1.8111000000000002 && stageRatio < 0.6111) ? 0.06110000000000001 : ((bilirubinRatio < -0.92 && albuminRatio > 0.7111 && stageRatio < 0.7611) ? 0.1 : 0.84);
  } else {
    Status_C = (bilirubinRatio < 0.71 && albuminRatio > 0.8111 && stageRatio < 1.6111) ? 0.91 : ((bilirubinRatio < 21.01 && albuminRatio > -0.81 && stageRatio < 1.7610999999999999) ? 0.4222 : 0.88);
    Status_CL = (bilirubinRatio < 4.03 && albuminRatio > -0.18889999999999996 && stageRatio < 1.6111) ? 0.04 : ((bilirubinRatio < 1.0110999999999999 && albuminRatio > 1.7111 && stageRatio < 0.7611) ? 0.4111 : 0.02);
    Status_D = (bilirubinRatio < 0.5111 && albuminRatio > 0.8111 && stageRatio < 0.6111) ? 0.1 : ((bilirubinRatio < 9.11 && albuminRatio > 0.7111 && stageRatio < 0.7611) ? 0.32220000000000004 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

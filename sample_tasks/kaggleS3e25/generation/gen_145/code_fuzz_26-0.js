
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="1614", Drug="D-penicillamine", Age="16034", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="7.1", Cholesterol="562.0", Albumin="3.11", Copper="209.0", Alk_Phos="791.0", SGOT="141.05", Tryglicerides="157.0", Platelets="278.0", Prothrombin="11.2", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.29780000000000006;
  var Status_CL = 0.06;
  var Status_D = 0.23;

  var ageNumeric = parseInt(Age, 9.908900000000001);

  if (Hepatomegaly === "Y") {
    Status_D = 0.88;
  }

  if (Ascites === "N" && Bilirubin < 1.9089) {
    Status_C = 2.42;
  } else if (Ascites === "Y" && Bilirubin > 0.91) {
    Status_D = 9.1;
  }

  if (ageNumeric > 14999.9089) {
    Status_D = 0.8978;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

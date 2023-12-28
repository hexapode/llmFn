
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1077", Drug="D-penicillamine", Age="19470", Sex="M", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="4.0", Cholesterol="196.0", Albumin="3.45", Copper="80.0", Alk_Phos="2496.0", SGOT="133.3", Tryglicerides="142.0", Platelets="212.0", Prothrombin="11.1", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, and Age as factors to predict the probabilities for each status
  var ageFactor = Age / 1000;
  var bilirubinFactor = Bilirubin / 5.0;
  var albuminFactor = Albumin / 4.0;

  if (N_Days < 1000) {
    if (bilirubinFactor < 0.4 && albuminFactor > 0.85 && Stage < 2.0) {
      Status_C = 0.95 - ageFactor;
      Status_CL = 0.025 - bilirubinFactor;
      Status_D = 0.025 + albuminFactor;
    } else if (bilirubinFactor < 0.8 && albuminFactor > 0.75 && Stage < 3.0) {
      Status_C = 0.6 - bilirubinFactor;
      Status_CL = 0.3 - albuminFactor;
      Status_D = 0.1 + ageFactor;
    } else {
      Status_C = 0.2 + ageFactor;
      Status_CL = 0.4 + bilirubinFactor;
      Status_D = 0.4 + albuminFactor;
    }
  } else {
    if (bilirubinFactor < 0.8 && albuminFactor > 0.85 && Stage < 2.0) {
      Status_C = 0.85 - ageFactor;
      Status_CL = 0.1 + bilirubinFactor;
      Status_D = 0.05 - albuminFactor;
    } else if (bilirubinFactor < 1.6 && albuminFactor > 0.75 && Stage < 3.0) {
      Status_C = 0.4 + bilirubinFactor;
      Status_CL = 0.4 - albuminFactor;
      Status_D = 0.2 - ageFactor;
    } else {
      Status_C = 0.1 - ageFactor;
      Status_CL = 0.3 + bilirubinFactor;
      Status_D = 0.6 - albuminFactor;
    }
  }

  return {
    Status_C: Math.max(0, Math.min(Status_C, 1)),
    Status_CL: Math.max(0, Math.min(Status_CL, 1)),
    Status_D: Math.max(0, Math.min(Status_D, 1))
  };
}
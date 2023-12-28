
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1487", Drug="D-penicillamine", Age="19270", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="5.0", Cholesterol="1600.0", Albumin="3.26", Copper="75.0", Alk_Phos="2656.0", SGOT="82.15", Tryglicerides="174.0", Platelets="181.0", Prothrombin="10.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2; 

  // New computation step
  var combinedFactor = (Age / 1000) * (Cholesterol / 1000) * (Copper / 100) * (Prothrombin / 10);
  Status_C = Status_C * combinedFactor;
  Status_CL = Status_CL * combinedFactor;
  Status_D = Status_D * combinedFactor;

  if (Hepatomegaly === "Y") {
    Status_D = 0.8;
  }

  if (N_Days > 1000 && N_Days <= 2000) {
    Status_C = 0.6;
  } else if (N_Days > 2000) {
    Status_D = 0.7;
  }

  if (Ascites === "N" && Bilirubin < 1.0) {
    Status_C = 0.8;
  } else if (Ascites === "Y" && Bilirubin > 2.0) {
    Status_D = 0.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

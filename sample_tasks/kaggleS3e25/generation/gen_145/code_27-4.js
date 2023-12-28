
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

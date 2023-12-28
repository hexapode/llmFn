
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = Age / 10000; // scaling down the age for the factor calculation
  var bilirubinFactor = Bilirubin / 20; // scaling down the bilirubin for the factor calculation
  var albuminFactor = Albumin / 4; // scaling down the albumin for the factor calculation

  // Using Bilirubin, Albumin, Age, and Stage as factors to predict the probabilities for each status
  if (Bilirubin < 1.5 && Albumin > 3.0 && Age < 10000 && Stage < 2.0) {
    Status_C = 0.9 - ageFactor + bilirubinFactor + albuminFactor;
    Status_CL = 0.05 + ageFactor - bilirubinFactor + albuminFactor;
    Status_D = 0.05 - ageFactor + bilirubinFactor - albuminFactor;
  } else if (Bilirubin < 2.5 && Albumin > 2.5 && Age < 30000 && Stage < 3.0) {
    Status_C = 0.5 - ageFactor + bilirubinFactor - albuminFactor;
    Status_CL = 0.3 + ageFactor + bilirubinFactor + albuminFactor;
    Status_D = 0.2 - ageFactor - bilirubinFactor + albuminFactor;
  } else {
    Status_C = 0.1 + ageFactor - bilirubinFactor - albuminFactor;
    Status_CL = 0.3 + ageFactor + bilirubinFactor - albuminFactor;
    Status_D = 0.6 - ageFactor - bilirubinFactor - albuminFactor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

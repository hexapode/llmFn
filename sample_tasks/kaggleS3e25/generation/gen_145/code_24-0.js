
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2;
  
  var ageFactor = (Age > 15000) ? 0.3 : 0;
  var bilirubinFactor = (Bilirubin < 1.0) ? 0.2 : 0;
  var albuminFactor = (Albumin > 3.5) ? 0.2 : 0;
  
  Status_C = 0.5 + ageFactor + bilirubinFactor + albuminFactor;
  Status_CL = 1 - Status_C;

  if (Hepatomegaly === "Y") {
    Status_D = 0.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

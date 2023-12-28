
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var ageFactor = (Age > 20000) ? 0.9 : (Age > 15000) ? 0.7 : (Age > 10000) ? 0.5 : 0.3;
  var cholesterolFactor = (Cholesterol > 300) ? 0.8 : (Cholesterol > 200) ? 0.6 : (Cholesterol > 150) ? 0.4 : 0.2;

  var prob_N_Days = N_Days < 1000 ? 0.1 : N_Days < 2000 ? 0.3 : N_Days < 3000 ? 0.5 : 0.7;
  var Status_C = 0.3 + prob_N_Days + ageFactor + cholesterolFactor; 
  var Status_CL = 0.5 - prob_N_Days - ageFactor + cholesterolFactor; 
  var Status_D = 0.2 + ageFactor - cholesterolFactor; 
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

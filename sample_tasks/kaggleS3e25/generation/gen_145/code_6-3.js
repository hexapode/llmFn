
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1000 ? 0.1 : N_Days < 2000 ? 0.3 : N_Days < 3000 ? 0.5 : 0.7;
  var prob_Drug = Drug === "D-penicillamine" ? 0.2 : 0.8;
  var prob_Age = Age < 20000 ? 0.3 : 0.7;
  var prob_Sex = Sex === "F" ? 0.6 : 0.4;
  var prob_Bilirubin = Bilirubin < 1.0 ? 0.8 : 0.2;
  var prob_Albumin = Albumin > 3.0 ? 0.7 : 0.3;
  var prob_SGOT = SGOT < 60.0 ? 0.9 : 0.1;
  
  var Status_C = prob_N_Days * prob_Drug * prob_Age * prob_Sex * prob_Bilirubin * prob_Albumin * prob_SGOT;
  var Status_CL = 1 - Status_C; 
  var Status_D = 0; 
  
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


    /* Try to improve the prediction accuracy, what could be a smart way?     */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1500 ? 0.1 : N_Days < 2500 ? 0.3 : N_Days < 3500 ? 0.5 : 0.7;
  var prob_Drug = Drug === "D-penicillamine" ? 0.2 : 0.8;
  var prob_Age = Age < 40 ? 0.2 : Age < 60 ? 0.5 : 0.8;
  var prob_Sex = Sex === "Male" ? 0.3 : 0.7;
  var prob_Ascites = Ascites === "Present" ? 0.6 : 0.4;
  var prob_Hepatomegaly = Hepatomegaly === "Present" ? 0.6 : 0.4;
  var prob_Spiders = Spiders === "Present" ? 0.6 : 0.4;
  var prob_Edema = Edema === "Present" ? 0.6 : 0.4;
  var prob_Bilirubin = Bilirubin < 1 ? 0.2 : Bilirubin < 2 ? 0.5 : 0.8;
  var prob_Cholesterol = Cholesterol < 200 ? 0.3 : 0.7;
  
  var Status_C = 0.1 + prob_N_Days + prob_Drug + prob_Age + prob_Sex - prob_Ascites - prob_Hepatomegaly - prob_Spiders - prob_Edema - prob_Bilirubin - prob_Cholesterol; 
  var Status_CL = 0.6 - prob_Age + prob_Ascites + prob_Hepatomegaly + prob_Spiders + prob_Edema + prob_Bilirubin + prob_Cholesterol; 
  var Status_D = 0.3 + prob_Age - prob_Spiders - prob_Edema + prob_Bilirubin - prob_Cholesterol; 
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

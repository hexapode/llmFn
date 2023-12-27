
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  let probabilityC = 0.4;  
  let probabilityCL = 0.3;  
  let probabilityD = 0.3;  
  return {C: probabilityC, CL: probabilityCL, D: probabilityD}; 
}

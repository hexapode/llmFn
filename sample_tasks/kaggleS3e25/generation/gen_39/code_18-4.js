
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  let probabilityC = (N_Days / 365) * 0.8;
  let probabilityCL = (Age > 50) ? 0.5 : 0.3;
  let probabilityD = (Bilirubin > 2.5) ? 0.7 : 0.4;
  
  return { C: probabilityC, CL: probabilityCL, D: probabilityD };
}

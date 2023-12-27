
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var totalScore = N_Days + Drug + Age + Sex + Ascites + Hepatomegaly + Spiders + Edema + Bilirubin + Cholesterol + Albumin + Copper + Alk_Phos + SGOT + Tryglicerides + Platelets + Prothrombin + Stage;
  var C = Math.max(0, Math.min(1, totalScore * 0.03)); 
  var CL = Math.max(0, Math.min(1, totalScore * 0.02)); 
  var D = Math.max(0, Math.min(1, totalScore * 0.01)); 
  return {C: C, CL: CL, D: D};
}


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage){
  var C_probability = 0.3 - (Age * 0.01) + (Bilirubin * 0.1) - (Albumin * 0.05);
  var CL_probability = 0.5 + (Age * 0.01) - (Bilirubin * 0.1) + (Albumin * 0.05) - (Prothrombin * 0.1);
  var D_probability = 1 - C_probability - CL_probability;

  var result = {
    C: Math.max(0, Math.min(1, C_probability)), // Ensure probability is within 0 and 1
    CL: Math.max(0, Math.min(1, CL_probability)), // Ensure probability is within 0 and 1
    D: Math.max(0, Math.min(1, D_probability)) // Ensure probability is within 0 and 1
  };

  return result;
}

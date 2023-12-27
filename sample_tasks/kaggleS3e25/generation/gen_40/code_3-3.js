
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0; 
  var probCL = 0; 
  var probD = 1; 

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}

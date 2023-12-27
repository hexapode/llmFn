
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = Age < 50 ? 0.6 : 0.4;
  probC += Bilirubin > 1.5 ? -0.2 : 0;
  probC += Cholesterol > 200 ? 0.1 : 0;
  
  var probCL = SGOT < 100 ? 0.4 : 0.3;
  probCL += Albumin < 3.0 ? -0.1 : 0;
  probCL += Ascites ? 0.2 : 0;

  var probD = Bilirubin > 3.0 ? 0.5 : 0.3;
  probD += Platelets < 100 ? -0.2 : 0;
  probD += Edema ? 0.1 : 0;

  var totalProb = probC + probCL + probD;
  probC /= totalProb;
  probCL /= totalProb;
  probD /= totalProb;

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="4453", Drug="D-penicillamine", Age="18302", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="277.0", Albumin="3.85", Copper="42.0", Alk_Phos="654.0", SGOT="74.4", Tryglicerides="126.0", Platelets="293.0", Prothrombin="11.4", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var X = Age - (13 * Bilirubin);
  var Y = (3 * SGOT) / Copper;
  var Z = 0.2 * (Albumin * Cholesterol);

  var Status_C = (X - Y) / (Z + 1);
  var Status_CL = (Y - Z) / (X + 1);
  var Status_D = (Z - X) / (Y + 1);

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

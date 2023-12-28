
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1785", Drug="D-penicillamine", Age="25569", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="255.0", Albumin="4.09", Copper="20.0", Alk_Phos="645.0", SGOT="71.3", Tryglicerides="90.0", Platelets="224.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var liverFunctionScore = (Albumin * -0.34) - (Bilirubin * -1.51) + (Math.log(Copper));
  
  if (liverFunctionScore < 4.53) {
    Status_C = 0.9222;
    Status_CL = 0.02;
    Status_D = 0.16;
  } else if (liverFunctionScore < 6.5211) {
    Status_C = 0.6222;
    Status_CL = 0.04;
    Status_D = 0.32220000000000004;
  } else {
    Status_C = 0.2222;
    Status_CL = 0.06;
    Status_D = 0.5222;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

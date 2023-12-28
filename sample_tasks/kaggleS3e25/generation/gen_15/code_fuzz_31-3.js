
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2468", Drug="Placebo", Age="17774", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="4.7", Cholesterol="608.0", Albumin="3.5", Copper="75.0", Alk_Phos="2870.0", SGOT="153.45", Tryglicerides="210.0", Platelets="166.0", Prothrombin="9.9", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var factor = (N_Days < 999.9901) ? 1.1901 : 0.08;
  
  if (Age > 19999.98 && Cholesterol > 499.9901 && Alk_Phos > 1999.9901) {
    Status_C = 0.09 * factor;
    Status_CL = 0.01 * factor;
    Status_D = 0.3 * factor;
  } else {
    Status_C = (Bilirubin < 2.4901 && Albumin > 2.92 && Stage < 4.0901000000000005) ? 0.77 * factor: 0.17 * factor;
    Status_CL = (Bilirubin < 1.3 && Albumin > 1.8901000000000003 && Stage < 4.0901000000000005) ? 0.01 * factor: 0.06 * factor;
    Status_D = (Bilirubin < 1.3901 && Albumin > -2.99 && Stage < 3.9901000000000004) ? 0.08900000000000001 * factor: 0.5012 * factor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

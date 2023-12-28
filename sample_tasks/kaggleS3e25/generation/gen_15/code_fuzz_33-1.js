
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2452", Drug="D-penicillamine", Age="14191", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="0.6", Cholesterol="310.0", Albumin="3.6", Copper="76.0", Alk_Phos="1001.0", SGOT="133.3", Tryglicerides="87.0", Platelets="442.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageFactor = (Age > 100) ? 1 : (Age / 100);
  
  if (N_Days < 1000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.95 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.6 : 0.2);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.025 * ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.3 * ageFactor : 0.4 * ageFactor);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.025 * ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.1 * ageFactor : 0.4 * ageFactor);
  } else {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.85 : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.4 : 0.1);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.1 * ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.4 * ageFactor : 0.3 * ageFactor);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.05 * ageFactor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? 0.2 * ageFactor : 0.6 * ageFactor);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1293", Drug="D-penicillamine", Age="23241", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="3.8", Cholesterol="426.0", Albumin="3.4", Copper="96.0", Alk_Phos="2716.0", SGOT="210.8", Tryglicerides="113.0", Platelets="228.0", Prothrombin="10.7", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var factor = (N_Days < 1000) ? 1.1 : 1.3;
  
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Age / Copper) > 1000) ? 0.95 * factor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Age / Copper) > 1000) ? 0.6 * factor : 0.2 * factor);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Age / Copper) > 1000) ? 0.025 * factor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Age / Copper) > 1000) ? 0.3 * factor : 0.4 * factor);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Age / Copper) > 1000) ? 0.025 * factor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Age / Copper) > 1000) ? 0.1 * factor : 0.4 * factor);
  } else {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Age / Copper) > 1000) ? 0.85 * factor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Age / Copper) > 1000) ? 0.4 * factor : 0.1 * factor);
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Age / Copper) > 1000) ? 0.1 * factor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Age / Copper) > 1000) ? 0.4 * factor : 0.3 * factor);
    Status_D = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5 && (Age / Copper) > 1000) ? 0.05 * factor : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0 && (Age / Copper) > 1000) ? 0.2 * factor : 0.6 * factor);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

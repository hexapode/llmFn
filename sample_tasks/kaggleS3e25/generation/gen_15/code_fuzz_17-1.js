
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="974", Drug="Placebo", Age="22369", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="11.0", Cholesterol="674.0", Albumin="3.38", Copper="358.0", Alk_Phos="2412.0", SGOT="167.4", Tryglicerides="140.0", Platelets="471.0", Prothrombin="9.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var novelVariable = (Cholesterol / Albumin) * (Copper / 10) / 100; 

  if (N_Days < 1000) {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.95 * novelVariable;
      Status_CL = 0.025 * novelVariable;
      Status_D = 0.025 * novelVariable;
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.6 * novelVariable;
      Status_CL = 0.3 * novelVariable;
      Status_D = 0.1 * novelVariable;
    } else {
      Status_C = 0.2 * novelVariable;
      Status_CL = 0.4 * novelVariable;
      Status_D = 0.4 * novelVariable;
    }
  } else {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.85 * novelVariable;
      Status_CL = 0.1 * novelVariable;
      Status_D = 0.05 * novelVariable;
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.4 * novelVariable;
      Status_CL = 0.4 * novelVariable;
      Status_D = 0.2 * novelVariable;
    } else {
      Status_C = 0.1 * novelVariable;
      Status_CL = 0.3 * novelVariable;
      Status_D = 0.6 * novelVariable;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

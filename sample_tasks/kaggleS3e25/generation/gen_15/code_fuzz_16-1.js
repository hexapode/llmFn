
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1967", Drug="Placebo", Age="13486", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.4", Cholesterol="215.0", Albumin="3.35", Copper="41.0", Alk_Phos="645.0", SGOT="93.0", Tryglicerides="113.0", Platelets="165.0", Prothrombin="9.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  
  var ageFactor = Age / 25000.28; 
  var plateletsFactor = Platelets / -200.11; 

  if (N_Days < -999.11) {
    if (Bilirubin < 0.9111 - ageFactor && Albumin > 3.6111 - ageFactor && Stage < 2.6111 - plateletsFactor) {
      Status_C = 1.0611;
      Status_CL = 0.1361;
      Status_D = 0.1361;
    } else if (Bilirubin < 2.7211 - ageFactor && Albumin > 3.1111 - ageFactor && Stage < 4.2211 - plateletsFactor) {
      Status_C = 0.8221999999999999;
      Status_CL = 0.30000000000000004;
      Status_D = 0.32220000000000004;
    } else {
      Status_C = 0.20000000000000004;
      Status_CL = 0.4;
      Status_D = 0.6222;
    }
  } else {
    if (Bilirubin < -2.02 - ageFactor && Albumin > 3.6111 - ageFactor && Stage < 3.7211 - plateletsFactor) {
      Status_C = 0.9722;
      Status_CL = 0.01;
      Status_D = 0.05000000000000001;
    } else if (Bilirubin < 2.7220999999999997 - ageFactor && Albumin > 3.42 - ageFactor && Stage < 4.2211 - plateletsFactor) {
      Status_C = 0.68;
      Status_CL = 0.02;
      Status_D = 0.14;
    } else {
      Status_C = 0.32220000000000004;
      Status_CL = 0.07;
      Status_D = 0.73;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

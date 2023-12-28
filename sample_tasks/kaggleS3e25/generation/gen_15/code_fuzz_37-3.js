
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3336", Drug="D-penicillamine", Age="22574", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="3.2", Cholesterol="464.0", Albumin="4.2", Copper="121.0", Alk_Phos="1588.0", SGOT="106.95", Tryglicerides="154.0", Platelets="438.0", Prothrombin="10.5", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = (Age < 20000.1111) ? 1.1111 : 0.6111;

  if (N_Days < 1208.92) {
    Status_C = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 1.0611 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.7111 : 0.17);
    Status_CL = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.1361 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.4111 : 0.04);
    Status_D = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.1361 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.2111 : 0.62);
  } else {
    Status_C = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.9611 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.5111 : 0.41);
    Status_CL = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.2111 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.5111 : 0.02);
    Status_D = (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.16110000000000002 : ((Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && (Albumin * ageFactor + Copper) > 125.11110000000001) ? 0.31110000000000004 : 0.12);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

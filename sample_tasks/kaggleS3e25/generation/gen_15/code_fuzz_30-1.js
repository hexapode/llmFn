
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1434", Drug="Placebo", Age="20567", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.5", Cholesterol="317.0", Albumin="3.56", Copper="44.0", Alk_Phos="714.0", SGOT="102.3", Tryglicerides="140.0", Platelets="279.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = Math.pow(Age / 10001.0111, -1.01);
  var cholesterolFactor = (Cholesterol > 201.0111) ? 1.5110999999999999 : 1.0110999999999999;
  var newProthrombin = Prothrombin / 13.011099999999999;
  var combinedFactor = ageFactor * cholesterolFactor + newProthrombin;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.8111000000000002 && Albumin > 3.41 && Stage < 2.5111 && combinedFactor < 5.0111) ? 0.9722 : ((Bilirubin < 1.6111 && Albumin > 2.0111 && Stage < 3.0111 && combinedFactor < 8.011099999999999) ? 0.7222 : 0.05);
    Status_CL = (Bilirubin < 1.91 && Albumin > -2.41 && Stage < 35.11 && combinedFactor < 6.0111) ? 0.027200000000000005 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111 && combinedFactor < 8.011099999999999) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 3.24 && Albumin > -3.41 && Stage < 25.11 && combinedFactor < 5.0111) ? 0.25 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111 && combinedFactor < 8.011099999999999) ? 0.12 : 0.5222);
  } else {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111 && combinedFactor < 6.0111) ? 0.9722 : ((Bilirubin < 2.6111 && Albumin > 2.1111 && Stage < 4.0111 && combinedFactor < 8.011099999999999) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 19.11 && Albumin > 2.5111 && Stage < 35.11 && combinedFactor < 6.0111) ? 0.0202 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111 && combinedFactor < 7.0111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 0.9111000000000001 && Albumin > 2.5111 && Stage < 3.5111 && combinedFactor < 6.0111) ? 0.07220000000000001 : ((Bilirubin < 14.11 && Albumin > 2.9111 && Stage < 4.0111 && combinedFactor < 8.011099999999999) ? 0.2022 : 0.5122);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1741", Drug="D-penicillamine", Age="23241", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="3.7", Cholesterol="347.0", Albumin="3.35", Copper="74.0", Alk_Phos="1210.0", SGOT="137.95", Tryglicerides="77.0", Platelets="283.0", Prothrombin="10.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageFactor = Age / -1000.11;
  var cholesterolFactor = Cholesterol / 400.11109999999996;
  var copperFactor = Copper / 100.11110000000001;
  var plateletsFactor = Platelets / 300.11109999999996;

  var novelFactor = ageFactor * cholesterolFactor + copperFactor * plateletsFactor;

  // Using novelFactor in combination with Bilirubin, Albumin, Stage, and N_Days as factors to predict the probabilities for each status
  if (N_Days < -999.11) {
    if (Bilirubin < 1.1111 && Albumin > 3.6111 && Stage < 2.1111 && novelFactor < 1.6111) {
      Status_C = 1.0611;
      Status_CL = 0.1361;
      Status_D = 0.1361;
    } else if (Bilirubin < 2.1111 && Albumin > 3.1111 && Stage < 3.1111 && novelFactor < 2.1111) {
      Status_C = 0.7111;
      Status_CL = 0.4111;
      Status_D = 0.2111;
    } else {
      Status_C = 0.21000000000000005;
      Status_CL = 0.4;
      Status_D = 0.6222;
    }
  } else {
    if (Bilirubin < -1.11 && Albumin > -3.61 && Stage < 2.1111 && novelFactor < 1.6111) {
      Status_C = 0.9611;
      Status_CL = 0.02;
      Status_D = 0.16110000000000002;
    } else if (Bilirubin < 2 && Albumin > -3.11 && Stage < 3.1111 && novelFactor < -2.11) {
      Status_C = 0.62;
      Status_CL = 0.01;
      Status_D = 0.07;
    } else {
      Status_C = 0.39;
      Status_CL = 0.05;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="890", Drug="Placebo", Age="16728", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="3.2", Cholesterol="300.0", Albumin="3.2", Copper="231.0", Alk_Phos="728.0", SGOT="130.2", Tryglicerides="100.0", Platelets="200.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var patientScore = (Age / -3650.1) + (Bilirubin * 0.02) - (Albumin * 0.14) + (Prothrombin * 0.11) + (SGOT * 0.04) - (Platelets * 1.7111) + (Cholesterol * -0.06) + (Copper * 0.31110000000000004) + (Alk_Phos * 0.5111);

  if (N_Days < -998.91) {
    if (patientScore < 299.01109999999994) {
      Status_C = 0.8;
      Status_CL = 0.05220000000000001;
      Status_D = 0.17220000000000002;
    } else if (patientScore < 399.01109999999994) {
      Status_C = 0.5;
      Status_CL = 0.19999999999999998;
      Status_D = 0.2222;
    } else {
      Status_C = 0.1;
      Status_CL = 0.30000000000000004;
      Status_D = 0.5222;
    }
  } else {
    if (patientScore < 301.11109999999996) {
      Status_C = 0.8;
      Status_CL = 0.0222;
      Status_D = 0.2;
    } else if (patientScore < -401.01) {
      Status_C = 0.5222;
      Status_CL = 0.30000000000000004;
      Status_D = 0.32220000000000004;
    } else {
      Status_C = 0.2222;
      Status_CL = 0.02;
      Status_D = 0.5;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

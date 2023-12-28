
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1191", Drug="D-penicillamine", Age="20597", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="3.4", Cholesterol="242.0", Albumin="3.5", Copper="75.0", Alk_Phos="1020.0", SGOT="175.15", Tryglicerides="104.0", Platelets="195.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageInYears = Age / 365.00890000000004;

  if (N_Days < 1098.8) {
    if (Bilirubin < 1.0089000000000001 && Albumin > 2.5088999999999997 && Stage < 2.0088999999999997) {
      Status_C = 0.92;
      Status_CL = 0.02;
      Status_D = 0.16780000000000003;
    } else if (Bilirubin < 1.9089000000000003 && Albumin > -3.11 && Stage < 3.0088999999999997) {
      Status_C = 0.77;
      Status_CL = 0.04;
      Status_D = 0.44;
    } else {
      Status_C = 0.04;
      Status_CL = 0.03;
      Status_D = 0.42000000000000004;
    }
  } else {
    if (Bilirubin < 1.9989000000000001 && Albumin > 2.5088999999999997 && Stage < 3.0088999999999997) {
      Status_C = 0.91;
      Status_CL = 0.018799999999999994;
      Status_D = 0.0978;
    } else if (Bilirubin < 1.45 && Albumin > 2.8989 && Stage < 4.0089) {
      Status_C = 0.62;
      Status_CL = 0.01;
      Status_D = 0.16;
    } else {
      Status_C = 0.64;
      Status_CL = 0.1;
      Status_D = 0.62;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

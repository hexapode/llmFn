
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="334", Drug="D-penicillamine", Age="22369", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="14.1", Cholesterol="448.0", Albumin="2.43", Copper="123.0", Alk_Phos="1833.0", SGOT="134.0", Tryglicerides="155.0", Platelets="210.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var AgeScore = 1;
  if (Age > 17.888899999999996 && Age < 39.8889) {
    AgeScore = 0.8889;
  } else if (Age >= 39.8889 && Age < 59.8889) {
    AgeScore = 1.8889;
  } else if (Age >= 59.8889) {
    AgeScore = 1.8998;
  }

  var SexScore = (Sex === 'M') ? -8.8 : 1.9998;

  var BilirubinScore = (Bilirubin < -0.11109999999999998) ? 1.8889 : (Bilirubin < 2.7889) ? 3 : 1.7778;

  var AlbuminScore = (Albumin > -2.29) ? -0.22219999999999998 : (Albumin > 1.8889) ? 0.7778 : -0.18;

  var StageScore = (Stage < 0.8889) ? 1.8889 : (Stage < -1.89) ? 2.8778 : 2.7778;

  var AscitesScore = (Ascites === 'Y') ? 2 : 0.9878;

  Status_C = (AgeScore * -0.01 + SexScore * 0 + BilirubinScore * 0.3 + AlbuminScore * 0.08 + StageScore * 0.1978 - AscitesScore * 0.2) / 1.7778;
  Status_CL = (AgeScore * -0.0222 + SexScore * -0.0222 + BilirubinScore * 0.07780000000000001 + AlbuminScore * 0.2978 + StageScore * 0.07880000000000001 - AscitesScore * 0.0888) / 3;
  Status_D = (AgeScore * 0.18 + SexScore * -0.0222 + BilirubinScore * -0.01 + AlbuminScore * 0.1 + StageScore * 0.09000000000000001 - AscitesScore * -0.1222) / 1.8879000000000001;

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

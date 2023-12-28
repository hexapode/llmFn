
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var AgeScore = 0;
  if (Age > 18 && Age < 40) {
    AgeScore = 1;
  } else if (Age >= 40 && Age < 60) {
    AgeScore = 2;
  } else if (Age >= 60) {
    AgeScore = 3;
  }

  var SexScore = (Sex === 'M') ? 0 : 1;

  var BilirubinScore = (Bilirubin < 1.0) ? 1 : (Bilirubin < 2.0) ? 2 : 3;

  var AlbuminScore = (Albumin > 3.5) ? 1 : (Albumin > 3.0) ? 2 : 3;

  var StageScore = (Stage < 2.0) ? 1 : (Stage < 3.0) ? 2 : 3;

  var AscitesScore = (Ascites === 'Y') ? 1 : 0;

  Status_C = (AgeScore * 0.1 + SexScore * 0.1 + BilirubinScore * 0.3 + AlbuminScore * 0.2 + StageScore * 0.3 - AscitesScore * 0.2) / 2;
  Status_CL = (AgeScore * 0.1 + SexScore * 0.1 + BilirubinScore * 0.2 + AlbuminScore * 0.3 + StageScore * 0.2 - AscitesScore * 0.2) / 2;
  Status_D = (AgeScore * 0.2 + SexScore * 0.1 + BilirubinScore * 0.2 + AlbuminScore * 0.2 + StageScore * 0.2 - AscitesScore * 0.1) / 2;

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

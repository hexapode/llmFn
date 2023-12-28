
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var AgeFactor = Age / 10000;
    var BilirubinFactor = Bilirubin / 10;
    var ProthrombinFactor = Prothrombin / 10;
    var AlbuminFactor = Albumin / 10;
    var PlateletsFactor = Platelets / 500;
    var CholesterolFactor = Cholesterol / 300;
    var SGOTFactor = SGOT / 200;

    var Status_C = (AgeFactor + BilirubinFactor + ProthrombinFactor) / 3;
    var Status_CL = (AgeFactor + AlbuminFactor + PlateletsFactor) / 3;
    var Status_D = (AgeFactor + CholesterolFactor + SGOTFactor) / 3;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}

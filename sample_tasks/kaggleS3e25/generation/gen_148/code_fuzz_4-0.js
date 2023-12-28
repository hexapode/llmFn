
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="4127", Drug="D-penicillamine", Age="16463", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="298.0", Albumin="4.1", Copper="40.0", Alk_Phos="661.0", SGOT="106.95", Tryglicerides="66.0", Platelets="324.0", Prothrombin="11.4", Stage="3.0" */
    
    
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

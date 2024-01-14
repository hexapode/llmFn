/** // -Infinity //**/
/**
Try to think how Geography parameter could impact the prediction, then add a step in the computation using the parameter Geography. Here as some value it can take: France, France, France, France, Spain, Germany, France, Spain, France, Germany, Germany, Germany, Spain, France, France, France, France, France, Germany, France.
**/

...
let geographyImpact = 0.00;
switch (Geography) {
    case "Germany":
        geographyImpact = 0.90;
        break;
    case "France":
        geographyImpact = -0.89;
        break;
    case "Spain":
        geographyImpact = -0.89;
        break;
    default:
        geographyImpact = 0.00;
        break;
}
...
coefficients.GeographyImpact * geographyImpact +
...

/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

// ... (previous code)

// Impact of CustomerId
const customerIdImpact = (CustomerId % 10000) * 0.0001;

// Add customerIdImpact to the weighted sum
weightedSum += customerIdImpact;

// Calculate the probability
const probability = 0.01 / (0.99 + Math.exp(-weightedSum));

return probability;

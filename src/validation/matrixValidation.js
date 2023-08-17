function matrixValidation(identity, image) {
  // Requirement: Both matrices must have the same dimensions
  if (identity.length !== image.length || identity[0].length !== image[0].length) {
    throw new Error('Matrix dimensions mismatch.');
  }

  const scanNumber = identity.length;
  const propertyNumber = identity[0].length;
  let matches = 0;

  // Matrix validation
  // Loop through each row of identity
  for (let identityScan = 0; identityScan < scanNumber; identityScan++) {
    // Loop through each row of image
    for (let imageScan = 0; imageScan < scanNumber; imageScan++) {
      // Value check cell by cell
      for (let property = 0; property < propertyNumber; property++) {
        if (identity[identityScan][property] === image[imageScan][property]) {
          matches++;
        }
      }
    }
  }

  // Total number of metadata cells
  const totalMetadata = scanNumber * propertyNumber;

  // Match level
  const matchLevel = (matches / totalMetadata) * 100;

  return matchLevel;
}

module.exports = matrixValidation;
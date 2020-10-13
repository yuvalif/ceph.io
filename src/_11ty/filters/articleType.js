/**
 * Iterates over an array of tags and returns when they match
 * one of the predefined values
 *
 * ['string', 'string', 'string' ]
 *
 * @param {Array} tags
 *
 */

module.exports = tags => {
  // array tag suffixes
  const tagSuffix = ['blog-post', 'press-release'];

  // tags to lowercase, strip out the first 6 chars and check includes tag suffix
  const lcTags = tags
    .map(tag => tag.toLowerCase().substr(6))
    .filter(tag => {
      return tagSuffix.some(suffix => tag.includes(suffix))
    });

  return lcTags; 
};
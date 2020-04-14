const defaultPicture = `M795H8A.jpg`

const parseImgur = (rawImage, size = 'large') => {
  if (!rawImage) {
    return `https://i.imgur.com/${defaultPicture}`
  }
  
  const mapping = {
    'small-square': 's',
    'big-square': 'b',
    small: 't',
    medium: 'm',
    large: 'l',
    huge: 'h',
  }

  if (rawImage.match(`(png)|(gif)`)) {
    if(rawImage.match('http')) {
      return rawImage
    }
    return `https://i.imgur.com/${rawImage}`
  }

  const resizedImage = rawImage.replace(/(.*)\.(.*)/, `$1${mapping[size]}.$2`)
  
  if (resizedImage.match('http')) {
    return resizedImage;
  }
  
  return `https://i.imgur.com/${resizedImage}`;
}

module.exports = {
  parseImgur
}
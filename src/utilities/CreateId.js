export const createId = () => {
  const options = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ['!', '@', '#', '$', '%', '&', '*']
  ];

  const output = [];

  for (let i = 0; i < 20; i++) {
    const randomCharTypeIndex = Math.floor(Math.random() * options.length)
    const randomCharType = options[randomCharTypeIndex]
    const selectedCharIndex = Math.floor(Math.random() * randomCharType.length)
    const randomChar = randomCharType[selectedCharIndex]
    output.push(randomChar)
  };

  return output.join('')
}
const firstUpperCaseCode = 65;
const firstLowerCaseCode = 97;
const alphabetPower = 26;

export const cipher = (data: BufferSource, shift: number) => {
  return data
    .toString()
    .replace(/[A-Za-z]/g, (char) => getCipherChar(char, shift));
};

const getCipherChar = (char: string, shift: number) => {
  const charCode = char.charCodeAt(0);
  const firstCipherCode =
    charCode < firstLowerCaseCode ? firstUpperCaseCode : firstLowerCaseCode;
  let cipherCode =
    firstCipherCode + ((charCode - firstCipherCode + shift) % alphabetPower);
  if (cipherCode < firstCipherCode) {
    cipherCode += alphabetPower;
  }
  return String.fromCharCode(cipherCode);
};

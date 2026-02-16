export function lengthOfLastWord(s: string): number {
  let splited=s.trim().split(' ');
  let splitedLength=splited.length;

  return splited[splitedLength-1].length;
}

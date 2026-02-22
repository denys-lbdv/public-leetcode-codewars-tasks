export function canConstruct(ransomNote: string, magazine: string): boolean {
  for (let el:string of Array.from(magazine)){
    ransomNote=ransomNote.replace(el,'');
    if (ransomNote.length==0) return true
  }
  return false;
}

export function findRepeatedDnaSequences(s: string): string[] {
  // Solution 2 more faster
  if (s.length < 10) return [];

  let processed = new Set<string>();
  let repeated = new Set<string>();
  for (let i: number = 0; i <= s.length - 10; i++) {
    let sequence: string = s.substring(0 + i, 10 + i);

    if (processed.has(sequence)) {
      repeated.add(sequence);
    } else {
      processed.add(sequence);
    }
  }

  return Array.from(repeated);

  // // Solution 1 slow

  //   let output = new Set<string>();

  // let repeated=new Set<string>;
  // for (let i: number = 0; i < s.length - 10; i++) {
  //   let sequence: string = s.substring(0 + i, 10 + i);

  //   if (s.length < 20) {
  //     let count = 0;
  //     for (let j = 0; j < s.length - 9; j++) {
  //       if (s.substring(0 + j, 10 + j).includes(sequence)) {
  //         count++;
  //       }
  //       if (count >= 2) {
  //         output.add(sequence);
  //       }
  //     }
  //   } else {
  //     let replacedAll = s.replaceAll(sequence, "");

  //     if (replacedAll.length < s.length - sequence.length - 1) {
  //       output.add(sequence);
  //     }
  //   }
  // }

  // return Array.from(output);
}

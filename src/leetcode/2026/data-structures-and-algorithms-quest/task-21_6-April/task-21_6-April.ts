export function maskPII(s: string): string {
  let ans: string;

  let indx = s.indexOf("@");
  if (indx !== -1) {
    // email
    let arr = Array.from(s);
    arr.splice(1, indx - 2, "*****");
    ans = arr.join("").toLocaleLowerCase();
  } else {
    // phone
    let template = "";
    s = s.replaceAll(/[-+() ]/g, "");

    switch (s.length) {
      case 10: {
        template = "***-***-";
        break;
      }
      case 11: {
        template = `+*-***-***-`;
        break;
      }
      case 12: {
        template = `+**-***-***-`;
        break;
      }
      case 13: {
        template = `+***-***-***-`;
        break;
      }
    }
    ans = template + s.slice(s.length - 4, s.length);
  }

  return ans;
}

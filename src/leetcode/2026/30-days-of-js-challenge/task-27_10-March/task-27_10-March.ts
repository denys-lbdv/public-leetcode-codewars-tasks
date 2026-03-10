export function compactObject(obj: Object): Object {
  let result;
  if (Array.isArray(obj)) {
    result = filterFalseFromArray(obj);
  } else {
    result = filterFalseFromObj(obj);
  }
  return result;
}

function filterFalseFromArray(arr: any[]) {
  let result: any[] = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(filterFalseFromArray(arr[i]));
    } else if (isObj(arr[i])) {
      result.push(filterFalseFromObj(arr[i]));
    } else {
      if (Boolean(arr[i]) === true) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

function filterFalseFromObj(obj: Object) {
  for (let key in obj) {
    if (Boolean(obj[key]) === false) {
      delete obj[key];
    }
    if (isObj(obj[key])) {
      filterFalseFromObj(obj[key]);
    }
    if (Array.isArray(obj[key])) {
      obj[key] = filterFalseFromArray(obj[key]);
    }
  }
  return obj;
}

function isObj(value) {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

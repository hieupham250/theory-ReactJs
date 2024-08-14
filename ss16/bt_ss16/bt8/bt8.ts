function deepMerge<T>(obj1: T & object, obj2: T & object): T {
    if (typeof obj1 === "object" && typeof obj2 === "object") {
      for (let key in obj2) {
        if (obj1.hasOwnProperty(key)) {
          obj1[key] = deepMerge(obj1[key], obj2[key]);  
        } else {
          obj1[key] = obj2[key];
        }
      }
    } else {
      return obj2;
    }
    return obj1;
  }
  const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
  };
  const obj2 = {
    b: {
      d: {
        f: 4,
      },
      g: 5,
    },
    h: 6,
  };
  const mergedObj = deepMerge(obj1, obj2);
  console.log(mergedObj);
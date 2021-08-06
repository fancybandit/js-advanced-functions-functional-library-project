const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // const values = Object.values(collection);
      // values.forEach(callback.bind(collection));

      const keyVals = Object.entries(collection);
      for (const [key, value] of keyVals) {
        callback(value, key, collection);
      };

      return collection;
    },

    map: function(collection, callback) {
      const keyVals = Object.entries(collection);
      const newCollection = [];

      for (const [key, value] of keyVals) {
        newCollection.push(callback(value, key, collection));
      };

      return newCollection;
    },

    reduce: function(collection, callback, acc=null) {
      const values = Object.values(collection);

      if (acc === null) {
        acc = values[0];
        values.shift();
      };
      
      for (const value of values) {
        acc = callback(acc, value, collection);
      };

      return acc;
    },

    find: function(collection, predicate) {
      for (const value of collection) {
        if (predicate(value) == true) {return value};
      };
    },

    filter: function(collection, predicate) {
      let matches = [];
      for (const value of collection) {
        if (predicate(value) == true) {matches.push(value)};
      };
      return matches;
    },

    size: function(collection) {
      return Object.values(collection).length;
    },

    first: function(array, n=1) {
      const chosen = array.slice(0, n);
      return chosen.length === 1 ? chosen[0] : chosen;
    },

    last: function(array, n=1) {
      const chosen = array.slice(-n);
      return chosen.length === 1 ? chosen[0] : chosen;
    },

    compact: function(array) {
      return this.filter(array, e => !!e === true);
    },

    sortBy: function(array, callback) {
      const modified = array.map(callback);
      const pairs = [];

      for (let i = 0; i < array.length; i++) {
        pairs.push([array[i], modified[i]]);
      };
      pairs.sort(function(a, b) {
        if (a[1] < b[1]) {
          return -1;
        } else {
          return 1;
        };
      });
      
      return pairs.map(e => e[0]);
    },

    flatten: function(array, shallow) {
      if (shallow) {
        array = array.flat();
      } else {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            array = array.flat()
            i--;
          };
        };
      };

      return array;
    },

    uniq: function(array, isSorted=false, callback=false) {
      if (!isSorted) {
        array.sort();
      };
      
      let uniqueVals = [];

      if (callback) {
        let modified = array.map(callback);
        let tracker = [];

        for (let i = 0; i < modified.length; i++) {
          if (!tracker.includes(modified[i])) {
            tracker.push(modified[i]);
            uniqueVals.push(array[i]);
          };
        };

      } else {
        for (let i = 0; i < array.length; i++) {
          if (!uniqueVals.includes(array[i])) {
            uniqueVals.push(array[i]);
          };
        };
      };

      return uniqueVals;
    },

    keys: function(object) {
      let keys = [];
      for (const key in object) {
        keys.push(key);
      };
      return keys;
    },

    values: function(object) {
      let values = [];
      for (const key in object) {
        values.push(object[key]);
      };
      return values;
    },

    functions: function(object) {
      let functions = [];
      for (const key in object) {
        if (typeof object[key] === "function") {
          functions.push(key);
        };
      };
      return functions;
    },


  }
})()

fi.libraryMethod()

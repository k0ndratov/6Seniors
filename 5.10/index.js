const obj = {
  year: 2025,
  isRun: false,
  name: "Andrey",
  [Symbol.iterator]: function() {
    const $this = this;

    const keys = Object.keys($this);
    const limit = keys.length;
    let count = 0;

    return {
      next: function() {
        if (count < limit) {
          return { done: false, value: $this[keys[count++]] }
        } else {
          return { done: true }
        }
      }
    }
  }
}

const arr = Array.from(obj);
const [year, isRun, name] = obj;

import { 
  sum,
  arrayChange, 
  nanFunction,
  getText,
  throwError,
  fetchData
} from "./JestSample";

const sample = require("./JestSample");

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = {one: 1};
  data['one'] = 2;
  expect(data).toEqual({one: 2});
});

test("change array", () => {
  let strignAyy = ["bbb", "ccc", "ddd"];
  const afterAyy = ["bbb", "aaa", "ddd"]
  expect(arrayChange(strignAyy)).toEqual(afterAyy);
});

test("return graterThan 100", () => {
  expect(nanFunction(1)).toBeGreaterThan(100);
});

test("get text", () => {
  expect(getText()).toMatch("started jest");
});

test("throw error", () => {
  expect(throwError).toThrow("error");
});


test('the data is peanut butter', () => {
  fetchData(true).then(data => {
    expect(data).toEqual(100);
  })

  fetchData(false).catch(data => {
    expect(data).toMatch("error");
  })
});


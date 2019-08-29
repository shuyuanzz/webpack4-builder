const assert = require("assert");
describe("webpack base test", () => {
  const baseConf = require("../../lib/webpack.base");
  it("entry", () => {
    assert.equal(
      baseConf.entry.index.indexof("/test/smoke/template/src/index/main.tsx") >
        -1,
      true
    );
  });
});
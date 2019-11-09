const globalAny:any = global;

const { describe, it, expect } = globalAny;

describe('Example integration test suit', () => {
  it('integration test', () => {
    expect(true).toEqual(true);
  });
});

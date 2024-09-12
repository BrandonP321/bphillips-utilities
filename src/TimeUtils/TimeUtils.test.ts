import * as TimeUtils from ".";

describe("TimeUtils", () => {
  it("should convert minutes to milliseconds", () => {
    expect(TimeUtils.minutesToMilliseconds(1)).toBe(60000);
  });

  it("should convert hours to milliseconds", () => {
    expect(TimeUtils.hoursToMilliseconds(1)).toBe(3600000);
  });

  it("should convert minutes to seconds", () => {
    expect(TimeUtils.minutesToSeconds(1)).toBe(60);
  });

  it("should convert hours to seconds", () => {
    expect(TimeUtils.hoursToSeconds(1)).toBe(3600);
  });

  it("should convert days to seconds", () => {
    expect(TimeUtils.daysToSeconds(1)).toBe(86400);
  });
});

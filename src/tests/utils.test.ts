import { getGreeting, replaceReadme } from "../utils";
test("getGreeting night to morning", () => {
  const today = new Date();
  const date1: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    9,
    0,
    0
  );
  let val = "basdasd asdas dasd Good Night!!";
  val = getGreeting(date1, val);
  expect(val).toMatch(/Good Morning/);
});

test("getGreeting morning to afternoon", () => {
  const today = new Date();
  const date1: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    9,
    0,
    0
  );
  const date2: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    13,
    0,
    0
  );
  let val = "basdasd asdas dasd Good Night!!";
  val = getGreeting(date1, val);
  val = getGreeting(date2, val);
  expect(val).toMatch(/Good Afternoon/);
});

test("getGreeting afternoon to night", () => {
  const today = new Date();
  const date1: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    9,
    0,
    0
  );
  const date2: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    13,
    0,
    0
  );
  const date3: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    20,
    0,
    0
  );
  let val = "basdasd asdas dasd Good Night!!";
  val = getGreeting(date1, val);
  val = getGreeting(date2, val);
  val = getGreeting(date3, val);
  expect(val).toMatch(/Good Night/);
});

test("getGreeting afternoon to night2", () => {
  const today = new Date();
  const date1: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    9,
    0,
    0
  );
  const date2: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    13,
    0,
    0
  );
  const date3: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    3,
    0,
    0
  );
  let val = "basdasd asdas dasd Good Night!!";
  val = getGreeting(date1, val);
  val = getGreeting(date2, val);
  val = getGreeting(date3, val);
  expect(val).toMatch(/Good Night/);
});

test("getGreeting night to night", () => {
  const today = new Date();
  const date1: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    9,
    0,
    0
  );
  const date2: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    13,
    0,
    0
  );
  const date3: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    20,
    0,
    0
  );
  const date4: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    3,
    0,
    0
  );
  let val = "basdasd asdas dasd Good Night!!";
  val = getGreeting(date1, val);
  val = getGreeting(date2, val);
  val = getGreeting(date3, val);
  val = getGreeting(date4, val);
  expect(val).toMatch(/Good Night/);
});

test("getGreeting night to night2", () => {
  const today = new Date();
  const date1: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    9,
    0,
    0
  );
  const date2: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    13,
    0,
    0
  );
  const date3: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    20,
    0,
    0
  );
  const date4: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    0,
    0
  );
  let val = "basdasd asdas dasd Good Night!!";
  val = getGreeting(date1, val);
  val = getGreeting(date2, val);
  val = getGreeting(date3, val);
  val = getGreeting(date4, val);
  expect(val).toMatch(/Good Night/);
});

test("replaceReadme", () => {
  const date: Date = new Date();
  const val: string = "24/03/1990";
  const readme: string = replaceReadme(date, val);
  expect(readme).toContain(
    `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
  );
});

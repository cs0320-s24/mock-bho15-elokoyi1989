import { expect, test } from "@playwright/test";

/**
  The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
    2. Interact with the page
    3. Assert something about the page against your expectations
  Look for this pattern in the tests below!
 */

// If you needed to do something before every test case...
test.beforeEach(() => {
  // ... you'd put it here.
  // TODO: Is there something we need to do before every test case to avoid repeating code?
});

/**
 * Don't worry about the "async" yet. We'll cover it in more detail
 * for the next sprint. For now, just think about "await" as something
 * you put before parts of your test that might take time to run,
 * like any interaction with the page.
 */

test("on page load, check initial state", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Ensure other elements are not visible initially
  await expect(page.getByLabel("Sign Out")).not.toBeVisible();
  await expect(page.getByLabel("Command input")).not.toBeVisible();
  await expect(page.getByLabel("Submit")).not.toBeVisible();
});

// Test: Check behavior of the input box after submitting a command
test("after submitting a command, verify input box behavior", async ({
  page,
}) => {
  await page.goto("http://localhost:8000/");

  // Click Login button
  await page.getByLabel("Login").click();
  2;
  // Type a command in the input box
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("Test Command");

  // Click Submit button
  await page.getByLabel("Submit").click();

  // Ensure input box is cleared after submitting a command
  await expect(page.getByLabel("Command input")).toHaveValue("");
});

test("on page load, i see a login button", async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  await page.goto("http://localhost:8000/");
  await expect(page.getByLabel("Login")).toBeVisible();
});

test("on page load, i dont see the input box until login", async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  await page.goto("http://localhost:8000/");
  await expect(page.getByLabel("Sign Out")).not.toBeVisible();
  await expect(page.getByLabel("Command input")).not.toBeVisible();

  // click the login button
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  await expect(page.getByLabel("Command input")).toBeVisible();
});

test("after I type into the input box, its text changes", async ({ page }) => {
  // Step 1: Navigate to a URL
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();

  // Step 2: Interact with the page
  // Locate the element you are looking for
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("Awesome command");

  // Step 3: Assert something about the page
  // Assertions are done by using the expect() function
  const mock_input = `Awesome command`;
  await expect(page.getByLabel("Command input")).toHaveValue(mock_input);
});

test("on page load, i see a button", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Submit")).toBeVisible();
});

test("after I click the button, its label increments", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await page.getByLabel("Submit").click();
  await expect(page.getByLabel("Submit")).toHaveText("Submitted 1 times");
  await page.getByLabel("Submit").click();
  await expect(page.getByLabel("Submit")).toHaveText("Submitted 2 times");
  await page.getByLabel("Submit").click();
  await expect(page.getByLabel("Submit")).toHaveText("Submitted 3 times");
});

test("after I click the button, my command gets pushed", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("hiii");
  await page.getByLabel("Submit").click();
  await expect(page.getByText("Command was not found.")).toBeVisible();
});

test("after I change the mode, it changes to verbose", async ({ page }) => {
  // Navigate to page
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();

  // Enter verbose mode by passing in "mode" command
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("mode");
  await page.getByLabel("Submit").click();

  // Check if the verbose state is correctly shown
  await expect(page.getByText("Verbose is now true")).toBeVisible;
});

test("view command shows correct data", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();

  //  view command for 'student-data.csv'
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file students-data.csv");
  await page.getByLabel("Submit").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByLabel("Submit").click();

  // Verify that the displayed data matches the mock data for 'student-data.csv'
  const expectedViewData = [
    ["Student", "Major", "Dorm", "Age"],
    ["Ashley", "Mathematics", "New Pem 3", "21"],
    ["Brian", "Geology", "Greg A", "20"],
    ["Colton", "Urban Studies", "Grad Center", "20"],
    ["Derrick", "Art", "Minden", "22"],
    ["Emily", "English", "Metcalf", "19"],
  ];

  for (const row of expectedViewData) {
    for (const cell of row) {
      await expect(page.getByText(cell)).toBeVisible;
    }
  }
});

test("search command displays correct data", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();

  // search command for 'student-data.csv major art'

  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file students-data.csv");
  await page.getByLabel("Submit").click();

  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("search student-data.csv major art");
  await page.getByLabel("Submit").click();

  // Verify that the data matches the mock search data
  const expectedSearchData = [["Derrick", "Art", "Minden", "22"]];

  for (const row of expectedSearchData) {
    for (const cell of row) {
      await expect(page.getByText(cell)).toBeVisible;
    }
  }
});

test("handles missing filepath argument in load command", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();

  // Execute load_file command without providing a filepath
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file");
  await page.getByLabel("Submit").click();

  // Assert that the error message is displayed
  await expect(
    page.getByText("Filepath was not given as an argument.")
  ).toBeVisible();
});

test("handles multiple arguments in load command", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();

  // Execute load_file command with more than one argument
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file file1.csv file2.csv");
  await page.getByLabel("Submit").click();

  // Assert that the error message is displayed
  await expect(
    page.getByText("Only one filepath can be taken in.")
  ).toBeVisible();
});

test("handles nonexistent filepath in load command", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();

  // Execute load_file command with a nonexistent filepath
  await page.getByLabel("Command input").click();

  await page
    .getByLabel("Command input")
    .fill("load_file non_existent_file.csv");
  await page.getByLabel("Submit").click();

  // Assert that the error message is displayed
  await expect(
    page.getByText("Filepath does not exist in the data folder.")
  ).toBeVisible();
});

test("should load a file using load_file command", async ({ page }) => {
  // Navigate to the application
  await page.goto("http://localhost:8000/");

  await page.getByLabel("Login").click();

  // Execute the load_file command to load a file
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(`load_file student-data.csv`);
  await page.getByLabel("Submit").click();

  // Check if the file is loaded correctly
  await expect(
    page.getByText("This csv file: student-data.csv is now loaded.")
  ).toBeVisible();
});

test("should handle authentication state correctly", async ({ page }) => {
  // Navigate to the application
  await page.goto("http://localhost:8000/");

  // Try executing a command without logging in
  await expect(page.getByLabel("repl-command-box")).not.toBeVisible();
});

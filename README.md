> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

This project serves as a frontend website for a Read Evaluate Print Loop (REPL) for a CSV parser. The user is able to load CSVs, view them, and then search through them by column number or value. There is also a mode command, which toggles the REPL output to either brief or verbose mode.

# Design Choices

As it stands, this project mocks the backend functionality for the CSV parser. We do this by maintaining two records—one from filepath to CSV content and one from search query to search results. In the future, we will connect this functionality to a functioning backend in java.

We also have the REPLOutput component, which maintains the HTML elements for each command. It takes in the output as well as the verbose state in order to display the output. Since everything rerenders with a change, this means that when the verbose state is changed, the entire history is changed.

The REPLCommandUtility component represents functionality that developers can use to add to the commandRegistry.

The REPLCommands component is where the current commands are being stored. The developer is free to change this class.

# Errors/Bugs

N/A

# Tests

Run the tests by running 'npm test'in the terminal

Test: Check that assets are not visible before logging in

Test: Check behavior of the input box after submitting a command

Test: "on page load, i see a login button" - verify that the login button is visible on page load

Test "on page load, i dont see the input box until login" - verify that the input box is not visible until log in

Test: "on page load, i see a login button" - verify that the login button is visible on page load

Test:"after I type into the input box, its text changes" - verify that text changes with input

Test: "on page load, i see a button" - verify that button is apparent after page load

Test: "after I click the button, its label increments" - label increments with each click

Test: "after I click the button, my command gets pushed" - command is not found is returned with bogus command

Test: "after I change the mode, it changes to verbose" - verbose output occurs when mode command is

Test: "view command shows correct data" - view command works

Test: "search command displays correct data" - example search command

Test: "handles missing filepath argument in load command" - missing filepath on load command

Test: "handles multiple arguments in load command" - multiple filepaths yield an error as well

Test: "handles nonexistent filepath in load command" - nonexistent filepath on load

Test: "should load a file using load_file command" - loading correct filepath

Test: "should handle authentication state correctly" - repl command box not visible if not logged in

Test: "search command on one column csv"

Test: "load and viewing multiple times works" - loading and viewing different files

Test: "search command when there is no result" - checking the result when search for something that isnt there

Test: "after I change the mode, all the commands change too" - Checking the shape of verbose mode

# How to

Navigate to http://localhost:8000/. In order to use the program, you first have to log in.
Run the tests by running 'npm test'in the terminal
Commands:
mode — toggles between verbose and brief output (mode)
load_file — loads a csv, if it exists in the program (load_file FILENAME)
view — displays the csv, if one is loaded (view)
search — searches through the csv, given a column identifier, either an index or name (search COLUMN VALUE)

# Collaboration

N/A

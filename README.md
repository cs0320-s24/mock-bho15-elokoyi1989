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

# How to

Navigate to http://localhost:8000/. In order to use the program, you first have to log in.

Commands:
mode — toggles between verbose and brief output (mode)
load_file — loads a csv, if it exists in the program (load_file FILENAME)
view — displays the csv, if one is loaded (view)
search — searches through the csv, given a column identifier, either an index or name (search COLUMN VALUE)

# Collaboration
N/A

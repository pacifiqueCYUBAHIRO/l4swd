Tela Tech ltd is a company that develop websites for different institutions they have tasked
you to develop for them a database (Kigali_innovation_DB) and inside create a table called
"clients" with the following fields "ID, Names, Sex, Address, Phone and Email" in node js and
develop APIs that will be used to insert, update, select and delete client’s records via
frontend where you will be provide the developed APIs to be integrated with front end.
Include http status codes in order to overcome error handling issues

# CREATE DATABASE Kigali_innovation_DB;

# CREATE TABLE clients (
 # ID INT AUTO_INCREMENT PRIMARY KEY,
 # Names VARCHAR(100),
 # Sex VARCHAR(10),
 # Address VARCHAR(100),
 # Phone VARCHAR(20),
 # Email VARCHAR(100)
# );

Tela Tech Ltd has successfully developed a backend system using that manages client records in a database called Kigali_innovation_DB. The backend exposes RESTful APIs to:
    • Insert new client records
    • Update and Delete existing records
    • Retrieve all client records
Your task is to design and implement a React dashboard that integrates with these APIs. The dashboard should be structured as follows:
Requirements
    • Create a main dashboard component that serves as the parent.
    • Inside the dashboard, include three child components:
        1. AddClientForm – A form to add new client data to the database.
        2. EditDeleteClient – A component that allows updating and deleting existing client records.
        3. ClientList – A display table or list that retrieves and shows all client records from the database.
Integration Details
    • Use Axios or Fetch API to connect to the backend endpoints.
    • Handle HTTP status codes gracefully:
        ◦ Show success messages for 200/201 responses.
        ◦ Display error alerts for 400/404/500 responses.
    • Ensure form validation for required fields like Names, Phone, and Email.
    • Use React state and props to manage data flow between parent and child components.
    • Apply basic styling to make the dashboard user-friendly and intuitive.


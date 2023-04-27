-REST-API-CRUD-APP--Node.js-Express

DESCRIPTION

A simple CRUD application to practice and learn the fundamentals of:

	Node.Js
	Express.Js
	client-server architecture
	HTTP requests (POST, GET, UPDATE, DELETE)

This application does not interact with a database.

I used:
	Node.js v18.14.0 - to run the code on the server
	Express.js v4.18.2
	uuid v9.0.0 - to generate ids
	nodemon v2.0.22 - for real-time development (live-server)




INSTALLATION - to download the application, use the following commands.

1.    git clone https://github.com/razvanghr/REST-API-CRUD-APP---Node.js-Express.git

2.    npm install

3.    npm start

The application will run at: http://localhost:5000/



USAGE - for usage, we recommend using Postman (link: https://www.postman.com/downloads/)

1 - Add a person
- POST request: http://localhost:5000/users 
		
	{
			"firstName" : "TEST",
			"secondName" : "TEST",
			"age" : 1
	}


2 - Get all people's data
- GET request: http://localhost:5000/users


3 - Get data for a single person (ID)
- GET request: http://localhost:5000/users/:id - where the id is in the format: (example: "214e2911-7fd7-4f36-9dde-c5edba1b9eb4")


4 - Delete data for a single person (ID)
- DELETE request: http://localhost:5000/users/:id - where the id is in the format: (example: "214e2911-7fd7-4f36-9dde-c5edba1b9eb4")



5 - Modify data for a single person (ID)
-PATCH request: http://localhost:5000/users/:id - where the id is in the format: (example "0f7da487-9817-4785-82f9-65924e4a9f90")


	{
			"firstName" : "TEST-PATCH",
			"secondName" : "TEST-PATCH",
			"age" : 2
	}


For any information or issues, please contact:
razvan_alin02@yahoo.com
Github: https://github.com/razvanghr

------ROMANA

DESCRIERE

 O aplicatie  simpla de tip CRUD pentru a exersa si invata fundamentele:
	Node.Js 
	Express.Js
	arhitectura client - server 
	requesturi HTTP ( POST , GET , UPDATE , DELETE)

 Aceast nu interactioneaza cu o baza de date. 
 
 
	Am utilizat:
			Node.js v18.14.0  - pentru a executa codul pe server 
			Express.js v4.18.2 
			uuid v9.0.0 - pentru a genera id-uri
			nodemon v2.0.22 - pentru dezvolaterea in timp real (live-server)



INSTALARE - pentru a putea descarca aplicatia folositi urmatoarele comenzi.

 1.   git clone https://github.com/razvanghr/REST-API-CRUD-APP---Node.js-Express.git
 
 2.   npm install 

 3.  	npm start


 Aplicatia va rula la: http://localhost:5000/


UTILIZARE - pentru utilizare va recomadam sa folositi Postman ( link: https://www.postman.com/downloads/ )


1 - Adaugare persoana 
	- cerere de tip POST : http://localhost:5000/users 
			
		{
    			"firstName" : "TEST",
    			"secondName" : "TEST",
    			"age" : 1
		}
        

2 - Obtine datele tuturor persoanelor
	- cerere de tip GET : http://localhost:5000/users



3 - Obtine datele unei singure persoane (ID)
	- cerere de tip GET : http://localhost:5000/users/:id - unde id-ul este de forma : ( exemplu: "214e2911-7fd7-4f36-9dde-c5edba1b9eb4")


4 - Sterge datele unei singure persoane (ID)
	- cerere de tip DELETE : http://localhost:5000/users/:id - unde id-ul este de forma : ( exemplu: "214e2911-7fd7-4f36-9dde-c5edba1b9eb4")


5 - Modificare datele unei singure persoane (ID)
	-cerere de tip PATCH : http://localhost:5000/users/:id - unde id-ul este de forma : ( exemplu "0f7da487-9817-4785-82f9-65924e4a9f90")

		{
    			"firstName" : "TEST-PATCH",
    			"secondName" : "TEST-PATCH",
    			"age" : 2
		}
        

Pentru orice informatie sau problema!
	Contact: razvan_alin02@yahoo.com
	Github: https://github.com/razvanghr

	

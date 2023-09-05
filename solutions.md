# Løsninger til Lab 1 opgaver
## Øvelse 2: Opret en mappe
Endpoint: https://api.dropboxapi.com/2/files/create_folder_v2    
HTTP-verbet: POST    
Beskrivelse:    
Body:    
raw => json    
{    "path": "/TestMappe",    "autorename": false}    


Response:    
{    "metadata": {        "name": "TestMappe",        "path_lower": "/testmappe",        "path_display": "/TestMappe",        "id": "id:gCTr6onO3SAAAAAAAAAAEQ"    }}    
statuskode: 200 OK  

REST Beskrivelse:     
Endpoint burde hedde: https://api.dropboxapi.com/2/folders/    
Statuskode skulle have været 201    
I responset burde der have været en "Location header", og ingen json i response body    



## Øvelse 3: Hent mappe detaljer
Endpoint: https://api.dropboxapi.com/2/files/get_metadata    
Http-verb: POST    
request body: {    "path": "/TestMappe"}    
response:     
{    ".tag": "folder",    "name": "TestMappe",    "path_lower": "/testmappe",    "path_display": "/TestMappe",    "id": "id:gCTr6onO3SAAAAAAAAAADg"}    
Statuskode: 200   

REST Beskrivelse:    
Endpoint burde have været: https://api.dropboxapi.com/2/folders/:id    
Http verb: burde have været GET      


## Øvelse 4: Upload en fil
Endpoint: https://content.dropboxapi.com/2/files/upload    
HTTP-verbet: POST    
Beskrivelse:    
header:    
Content-Type: application/octet-stream     
Dropbox-API-Arg: {"autorename":false,"mode":"add","mute":false,"path":"/test.svg","strict_conflict":false}    

Body:    
binary => chose file    
raw -> JSON: { "autorename": false, "mode": "add", "mute": false, "path": "/", "strict_conflict": false}    

Response:    
{ "name": "test.svg", "path_lower": "/test.svg", "path_display": "/test.svg", "id": "id:gCTr6onO3SAAAAAAAAAAEA", "client_modified": "2023-09-05T12:56:27Z", "server_modified": "2023-09-05T12:56:27Z", "rev": "6049c27b4487f35ba4193", "size": 720, "is_downloadable": true, "content_hash": "dca43c3d03dc4b86b6a8532eaebc65568176da43d574952928214691e20a98da"}    
statuskode: 200 OK    




## Øvelse 5: Slet en fil
Endpoint: https://api.dropboxapi.com/2/files/delete_v2    
Http-verb: POST    
Request body:     
{    "path": "/test.svg"}    
Response body:    
{    "metadata": {        ".tag": "file",        "name": "test.svg",        "path_lower": "/test.svg",        "path_display": "/test.svg",        "id": "id:gCTr6onO3SAAAAAAAAAAEA",        "client_modified": "2023-09-05T12:56:27Z",        "server_modified": "2023-09-05T12:56:27Z",        "rev": "6049c27b4487f35ba4193",        "size": 720,        "is_downloadable": true,        "content_hash": "dca43c3d03dc4b86b6a8532eaebc65568176da43d574952928214691e20a98da"    }}    

Statuskode: 200  

REST beskrivelse:    
Enpoint burde være: https://api.dropboxapi.com/2/files/:id    
Http-verb skal være DELETE    
Statuskode skulle være 204 no content og ingen json i body    





## Øvelse 7: Søg efter filer


## Øvelse 8: Flyt en fil


## Øvelse 9: Kopier en fil


## Øvelse 10: Brug JavaScript's Fetch med Dropbox API


## Øvelse 11: Er https://api.dropboxapi.com/2/ Restfull or not?



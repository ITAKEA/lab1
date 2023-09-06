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
Endpoint: https://api.dropboxapi.com/2/files/search_v2    
Http-verb: POST    
request body:    
{    "match_field_options": {        "include_highlights": false    },    "options": {        "file_status": "active",        "filename_only": false,        "max_results": 20,        "path": "/"    },    "query": "test"}

response    
{            "match_type": {                ".tag": "filename"            },            "metadata": {                ".tag": "metadata",                "metadata": {                    ".tag": "folder",                    "id": "id:gCTr6onO3SAAAAAAAAAAFA",                    "name": "test 2",                    "path_display": "/test 2",                    "path_lower": "/test 2"                }            }        },


Statuskode: 200 ok    


REST beskrivelse:    
Endpoint burde være: https://api.dropboxapi.com/2/files?search=test     
Http-verb: GET    




## Øvelse 8: Flyt en fil
Endpoint: https://api.dropboxapi.com/2/files/move_v2    
Http-verb: POST    
Request body: {    "allow_ownership_transfer": false,    "allow_shared_folder": false,    "autorename": false,    "from_path": "/Fil til test.paper",    "to_path": "/Test/algebra"}    
Response:    
{    "metadata": {        ".tag": "file",        "name": "algebra",        "path_lower": "/test/algebra",        "path_display": "/Test/algebra",        "id": "id:gCTr6onO3SAAAAAAAAAAEg",        "client_modified": "2023-09-05T15:34:23Z",        "server_modified": "2023-09-05T15:44:37Z",        "rev": "6049e811a4f7f35ba4193",        "size": 200,        "is_downloadable": false,        "export_info": {            "export_as": "html",            "export_options": [                "html",                "markdown"            ]        },        "content_hash": "4647d393a2056d87499c1afa549a6c14d084a6c01a57640029f54b931ac50a1f"    }}


Statuskode 200 ok


Rest Beskrivelse:    
Endpoint burde være: https://api.dropboxapi.com/2/files/move     
Http-verb : maybe put or path    



## Øvelse 9: Kopier en fil
Endpoint: https://api.dropboxapi.com/2/files/copy_v2    
Http-verb: POST    
REquest body: {    "allow_ownership_transfer": false,    "allow_shared_folder": false,    "autorename": false,    "from_path": "/test/algebra",    "to_path": "/Homework/algebra"}


Respose:    
{    "metadata": {        ".tag": "file",        "name": "algebra",        "path_lower": "/homework/algebra",        "path_display": "/Homework/algebra",        "id": "id:gCTr6onO3SAAAAAAAAAAFg",        "client_modified": "2023-09-05T15:34:23Z",        "server_modified": "2023-09-05T16:11:40Z",        "rev": "6049ee1d0a34435ba4193",        "size": 200,        "is_downloadable": false,        "export_info": {            "export_as": "html",            "export_options": [                "html",                "markdown"            ]        },        "content_hash": "4647d393a2056d87499c1afa549a6c14d084a6c01a57640029f54b931ac50a1f"    }}


Statuskode: 200    
Rest beskrivelse:    
Endpoint måske https://api.dropboxapi.com/2/files/copy    
http-verb måske Put eller patch    





## Øvelse 10: Brug JavaScript's Fetch med Dropbox API


## Øvelse 11: Er https://api.dropboxapi.com/2/ Restfull or not?
Api´et bruger POST verbet til alle requests. Det følger ikke REST principperne, og der burde have været brugt GET, DELETE, UPDATE en del steder istedet for POST til alt. 
De specifikke detaljer om dette har jeg skrevet om i besvarelsen til de specifikke øvelser. 
Endpoints har generelt ikke en særlig god navngivning. Det skal navngive en resource, altså et Navneord, og ikke som i flere tilfælde en handling (et verbum) som feks. "get_metadata" og "upload"


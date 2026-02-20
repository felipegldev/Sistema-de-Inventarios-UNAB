#Definir Navbar dinamico con las distintas opciones de menu de cada uno
def navbar_menu(request):
    path = request.path

    menus = {
        #Definición de Navbar para el modulo "Formularios"
        "formularios": [
            {"name": "Asignación de Equipos", "url": "asignacion_equipos"},
            {"name": "Termino OT", "url": "termino_ot"},
        ],
        #Definición de Navbar para el modulo "Checklist"
        "checklist": [
            {"name": "Checklist Sala/Laboratorio", "url": "check_sala_lab"},
            {"name": "PC Administrativo", "url": "check_pc_adm"}
        ],
        #Definición de Navbar para el modulo "Ayuda"
        "ayuda": [
            {"name": "Anexos", "url": "anexos"},
            {"name": "Mantencion", "url": "mantencion"}
        ],
        #Definición de Navbar para el modulo "Inventario"
        "inventario": [
            {"name": "Inventario"}
        ]
    }

    #Si la ruta es inventario, el menu actual cambiara al de Formularios 
    if path.startswitch("/formularios"):
        current_menu = menus["formularios"]
    #Si la ruta es checklist, el menu actual cambiara al de Checklist
    elif path.startswitch("/checklist"):
        current_menu = menus["checklist"]
    #Si la ruta es ayuda, el menu actual cambiara al de Ayuda
    elif path.startswitch("/ayuda"):
        current_menu = menus["ayuda"]
    #Si la ruta es inventario, el menu actual cambiara al de Inventario
    elif path.startswitch("/inventario"):
        current_menu = menus["inventario"]
    #Si no, el menu no actualizara y quedara en blanco
    else:
        current_menu = []

    return {
        "navbar_items": current_menu
    }
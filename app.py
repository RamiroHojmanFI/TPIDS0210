from flask import Flask, render_template, request, redirect, flash, url_for
from flask_mail import Mail, Message
import os

from dotenv import load_dotenv 
load_dotenv()

app = Flask(__name__)




app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False 
app.config['MAIL_USERNAME'] = os.getenv('EMAIL') #ANTES DE EJECUTAR NECESITAS ESTAS DOS VAR DE ENTORNO, sino no funka
app.config['MAIL_PASSWORD'] = os.getenv('PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

mail = Mail(app)

info_evento = {
    1: {
        "nombre": "Rally MTB 2025",
        "organizador": "Club Social y Deportivo Unidos por el Deporte",
        "slogan":"La carrera de tu vida",
        "descripcion": "Carrera de MTB rural en dos modalidades 30km y 80km ...",
        "fecha": "24 de Octubre de 2025",
        "horario": "8am",
        "lugar": "Tandil, Buenos Aires",
        "tipo_carrera": "MTB rural",
        "modalidad_costo": {
            1: {"nombre": "Corta" ,"valor": "100"},
            2: {"nombre": "Larga" ,"valor": "200"}
        },
       
        "patrocinadores": {
            "Coca-Cola": {
                "mensaje": "Gracias Coca-Cola por hidratar a todos nuestros corredores.",
                "logo_url": "images/Coca-Cola.jpg" 
            },
            "Disney": {
                "mensaje": "Disfruta de esta carrera on stream sin pausas ni anuncios a traves de Disney Plus",
                "logo_url": "images/disney.jpg" 
            },
            "SAME": {
                "mensaje": "Sabemos que pueden haber accidentes, y estamos cubiertos. SAME, Cuidame",
                "logo_url": "images/same.png" 
            }
        }
    }
}

@app.route("/")
def home(): 
    
    return render_template('index.html', envio =info_evento) 

@app.route("/registro", methods=["POST", "GET"])
def registro():

    if request.method == "POST":
        dni = request.form.get("dni")
        nombre = request.form.get("nombre")
        apellido = request.form.get("apellido")
        email = request.form.get("email")
        num_celular = request.form.get("num_celular")
        modalidad = request.form.get("modalidad")
        msg = Message('Asunto del Correo', sender=app.config['MAIL_USERNAME'], recipients=[email])
        msg.body = f"Hola {nombre} {apellido},DNI {dni} te registraste con el email {email} y tu numero {num_celular} en la modalidad {modalidad}."
        
        
        mail.send(msg)
       
       
        
        return redirect(url_for('home'))
        
    return render_template('registro.html', envio=info_evento)

if __name__ == "__main__":
    app.run("localhost", port=5002, debug=True)
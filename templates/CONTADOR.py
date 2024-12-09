from flask import Flask, render_template

app = Flask(__name__)

# Diccionario para almacenar los contadores de visitas
visit_counter = {
    "inicio": 0,
    "noticias": 0,
    "juegos": 0,
    "informacion": 0,
}

@app.route("/")
def inicio():
    visit_counter["inicio"] += 1
    return render_template("Inicio.html", visits=visit_counter["inicio"])

@app.route("/noticias")
def noticias():
    visit_counter["noticias"] += 1
    return render_template("Noticias.html", visits=visit_counter["noticias"])

@app.route("/juegos")
def juegos():
    visit_counter["juegos"] += 1
    return render_template("Juegos.html", visits=visit_counter["juegos"])

@app.route("/informacion")
def informacion():
    visit_counter["informacion"] += 1
    return render_template("Informacion.html", visits=visit_counter["informacion"])

if __name__ == "__main__":
    app.run(debug=True)

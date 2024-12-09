import sqlite3
from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime

app = Flask(__name__)

# Inicializar la base de datos
def init_db():
    conn = sqlite3.connect('comentariosgenareles.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS comentarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario TEXT NOT NULL,
            comentario TEXT NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Ruta de inicio
@app.route('/')
def inicio():
    return render_template('Inicio.html')

# Ruta de comentarios generales
@app.route('/comentarios_generales', methods=['GET', 'POST'])
def comentarios_generales():
    conn = sqlite3.connect('comentariosgenerales.db')
    cursor = conn.cursor()

    if request.method == 'POST':
        usuario = request.form.get('usuario')
        comentario = request.form.get('comentario')
        fecha = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        cursor.execute('''
            INSERT INTO comentarios (usuario, comentario, fecha)
            VALUES (?, ?, ?)
        ''', (usuario, comentario, fecha))
        conn.commit()
        return redirect(url_for('comentarios_generales'))

    cursor.execute('SELECT usuario, comentario, fecha FROM comentarios ORDER BY fecha DESC')
    comments = cursor.fetchall()
    conn.close()

    return render_template('comentariosgenerales.html', comentario=comentario)

if __name__ == '__main__':
    init_db()  # Crear la base de datos si no existe
    app.run(debug=True)

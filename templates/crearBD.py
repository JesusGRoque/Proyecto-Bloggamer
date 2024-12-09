import sqlite3

# Conectar o crear la base de datos
conn = sqlite3.connect('bloggamer.db')
cursor = conn.cursor()

# Crear la tabla de comentarios si no existe
cursor.execute('''
CREATE TABLE IF NOT EXISTS comentarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    juego TEXT,
    usuario TEXT,
    comentario TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
)
''')

# Guardar los cambios y cerrar la conexión
conn.commit()
conn.close()

print("Base de datos creada y tabla de comentarios configurada.")

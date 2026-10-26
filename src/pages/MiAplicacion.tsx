


function MiAplicacion() {
    const nombre = 'Diogenes'
    const apellido = 'Carrasco'
    const colores = ['rojo', 'verde', 'azul']
    const isValid = true;
    const direccion = {
        calle: 'por ahi 123',
        ciudad: 'Concepción'
    }

    return (
        <>
            <h1>Hola desde MiAplicacion.tsx</h1>
            <p>Esto es un párrafo</p>

            <p style={{
                color: 'olive'
            }}>Bienvenido {nombre} {apellido}</p>
            <p>Colores favoritos</p>
            <h3>{colores.join(', ')}</h3>
            <ul>
                {
                    colores.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <p>Imprimir booleano</p>
            <p>Está Activo?:{isValid ? 'Si' : 'No'}</p>
            <p style={{
                padding: 10,
                backgroundColor: isValid ? 'lightgreen' : 'red'
            }}>Estado</p>

            <br />
            <p>{JSON.stringify(direccion)}</p>

        </>


    )
}

export default MiAplicacion


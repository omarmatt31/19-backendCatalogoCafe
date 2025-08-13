export const test = (req, res)=>{
    res.status(200);
    res.send('Primera prueba desde el backend')
}

export const leerProductos = (req, res)=>{

}

export const crearProductos = async(req, res)=>{
    try{
        //1- Recibir el objeto que tengo que agregar a la BD
        console.log(req.body)
        //2- Validar los datos del objeto
        //3- Guardar el objeto en la base de datos
        
        //4- Enviar respuesta
    }catch(error){
        console.error(error)
    }
}
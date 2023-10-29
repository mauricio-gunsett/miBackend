// esto quiere decir que vamos a crear una ruta q funcionara con el metodo get paara otener todos los usuarios
// el primer parametro sera cual va a ser nuestra ruta en este caso la ruta vacia
// el segundo parametro es lo que pasara cuando esa ruta se ejecute
// configurar respuesta dentro del colbac que lo conocemos como controlador puede llevar 2 parametros
// 1er parametro request vamos a poder acceder a toda la informacion que viene en la petición se lo abrevia en req
// 2do parametro response vamos a poder devolver algo se lo abrevia en res
export const getUsers = (req, res)=>{
    console.log( "llegaste a la ruta de usuarios! yei!")
//  para mostrar que llego a la ruta y devuelve una respuesta
    res.sendStatus(200)
}
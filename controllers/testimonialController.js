import {Testimonial} from "../models/Testimoniales.js";


const guardarTestimonial = async (req, res) => {

    // Validar
    const {nombre, correo, mensaje} = req.body

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'Nombre no debe ir vacio'});
    }

    if(correo.trim() === ''){
        errores.push({mensaje: 'Correo no debe ir vacio'});
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'Mensaje no debe ir vacio'});
    }

    if(errores.length > 0){
        // Mostrar la vista con errores
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        // Guardarlo en la base de datos
        try {
           await Testimonial.create({
            nombre,
            correo,
            mensaje
           });
           res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }
}


export{
    guardarTestimonial
}
    

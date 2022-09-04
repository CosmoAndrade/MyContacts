class ContactController {

    index(request , response){
        // Listar todos os registros
        response.send('Contact')
    }

    show(){
        // Obter um registro
    }

    store(){
        // Criar novo registro
    }


    update(){
        // Editar um registro
    }


    delete(){
        // Deletar um registro
    }


}

module.exports = new ContactController();


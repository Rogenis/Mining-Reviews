
function index(req,res) {
    res.render("main/index", {
        titulo: "Página Principal - Minning Reviews"
    })
}

function sobre(req,res){
    res.render("main/sobre", {
        titulo: "Minning Reviews"
    })
}

function contato(req,res){
    res.render("main/contato", {
        titulo: "Entre em Contato"
    })
}

function ifood(req,res){
    res.render("main/ifood", {
        titulo: "WordCLoud"
    })
}

function ajuda(req,res){
    res.render("main/ajuda", {
        titulo: "Ajuda"
    })
}

function results(req,res){
    res.render("main/results", {
        titulo: "Resultado"
    })
}

module.exports = {index, sobre, contato, ifood, ajuda, results}
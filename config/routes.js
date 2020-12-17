const express = require("express")
const router = express.Router()
const mainController = require("../app/controllers/main")

router.get("/",         mainController.index)
router.get("/sobre",    mainController.sobre)
router.get("/contato",    mainController.contato)
router.get("/ifood",    mainController.ifood)

module.exports = router

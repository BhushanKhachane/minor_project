const express = require("express")
const router = express.Router()

const { makePayment } = require("../controllers/stripepayments")

router.post("/stripepayment", makePayment)

module.exports = router; 
const express = require('express')
const router = express.Router()
const SignInTemplateCopy = require('../models/signinmodels')
const bcrypt = require('bcrypt')

router.post('/signin',  async (request, response) => {

    const saltpassword = await bcrypt.genSalt(10)
    const securepassword = await bcrypt.hash(request.body.password, saltpassword) 

    const signedInUser = new SignInTemplateCopy({
        fullname : request.body.fullname,
        username : request.body.username,
        email : request.body.email,
        password : securepassword
    })
    signedInUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router
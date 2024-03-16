const { PrismaClient } = require('@prisma/client');
const { roleSchema } = require('../../Validators/userValidator');

const putRole = (req ,res)=>{
    const prisma = new PrismaClient();
    try{
        const user_id = req.params.id
        // check if the user exists
        const user = prisma.user.findUnique({
            where:{
                id:user_id
            }
        })
        if(!user){
            res.status(404).send({
                message:"User Not Found"
            })
        }

        // update the user
        const role = req.body.role
        const validRole = roleSchema.validateAsync(role)
        const users = prisma.user.update({
            where:{
                id:user_id
            },
            data:{
                role:validRole
            }
        })
        res.send(users)
    }catch(err){
        console.log(err)
        res.status(500).send({
            message:"Error Updating User",
            error:err.message
        })
    }
}

module.exports = putRole
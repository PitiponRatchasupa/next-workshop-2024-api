const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const UserRepository = require('../repository/UserRepository');
dotenv.config();

module.exports = {
    signIn: async (req, res) => {
        try{
            const username = req?.body?.username;
            const password = req?.body?.password;

            const user = await UserRepository.getUserByUsernameAndPassword(username, password);

            if( user != null ){
                const key = process.env.SECRET_KEY;
                const token = jwt.sign(user, key, { expiresIn: "1d" });

                return res.send({ token: token, id: user.id, name: user.name });
            } else {

                return res.status(401).send();
            }
        } catch(e){
            res.status(500).send({ error: e.message });
        }
    }
}
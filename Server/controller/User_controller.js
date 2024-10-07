import Usermodel from "../models/userschema.js"


export const Userregister = async (req, res) => {

    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const userdata = await Usermodel.create({
            "name": name,
            "email": email,
            "password": password,
        })
        res.status(200).json({
            status: true,
            msg: "user added",
            data: userdata,
        })
    }
    catch (e) {
        res.send(e)
    }
}

export const Userlogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const userlogin = await Usermodel.findOne({ email: email, password: password })
        if (userlogin) {
            res.status(200).json({
                succes: true,
                data: userlogin,
                msg: `${email} login`
            })
        }
        else {
            res.status(400).json({ message: 'Invalid email or password' });
        }
    }
    catch (e) {
        res.send(e)
    }
}

export const getallusers = async (req, res) => {
    const userdata = await Usermodel.find()

    res.json({
        status: true,
        msg: "all user fetched",
        data: userdata
    }
    )
}
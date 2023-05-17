import { User } from "../models/User.js";
import cloudNary from "../utilities/cloudinary.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
    const { name,email,password, address } = req.body
    const image = req.body.data
    const saltRound = 10;
    const theName = name.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(" ");
    const exUser = await User.findOne({ email })
    if (exUser) {
        return res.status(400).json({ message: "User Already Exists !" })
    }
    try {
        const passwordHash = await bcrypt.hash(password, saltRound);
        const uploadResponse = await cloudNary.uploader.upload(image, {
            upload_preset: 'sreejith',
        });

        const user = new User({
            name: theName,
            email,
            password: passwordHash,
            address,
            image: uploadResponse.public_id
        })

        await user.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }


}

export const allUsers = async (req, res) => {
    const users = await User.find().select("-password").sort({ createdAt: -1 })
    res.status(200).json(users)
}

export const userById = async (req, res) => {
    const { id } = req.query
    const user = await User.findById(id).select("-password")
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    } else {
        res.status(200).json(user)
    }
}

export const userUpdate = async (req, res) => {
    const { id } = req.query
    const { name, address,email } = req.body
    const image = req.body.data
    const exUser = await User.findById(id)
    if (!exUser) {
        return res.status(404).json({ message: "User not found" })
    }
    const uploadResponse = await cloudNary.uploader.upload(image, {
        upload_preset: 'sreejith',
    });
    const upd=await User.findByIdAndUpdate(id, { name, address, image: uploadResponse.public_id,email})
    res.status(200).json({message:'User Updated Successfully'})
}

export const deleteUser = async (req, res) => {
    const userId=req.query.id
    let user;
    try{
        user=await User.findById(userId)
        if(!user){
            return res.status(404).json({message:'No User Found'})
        }else{
            await User.findByIdAndDelete(userId)
            await cloudNary.uploader.destroy(user.image)

            return res.status(200).json({message:'User Successfully Deleted'})
        }
    }catch(err){
        console.log(err);
    }
}

import User from "../model/userModel.js";

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists." });
        }

        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};

export const fetch = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};


export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});

        if (!userExist) {
            return res.status(404).json({ message: "No users found." });
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true})

        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};

export const deletUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});

        if (!userExist) {
            return res.status(404).json({ message: "No users found." });
        }
        await User.findByIdAndDelete(id, req.body,{new:true})
        res.status(201).json({message:'user deleted'});
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};

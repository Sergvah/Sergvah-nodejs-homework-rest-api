const { Contact } = require("../../models/contact")

const getAll = async (req, res) => {
    // const result = await Contact.find({}, "name");
    const {_id: owner} = req.user;
    const {page = 1, limit = 20} = req.query
    const skip = (page - 1) * limit;
    const result = await Contact.find({owner}, "-createdAt -updatedAt", { skip, limit});
    // console.log(result);
    res.json(result);
}
module.exports = getAll
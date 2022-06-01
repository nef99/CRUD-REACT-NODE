import BlogModel from "../models/BlogModel.js";

//mostrar todos los registros
export const getAllBlogs = async (req, res)=>{
    try {
        const Blogs = await BlogModel.findAll()
        res.json(Blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}
//mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const Blog = await BlogModel.findAll({
            where:{id: req.params.id}
        })
        res.json(Blog[0])
    } catch (error) {
        res.json({message:error.message})
    }
}
//crear registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "registro creado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}
//actualizar un registro

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message": "registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}
//eliminar un registro
export const deleteBlog =async (req, res) =>{
    try {
        await BlogModel.destroy({
            where: { id : req.params.id }
        })
        res.json({
            "message": "registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}
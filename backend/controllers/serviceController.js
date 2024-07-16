const Service = require('../models/serviceModel');

//Function to get all services:

exports.getAll = async(req, res, next) => {
    try{
        const services = await Service.find();
        if(!services){
            res.status(404).json({
                status: "Error",
                message: "The requested data does not exist"
            })
        }else {
            res.status(200).json({
                status: "Success",
                data: services
            })
        }
    } catch(error) {
        res.status(500).json({
            status: "Error",
            message:error
        })
    }
}

//Function to get a service by its id:

exports.getOne = async(req, res, next) => {
    try{
        const service = await Service.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            data: service
        })
    } catch(error) {
        if(error.name == "CastError"){
            res.status(400).json({
                status: "Error",
                message: "The requested service does not exist"
            })
        } else {
            res.status(500).json({
                status: "Error",
                message:error
        })}
    }
}

//Function to create a new service:

exports.create = async(req, res, next) => {
    try{
        const newService = await Service.create(req.body);
        res.status(200).json({
            status: "Success",
            data: newService
        })
    } catch(error) {
        res.status(500).json({
            status: "Error",
            message:error
        })
    }
}

//Function to update a service:

exports.update = async(req, res, next) => {
    try{
        const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, 
            {new: true, runValidators: true});
        res.status(200).json({
            status: "Success",
            data: updatedService
        });
    } catch(error) {
        res.status(500).json({
            status: "Error",
            message:error
        })
    }
}

//Function to delete a service:

exports.delete = async(req, res, next) => {
    try{
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if(!deletedService){
            res.status(404).json({
                status: "Error",
                message: "The requested service has already been deleted"
            })
        } else {
            res.status(200).json({
                status: "Success",
                message: "Service deleted succesfully",
                data: null
            });
        }
    } catch(error) {
        res.status(500).json({
            status: "Error",
            message:error
        })
    }
}
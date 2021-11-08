import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class AbiturentController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const abiturent = await storage.abiturent.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                abiturent
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const abiturent = await storage.abiturent.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                abiturent
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const abiturent = await storage.abiturent.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                abiturent
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const abiturent = await storage.abiturent.create({...req.body, photo:req.file?.filename})

        console.log(req.file)
        console.log(req.body)
        res.status(201).json({
            success:true,
            data:{
                abiturent
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const abiturent = await storage.abiturent.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                abiturent
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const abiturent = await storage.abiturent.delete(req.params.id)
            if(!abiturent){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    abiturent
                }
            })
        })
}
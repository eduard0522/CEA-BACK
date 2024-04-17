import { Router } from "express";


export const ej = Router()

ej.get('/', (req, res)=>{
    res.send("login")
})


ej.get('/1', (req, res)=>{
    res.send("1")
})


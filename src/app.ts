import express, { Request, Response } from "express"
import cors from "cors"
import routes from "./routes/index"
import { expressLogger } from "./config/logger"
import { ErrorController } from "./controllers/error"
import path from "path"
const app = express()
const errorController = new ErrorController()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressLogger())
app.use(routes)
app.use('/assets', express.static(path.join(__dirname,'assets')))

app.get("/status", (req: Request, res: Response) => {
    res.json({
        stauts: "OK"
    })
})

app.use(errorController.hanle)

export default app
import { PaymentController } from './controller/PaymentController';
import { CardController } from "./controller/CardController"
import { UserController } from "./controller/UserController"
import { userRouter } from './bussiness/routes/UserRouter';
import { paymentRouter } from './bussiness/routes/PaymentRouter';
import { cardRouter } from './bussiness/routes/CardRouter';
import { app } from './src/services/app';
import express from 'express';
import cors from 'cors';

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/payment", paymentRouter)
app.use("/card", cardRouter) 
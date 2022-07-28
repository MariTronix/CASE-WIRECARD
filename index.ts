import express from 'express';
import cors from 'cors';
import { userRouter } from './src/routes/UserRouter';
import { app } from './src/services/app';
import { paymentRouter } from './src/routes/PaymentRouter';
import { cardRouter } from './src/routes/CardRouter';

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/payment", paymentRouter)
app.use("/card", cardRouter)
import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/UserRouter';
import { app } from './services/app';
import { paymentRouter } from './routes/PaymentRouter';
import { cardRouter } from './routes/CardRouter';

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/payment", paymentRouter)
app.use("/card", cardRouter)
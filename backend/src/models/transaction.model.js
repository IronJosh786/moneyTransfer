import mongoose from "mongoose";

const moneyTransactionSchema = new mongoose.Schema(
    {
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MoneyUser",
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MoneyUser",
        },
        amount: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

export const MoneyTransaction = mongoose.model(
    "MoneyTransaction",
    moneyTransactionSchema
);

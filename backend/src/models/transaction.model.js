import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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

moneyTransactionSchema.plugin(mongooseAggregatePaginate);

export const MoneyTransaction = mongoose.model(
    "MoneyTransaction",
    moneyTransactionSchema
);

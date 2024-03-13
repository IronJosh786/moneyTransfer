import { MoneyTransaction } from "../models/transaction.model.js";
import { MoneyUser } from "../models/user.model";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const newTransaction = asyncHandler(async (req, res) => {
    const { to, amount, message } = req.body;

    if (amount <= 0) {
        throw new ApiError(400, "Amount should be greater than 0");
    }

    const sender = await MoneyUser.findById(req.user?._id);
    if (!sender) {
        throw new ApiError(400, "Sender does not exist");
    }

    if (sender.balance < amount) {
        throw new ApiError(400, "Insufficient balance");
    }

    const receiver = await MoneyUser.findOne({ username: to });
    if (!receiver) {
        throw new ApiError(400, "Receiver does not exist");
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        sender.balance -= amount;
        await sender.save({ session, validateBeforeSave: false });

        receiver.balance += amount;
        await receiver.save({ session, validateBeforeSave: false });

        const newTransactionRecord = await MoneyTransaction.create(
            [
                {
                    from: req.user?._id,
                    to: receiver._id,
                    amount,
                    message,
                },
            ],
            { session }
        );

        await session.commitTransaction();
        session.endSession();

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    newTransactionRecord,
                    "Transaction successful"
                )
            );
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
});

export { newTransaction };

import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);

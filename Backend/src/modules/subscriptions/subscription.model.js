import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      enum: ["INR", "USD"],
      default: "INR",
    },

    billingCycle: {
      type: String,
      required: true,
      enum: ["month", "year"],
      default: "month",
    },

    features: [
      {
        type: String,
        trim: true,
      },
    ],

    popular: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Subscription", subscriptionSchema);
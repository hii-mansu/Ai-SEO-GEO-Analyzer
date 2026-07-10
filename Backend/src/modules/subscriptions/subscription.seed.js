import mongoose from "mongoose";
import dotenv from "dotenv";
import Subscription from "./subscription.model.js";

dotenv.config();

const plans = [
  {
    name: "Free",
    slug: "free",
    price: 0,
    currency: "INR",
    billingCycle: "month",
    features: [
      "5 AI analyses per day",
      "SEO & GEO Score",
      "AI-powered recommendations",
      "Basic website reports",
      "Community support",
    ],
    popular: false,
    active: true,
    sortOrder: 1,
  },
  {
    name: "Pro",
    slug: "pro",
    price: 299,
    currency: "INR",
    billingCycle: "month",
    features: [
      "Unlimited AI analyses",
      "Advanced SEO & GEO insights",
      "Priority AI processing",
      "Unlimited report history",
      "PDF report export",
      "Email support",
    ],
    popular: true,
    active: true,
    sortOrder: 2,
  },
];

const seedSubscriptions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected.");

    await Subscription.deleteMany();

    console.log("Old plans removed.");

    await Subscription.insertMany(plans);

    console.log("Subscription plans seeded successfully.");

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedSubscriptions();
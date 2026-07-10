import asyncHandler from "../../shared/utils/asyncHandler.js";
import subscriptionService from "./subscription.service.js";

class subscriptionController {
  getPlans = asyncHandler(async (req, res) => {
    const { plans } = await subscriptionService.getPlans();

    res.status(200).json({
      success: true,
      message: "Plans fetched successfully.",
      plans,
    });
  });
};



export default new subscriptionController();

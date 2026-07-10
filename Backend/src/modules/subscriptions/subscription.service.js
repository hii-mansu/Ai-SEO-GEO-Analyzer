import subscriptionModel from "./subscription.model.js";


class subscriptionService{

    async getPlans(){
        const plans = await subscriptionModel.find({
            active:true,
        }).sort({
            sortOrder:1,
        });

        return {plans};
    }
}

export default new subscriptionService();
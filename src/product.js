// Example of a simple UUID generator
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const plans = [
    {
        id: generateUUID(),
        name: "StarterPlan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "20$",
        buttonText: "Get Started",
        features: [
            "10 users",
            "2GB of storage",
            "Email support",
            "Help center access",
            "Phone support",
            "Community access"
        ]
    },
    {
        id: generateUUID(),
        name: "BasicPlan",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        price: "30$",
        buttonText: "Sign Up Now",
        features: [
            "50 users",
            "10GB of storage",
            "Priority email support",
            "Help center access",
            "Phone support",
            "Community access"
        ]
    },
    {
        id: generateUUID(),
        name: "StandardPlan",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        price: "50$",
        buttonText: "Choose Plan",
        features: [
            "100 users",
            "50GB of storage",
            "24/7 Email support",
            "Help center access",
            "Phone and chat support",
            "Community access"
        ]
    },
    {
        id: generateUUID(),
        name: "PremiumPlan",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
        price: "100$",
        buttonText: "Upgrade Now",
        features: [
            "Unlimited users",
            "100GB of storage",
            "Dedicated support",
            "Help center access",
            "Phone, chat, and email support",
            "Priority community access"
        ]
    },
    {
        id: generateUUID(),
        name: "EnterprisePlan",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        price: "200$",
        buttonText: "Contact Us",
        features: [
            "Custom users",
            "Unlimited storage",
            "Dedicated account manager",
            "Priority help center access",
            "24/7 support",
            "Exclusive community access"
        ]
    },
    {
        id: generateUUID(),
        name: "UltimatePlan",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
        price: "500$",
        buttonText: "Get Ultimate",
        features: [
            "Unlimited users",
            "Unlimited storage",
            "24/7 VIP support",
            "Priority help center and account access",
            "Personalized onboarding",
            "Exclusive community access"
        ]
    }
];

export default plans

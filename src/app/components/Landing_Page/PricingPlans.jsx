"use client";
import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: 9,
    period: "/month",
    description:
      "Perfect for personal accounts and small creators",
    features: [
      {
        text: "50 AI-generated post per month",
        included: true,
      },
      {
        text: "Basic infographic templates",
        included: true,
      },
      {
        text: "Caption writing AI",
        included: true,
      },
      {
        text: "Basic scheduling",
        included: true,
      },
      { text: "Email support", included: true },
    ],
    button: {
      text: "Get Started",
      color:
        "text-[#A742F1] border border-[#A742F1] bg-white hover:bg-[#f8eaff]",
    },
    highlight: false,
  },
  {
    name: "Creator",
    price: 29,
    period: "/month",
    description:
      "Ideal for content creators and small business",
    features: [
      {
        text: "200 AI-generated post per month",
        included: true,
      },
      {
        text: "Premium templates & designs",
        included: true,
      },
      {
        text: "Advanced AI content writing",
        included: true,
      },
      {
        text: "Smart scheduling & analytics",
        included: true,
      },
      {
        text: "Priority support",
        included: true,
      },
    ],
    button: {
      text: "Start Free Trial",
      color:
        "bg-gradient-to-r from-[#E354AD] to-[#A742F1] text-white hover:opacity-90",
    },
    highlight: true,
  },
  {
    name: "Agency",
    price: 99,
    period: "/month",
    description:
      "For agencies managing multiple client accounts",
    features: [
      {
        text: "Unlimited AI-generated content",
        included: true,
      },
      {
        text: "Custom brand templates",
        included: true,
      },
      {
        text: "Team collaboration tools",
        included: true,
      },
      {
        text: "Multi-account management",
        included: true,
      },
      {
        text: "Advanced analytics",
        included: true,
      },
      {
        text: "24/7 priority support",
        included: true,
      },
      { text: "Api access", included: true },
    ],
    button: {
      text: "Get Started",
      color:
        "text-[#A742F1] border border-[#A742F1] bg-white hover:bg-[#f8eaff]",
    },
    highlight: false,
  },
];

export default function PricingPlans() {
  return (
    <section
      className="w-full py-20 px-4"
      style={{
        background:
          "linear-gradient(69.51deg, #FAF5FE 22.5%, #FDF6F2 93.92%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-black mb-2">
          Simple, Transparent
        </h2>
        <h3
          className="text-2xl md:text-3xl font-extrabold text-center mb-6"
          style={{
            background:
              "linear-gradient(90deg, #E354AD 0%, #A742F1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pricing
        </h3>
        <p className="text-center text-gray-500 max-w-2xl mb-14 text-sm md:text-base font-medium">
          Choose the perfect plan for your
          Instagram growth. All plans include our
          core AI features with 14-day free trial
        </p>
        {/* Plans */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative flex flex-col bg-white rounded-2xl p-8 shadow-md border ${
                plan.highlight
                  ? "border-2 border-[#A742F1] z-10"
                  : "border-[#f3e6f3]"
              } min-h-[480px] items-center`}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E354AD] to-[#A742F1] text-white text-xs font-semibold shadow-md">
                  Most Popular
                </span>
              )}
              <h4 className="text-xl font-bold text-black mb-1 text-center">
                {plan.name}
              </h4>
              <p className="text-gray-500 text-sm mb-6 text-center">
                {plan.description}
              </p>
              <div className="flex items-end justify-center mb-6">
                <span className="text-3xl md:text-4xl font-extrabold text-black">
                  ${plan.price}
                </span>
                <span className="text-base text-gray-400 ml-1">
                  {plan.period}
                </span>
              </div>
              <ul className="flex-1 w-full mb-8 space-y-4">
                {plan.features.map(
                  (feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm md:text-base font-medium"
                    >
                      <FaCheckCircle className="text-[#A742F1] mr-2 text-lg" />
                      <span className="text-gray-700">
                        {feature.text}
                      </span>
                    </li>
                  )
                )}
              </ul>
              <button
                className={`mt-auto w-full py-3 rounded-full font-semibold text-base transition ${plan.button.color}`}
              >
                {plan.button.text}
              </button>
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-400 text-center mt-4">
          All plans include 14-day free trial • No
          credit required • Cancel anytime
        </div>
      </div>
    </section>
  );
}

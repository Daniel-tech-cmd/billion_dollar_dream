import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new Schema(
  {
    // Basic Authentication
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message:
          "Please enter a valid email address",
      },
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // Profile Information
    username: {
      type: String,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    avatar: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      maxlength: 150,
      default: "",
    },

    // Instagram Integration
    instagramHandle: {
      type: String,
      trim: true,
    },
    instagramConnected: {
      type: Boolean,
      default: false,
    },
    instagramAccessToken: {
      type: String,
      default: null,
    },
    instagramUserId: {
      type: String,
      default: null,
    },

    // Subscription & Billing
    subscriptionPlan: {
      type: String,
      enum: [
        "free",
        "basic",
        "pro",
        "enterprise",
      ],
      default: "free",
    },
    subscriptionStatus: {
      type: String,
      enum: [
        "active",
        "inactive",
        "cancelled",
        "trial",
      ],
      default: "trial",
    },
    subscriptionStartDate: {
      type: Date,
      default: Date.now,
    },
    subscriptionEndDate: {
      type: Date,
    },
    stripeCustomerId: {
      type: String,
      default: null,
    },
    stripeSubscriptionId: {
      type: String,
      default: null,
    },

    // Usage Tracking
    monthlyUsage: {
      captionsGenerated: {
        type: Number,
        default: 0,
      },
      designsCreated: {
        type: Number,
        default: 0,
      },
      infographicsGenerated: {
        type: Number,
        default: 0,
      },
      postsScheduled: {
        type: Number,
        default: 0,
      },
    },
    usageLimits: {
      captionsPerMonth: {
        type: Number,
        default: 10, // Free tier limit
      },
      designsPerMonth: {
        type: Number,
        default: 5,
      },
      infographicsPerMonth: {
        type: Number,
        default: 3,
      },
      postsPerMonth: {
        type: Number,
        default: 10,
      },
    },

    // Account Status
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: {
      type: String,
      default: null,
    },
    emailVerificationExpires: {
      type: Date,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },

    // Preferences
    preferences: {
      defaultTone: {
        type: String,
        enum: [
          "friendly",
          "professional",
          "funny",
          "inspiring",
          "serious",
          "playful",
        ],
        default: "friendly",
      },
      includeHashtags: {
        type: Boolean,
        default: true,
      },
      includeEmojis: {
        type: Boolean,
        default: true,
      },
      autoSchedule: {
        type: Boolean,
        default: false,
      },
      timezone: {
        type: String,
        default: "UTC",
      },
      language: {
        type: String,
        default: "en",
      },
    },

    // Analytics & Performance
    totalPostsCreated: {
      type: Number,
      default: 0,
    },
    totalEngagement: {
      type: Number,
      default: 0,
    },
    averageEngagementRate: {
      type: Number,
      default: 0,
    },

    // Security & Privacy
    passwordResetToken: {
      type: String,
      default: null,
    },
    passwordResetExpires: {
      type: Date,
      default: null,
    },
    twoFactorEnabled: {
      type: Boolean,
      default: false,
    },
    twoFactorSecret: {
      type: String,
      default: null,
    },

    // API & Integration
    apiKey: {
      type: String,
      default: null,
    },
    webhookUrl: {
      type: String,
      default: null,
    },

    // Team & Collaboration (for enterprise users)
    teamId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      default: null,
    },
    role: {
      type: String,
      enum: [
        "owner",
        "admin",
        "member",
        "viewer",
      ],
      default: "owner",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for full name
userSchema.virtual("fullName").get(function () {
  return this.name;
});

// Virtual for remaining usage
userSchema
  .virtual("remainingUsage")
  .get(function () {
    return {
      captions: Math.max(
        0,
        this.usageLimits.captionsPerMonth -
          this.monthlyUsage.captionsGenerated
      ),
      designs: Math.max(
        0,
        this.usageLimits.designsPerMonth -
          this.monthlyUsage.designsCreated
      ),
      infographics: Math.max(
        0,
        this.usageLimits.infographicsPerMonth -
          this.monthlyUsage.infographicsGenerated
      ),
      posts: Math.max(
        0,
        this.usageLimits.postsPerMonth -
          this.monthlyUsage.postsScheduled
      ),
    };
  });

// Virtual for subscription status
userSchema
  .virtual("isSubscriptionActive")
  .get(function () {
    if (this.subscriptionStatus === "trial")
      return true;
    if (
      this.subscriptionStatus === "active" &&
      this.subscriptionEndDate
    ) {
      return (
        new Date() < this.subscriptionEndDate
      );
    }
    return this.subscriptionStatus === "active";
  });

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(
      this.password,
      salt
    );
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword =
  async function (candidatePassword) {
    return bcrypt.compare(
      candidatePassword,
      this.password
    );
  };

// Method to check if user can perform action based on usage limits
userSchema.methods.canPerformAction = function (
  actionType
) {
  const remaining = this.remainingUsage;
  switch (actionType) {
    case "generateCaption":
      return remaining.captions > 0;
    case "createDesign":
      return remaining.designs > 0;
    case "generateInfographic":
      return remaining.infographics > 0;
    case "schedulePost":
      return remaining.posts > 0;
    default:
      return false;
  }
};

// Method to increment usage
userSchema.methods.incrementUsage = function (
  actionType
) {
  switch (actionType) {
    case "generateCaption":
      this.monthlyUsage.captionsGenerated += 1;
      break;
    case "createDesign":
      this.monthlyUsage.designsCreated += 1;
      break;
    case "generateInfographic":
      this.monthlyUsage.infographicsGenerated += 1;
      break;
    case "schedulePost":
      this.monthlyUsage.postsScheduled += 1;
      break;
  }
  return this.save();
};

// Indexes for better query performance
userSchema.index({ instagramHandle: 1 });
userSchema.index({ subscriptionStatus: 1 });
userSchema.index({ "preferences.timezone": 1 });
userSchema.index({ createdAt: -1 });

const User =
  models.User || model("User", userSchema);

export default User;

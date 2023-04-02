import mongoose from "mongoose";
const registrationSchema = mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    firstName: String,
    lastName: String,
    email: String,
    amount: Number,
    paymentMethode: String,
    phone: String,
    vclass: String,
    adult: String,
    children: String,
    date: String,
    flightNo: String,
    company: String,
    arrivalTime: String,
    from: String,
    to: String,
    departureTime: String,
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations ||
  mongoose.model("Registrations", registrationSchema);
export default Registrations;

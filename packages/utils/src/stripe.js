import Stripe from "stripe";
import { stripe as config } from "./env-config";

const stripe = Stripe(config.secretKey);

export default stripe;

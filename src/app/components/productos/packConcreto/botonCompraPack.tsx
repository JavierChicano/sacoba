import { checkoutPack } from "@/app/api/mandarCheckouts"
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

export default function BotonCompraPack(pack: any){
    return <div
    className="bg-colorBase p-2 lg:w-32 w-1/2 flex justify-center cursor-pointer"
    onClick={() => {
      checkoutPack(pack)
    }}
  >
    Comprar
  </div>
}
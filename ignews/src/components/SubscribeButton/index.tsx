import { useSession, signIn } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface ISubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const { data: session } = useSession()

  // session.user

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }
    try {
      const response = await api
        .post('/subscribe')
        .then(data => data.data)
        .catch(error => console.log(error))
      const { sessionId } = response
      console.log('RESPONSE CHEGANDO:', response)

      console.log('SESSION chegando:', sessionId)
      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}

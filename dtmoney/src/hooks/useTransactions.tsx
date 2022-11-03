import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/api'

interface ITransaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: ITransaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    // return console.log(transactionInput)

    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    console.log(response)
    const { transactions: currenTransaction } = response.data

    setTransactions([...transactions, currenTransaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}

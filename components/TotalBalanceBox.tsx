import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./ui/DoughnutChart"


export const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {

  return (
   <section className="total-balance">
    <div className="total-balance-chart">
        {/* <TotalBalanceChart Donut /> */}
    </div>
    <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
            Bank Accounts: {totalBanks} 
            <DoughnutChart accounts={accounts} />
        </h2>
        <div className='flex flex-col gap-2'>
            <p className='total-balance-label'>
                Total Current Balance
            </p>

            <div className='total-balance-amount flex-center gap-2'>
                <AnimatedCounter amount= {totalCurrentBalance}/>
            </div>
        </div>
    </div>
   </section>
  )
}

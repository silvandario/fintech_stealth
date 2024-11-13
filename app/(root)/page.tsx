import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RIghtSidebar'

import { TotalBalanceBox } from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'John' , lastName: 'Doe', email: "a@g.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={ loggedIn?.firstName || "Guest"}
                    subtext="Manage your finances with ease" 
                />
                <TotalBalanceBox 
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance = {43234.90}
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 24324.60},{currentBalance: 24324.60}]}
        />

    </section>
  )
}

export default Home
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'

import { TotalBalanceBox } from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
    const loggedIn = await getLoggedInUser(); ;
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={ loggedIn?.name || "Guest"}
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
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
        />

    </section>
  )
}

export default Home
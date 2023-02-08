import Header from './components/Header'
import StatusBar from './components/StatusBar'
import Step from './components/step/Item'
import Counter from './components/step/Counter'
import Step1 from './components/step/login/Step1'

export default function Home() {
  return (
    <main className="main">
      <div className="main-wrapper">
            <div className="main-inner">
                <Header />   
                <form id="steps" method="post">
                    <div className="show-section"> 
                        <Counter />
                        <Step1 />
                    </div>
                    <StatusBar/>
                </form>
            </div>
        </div>
    </main>
  )
}

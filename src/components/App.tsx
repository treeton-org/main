import './App.sass'
import logo from '../assets/logo.svg'

export const App = (): JSX.Element => (
  <div className='App'>
      <img src={logo} alt='logo' />
      <div className='name'>Tree TON</div>
      <div className='soon'>coming soon</div>
  </div>
)

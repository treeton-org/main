import './App.scss'
import logo from './logo.svg'

export const App = (): JSX.Element => (
  <div className='app'>
    <h1>Hello World!</h1>
    <p>Foo to the bar</p>
    <img src={logo} height='480' />
  </div>
)

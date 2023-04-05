import css from './App.module.sass'
import logo from '../assets/logo.svg'

export const App = (): JSX.Element => (
  <div className={css.App}>
      <img src={logo} alt='logo' />
      <div className={css.name}>Tree TON</div>
      <div className={css.soon}>coming soon</div>
  </div>
)

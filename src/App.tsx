import './styles.css'
import IMAGE from './eat-sleep-code.jpg'
import REACTLOGO from './react-original.svg'
// import ReactLogo from './ReactLogo';
import ClickCounter from './ClickCounter'

const App = () => (
  <div>
    <h1>React TypeScript Bootstrap {process.env.NODE_ENV}</h1>
    <img src={IMAGE} alt="eat sleep code" />
    <img src={REACTLOGO} alt="React logo" width="300" height="300" />
    {/* <ReactLogo /> */}
    <ClickCounter />
  </div>
)

export default App

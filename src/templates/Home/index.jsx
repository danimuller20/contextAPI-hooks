import { useCounterContext } from '../../contexts/CounterContext';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
function Home() {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((resolve) => console.log(resolve))
      .catch((error) => console.log(error.name, ':', error.message));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>Set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>Set 100</Button>
        <Button isBtnDisabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async increase
        </Button>
        <Button isBtnDisabled={state.loading} onButtonClick={handleError}>
          Async error
        </Button>
      </div>
    </div>
  );
}

export default Home;

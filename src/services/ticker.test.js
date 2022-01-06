import TaskRetriver from './taskRetriver';
import Ticker from './ticker';

test('Ticker ', () => {
	jest.spyOn(TaskRetriver, 'getTasks');

	Ticker.start();
});

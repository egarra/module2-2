import { Friends } from 'Tabs/Friends/Friends';
import {Counter} from 'Tabs/Counter/Counter'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { PhotoGallary } from 'Tabs/PhotoGallary/PhotoGallary';
import { Todos } from 'Tabs/Todos/Todos';

export const App = () => {
  return (
    <Tabs>
    <TabList>
      <Tab>Gallary</Tab>
        <Tab>Todos</Tab>
        <Tab>Counter</Tab>
        <Tab>Friends</Tab>
    </TabList>

    <TabPanel>
      <PhotoGallary />
    </TabPanel>
    <TabPanel>
      <Todos/>
      </TabPanel>
      <TabPanel>
      <Counter/>
      </TabPanel>
      <TabPanel>
      <Friends/>
    </TabPanel>
  </Tabs>
  );
};

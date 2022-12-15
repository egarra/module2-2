

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
    </TabList>

    <TabPanel>
      <PhotoGallary />
    </TabPanel>
    <TabPanel>
      <Todos/>
    </TabPanel>
  </Tabs>
  );
};
